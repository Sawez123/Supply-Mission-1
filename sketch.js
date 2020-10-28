//Declaring the variables.
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
//Declaring the constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//preload function.
function preload() {
	//Loading images to two variables.
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

//setup function.
function setup() {
	//Creating the canvas area.
	createCanvas(800, 700);
	//Setting rectMode as CENTER.
	rectMode(CENTER);

	//Creating a sprite named packageSprite.
	packageSprite=createSprite(width/2, 80, 10,10);
	//Adding image to it.
	packageSprite.addImage(packageIMG);
	//Adjusting its size.
	packageSprite.scale = 0.2;

	//Creating a sprite named helicopterSprite.
	helicopterSprite=createSprite(width/2, 200, 10,10);
	//Adding image to it.
	helicopterSprite.addImage(helicopterIMG);
	//Adjusting its size.
	helicopterSprite.scale = 0.6;

	//Creating a sprite named groundSprite.
	groundSprite=createSprite(width/2, height-35, width,10);
	//Giving white color to it.
	groundSprite.shapeColor=color(255);

	//Creating an Engine and storing it in the variable engine.
	engine = Engine.create();
	//Storing 'engine.world' in the variable world.
	world = engine.world;

	//Creating a circle body named packageBody.
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	//Adding it to Matter.World.
	World.add(world, packageBody);

	//Creating a rectangle body named ground.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//Adding it to Matter.World.
 	World.add(world, ground);

	 //Running the previously created engine.
	Engine.run(engine);
}

//draw function.
function draw() {
	//Setting rectMode as CENTER.
	rectMode(CENTER);
	//Setting baackground color as black.
	background(0);
	
	//Setting packageSprite's x and y position same as packageBody's x and y position.
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;

	//Displaying text when packageSprite touches groundSprite.
	if(packageSprite.isTouching(groundSprite)) {
		fill("red");
		textFont("segoe script");
		textStyle(BOLD);
		textSize(30);
		text("Well Done!", 290,510);
	}

	//Displaying text when packageSprite's y position is greater than 800.
	if(packageSprite.isTouching(groundSprite)) {
		fill("red");
		textFont("segoe script");
		textStyle(BOLD);
		textSize(15);
		text("Refresh the page to retry.", 45,50);
	}

	//Displaying info text.
	fill("white");
	textFont("segoe script");
	textSize(20);
	text("Press down arrow key to drop the package containing essential medical",20,360);
	text("supplies and food for people stuck in a city infested with zombies.",20,390);

	//Displaying all sprites on the screen.
  	drawSprites();
}

//keyPressed function.
function keyPressed() {
	//Making the packageBody fall on ground when down arrow key is pressed.
 	if (keyCode === DOWN_ARROW) {
    	Matter.Body.setStatic(packageBody, false);
  	}
}



