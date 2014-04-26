function Ball()
{
	this.x = 300;
	this.y = 300;
	this.vx = 1.0;
	this.vy = 1.0;
	this.draw = function()
	{
		context.drawImage(ASSETS.images['ball'], this.x, this.y);
	}
	this.update = function()
	{
		this.x += this.vx;
		this.y += this.vy;
		if(this.x < 0)
		{
			this.vx *= -1;
		}
		if(this.x > 600 - 9)
		{
			this.vx *= -1;
		}
		if(this.y > 580 && this.y < 600)
		{
			if(this.collideBar(Game.bar))
			{
				this.vy = -1 * Math.abs(this.vy);
			}
		}
		if(this.y < 0)
		{
			this.vy = Math.abs(this.vy);
		}
		this.collideBlocks();
	}
	this.collideBar = function(bar)
	{
		if(Math.abs(this.x - bar.x - 45) < 48)
		{
			return true;
		}
		return false;
	}
	this.collideBlocks = function()
	{
		for( var i = 0; i < Game.blocks.length; i++)
		{
			this.collideBlock(Game.blocks[i]);
		}
	}
	this.collideBlock = function(block)
	{
		if(!block.alive)
			return;
		if(this.x > block.x && this.x < block.x + 32)
		{
			if(this.y > block.y && this.y < block.y + 32)
			{
				block.alive = false;
				this.vy = 1.0;
			}	
		}
	}
}