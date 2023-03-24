noseX = 0;
noseY = 0;
marioX = 0;
marioY = 0;
img = "";
function preload() 
{
	world_start = loadSound("world_start.wav");
	console.log('Sound Loaded!');
	setSprites();
	MarioAnimation();
	img = loadImage('mario.jpg');
	mario_jump = loadSound('jump.wav');
	mario_coin = loadSound('coin.wav');
	mario_gameover = loadSound('gameover.wav');
	mario_die = loadSound('mariodie.wav');
	mario_kick = loadSound('kick.wav');
}

function setup() 
{
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}

function modelLoaded() 
{
	console.log('Model Loaded!');
}

function draw() 
{
	game();	
}
function gotPoses(results)
{
	if(results.length > 0)

	{		
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		
	}

}
