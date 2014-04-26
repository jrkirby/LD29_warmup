function Bar()
{
	this.x = 300;
	this.y = 580;
	this.draw = function()
	{
		context.drawImage(ASSETS.images['bar'], this.x, this.y);
	}
	this.update = function()
	{
		this.x = Game.mouse.x - 45;
	}
}