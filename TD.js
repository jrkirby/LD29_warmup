
var canvas;
var context;
var ASSETS = {};

function start_()
{
	ASSETS = loadAssets("assets.json", init);
}

function init()
{
	canvas = document.getElementById("MainCanvas");
	context = canvas.getContext('2d');

	requestAnimationFrame(frame);
}

frame = function()
{
	update();
	render();
	requestAnimationFrame(frame);
}

function update()
{

}

function render()
{
	
}
