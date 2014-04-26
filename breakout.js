
var canvas;
var context;
var ASSETS = {};
var Game = {};

function start()
{
	ASSETS = loadAssets("assets.json", init);
}

function init()
{
	canvas = document.getElementById("MainCanvas");
	context = canvas.getContext('2d');
	Game.blocks = createLevel();
	Game.bar = new Bar();
	Game.mouse = {};
	Game.ball = new Ball();

	document.documentElement.addEventListener('mousemove', onmousemove, false);


	requestAnimationFrame(frame);
}

function getMousePos(canvas, e) {
	var rect = canvas.getBoundingClientRect();
	return [e.clientX - rect.left, e.clientY - rect.top];
}

function onmousemove(e)
{
	var mousePos = getMousePos(canvas, e);
	Game.mouse.x = mousePos[0];
	Game.mouse.y = mousePos[1];
}

function frame()
{
	update();
	render();
	requestAnimationFrame(frame);
}



function update()
{
	Game.bar.update();
	Game.ball.update();
}	

function render()
{
	context.clearRect( 0, 0, canvas.width, canvas.height );
	for( var i = 0; i < Game.blocks.length; i++)
	{
		Game.blocks[i].draw();
	}
	Game.bar.draw();
	Game.ball.draw();
}

start();