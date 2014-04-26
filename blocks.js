
function createLevel()
{
	var blocks = [];
	for(var x = 0; x < 18; x++)
	{
		for(var y = 0; y < 4; y++)
		{
			blocks.push(new Block(x * 32, y * 32));
		}
	}
	return blocks;
}

function Block(x, y)
{
	this.x = x;
	this.y = y;
	this.alive = true;
	this.draw = function()
	{
		if(this.alive)
			context.drawImage(ASSETS.images['block'], this.x, this.y);
	}
}