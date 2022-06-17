//making of universal variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box;
var groundObj;
var endMessage, restartButton;
var endLine;
var barrier;


function preload() {

}

function setup() {
	createCanvas(1200, 500);

	//creating userengine and userworld for matter.js
	userEngine = Engine.create();
	userWorld = userEngine.world;

	//Create the Bodies of box and endLine and obj of ground Here.
	var box_options = {
		isStatic: false,
		restitution: 0,
		friction: 0,
		density: 1.2,
		velocity: { x: -5, y: 0 }
	}
	box = Bodies.rectangle(20, 200, 15, 15, box_options);
	World.add(userWorld, box);
	console.log(box);
	//creating the ground
	groundObj = new Ground(width / 2, 450, width, 20);
	//create barrier
	barrier = new Ground(-30, 390, 60, 100);
	var endLine_options = {
		isStatic: true,
		restition: 0,
		friction: 0,
		density: 1.2,
	}
	//creating the endLine
	endLine = Bodies.rectangle(1100, 425, 20, 30, endLine_options);
	World.add(userWorld, endLine);

	var barrier_options = {
		isStatic: true,
		restition: 0,
		friction: 0,
		density: 1.2,
	}


}


function draw() {
	background(0);

	//making the body of the ball visible
	Engine.update(userEngine);
	fill("white");
	rectMode(CENTER);
	rect(box.position.x, box.position.y, 30, 30);

	//making the body of the endLine visible
	fill("red");
	rectMode(CENTER);
	rect(endLine.position.x, endLine.position.y, 20, 30)

	//displaying the ground
	groundObj.display();

	//displaying the barrier
	barrier.display();
}

// function keyPressed() {
// 	if (keyCode === RIGHT_ARROW) {
// 		Matter.Body.setVelocity(box, { x: 5, y: 0 });

// 	}

// }

