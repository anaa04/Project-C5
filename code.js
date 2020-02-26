var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creates the ball and targets
var ball = createSprite(200,300,10,10);
var paddle = createSprite(200,370,50,10);
var target1 = createSprite(80,100,50,10);
var target2 = createSprite(26,100,50,10);
var target3 = createSprite(135,100,50,10);
var target4 = createSprite(190,100,50,10);
var target5 = createSprite(245,100,50,10);
var target6 = createSprite(300,100,50,10);
var target7 = createSprite(355,100,50,10);
var target8 = createSprite(410,100,50,10);
var target9 = createSprite(80,70,50,10);
var target10 = createSprite(26,70,50,10);
var target11 = createSprite(135,70,50,10);
var target12 = createSprite(190,70,50,10);
var target13 = createSprite(245,70,50,10);
var target14 = createSprite(300,70,50,10);
var target15 = createSprite(355,70,50,10);
var target16 = createSprite(410,70,50,10);

//creates the game state
var gameState = "serve";

//creates the score
var score = 0;

//giving colours to the ball,paddle and the targets
ball.shapeColor = "red";
paddle.shapeColor = "lightblue";
target1.shapeColor = "red";
target2.shapeColor = "blue";
target3.shapeColor = "green";
target4.shapeColor = "salmon";
target5.shapeColor = "gold";
target6.shapeColor = "magenta";
target7.shapeColor = "orange";
target8.shapeColor = "turquoise";
target9.shapeColor = "purple";
target10.shapeColor = "yellow";
target11.shapeColor = "lightgreen";
target12.shapeColor = "indigo";
target13.shapeColor = "violet";
target14.shapeColor = "brown";
target15.shapeColor = "darkred";
target16.shapeColor = "navy";

 
  function draw() {
  
  //makes the bg black
  background("black");
  
  //makes the paddle move with the cursor
  paddle.x = World.mouseX;
   
  //displays the text and gives size to the text
   text("SCORE :" + score,280,20);
   
   
  //cretates the edges
   createEdgeSprites();
  
  //makes the ball bounce off the edges
   ball.bounceOff(topEdge);
   ball.bounceOff(rightEdge);
   ball.bounceOff(leftEdge);
  
  //makes the targets bounce off the edges
   target1.bounceOff(topEdge );
   target2.bounceOff(topEdge );
   target3.bounceOff(topEdge );
   target4.bounceOff(topEdge );
   target5.bounceOff(topEdge );
   target6.bounceOff(topEdge );
   target7.bounceOff(topEdge );
   target8.bounceOff(topEdge );
   target9.bounceOff(topEdge );
   target10.bounceOff(topEdge );
   target11.bounceOff(topEdge );
   target12.bounceOff(topEdge );
   target13.bounceOff(topEdge );
   target14.bounceOff(topEdge );
   target15.bounceOff(topEdge );
   target16.bounceOff(topEdge );
 
  target1.bounceOff(bottomEdge); 
  target2.bounceOff(bottomEdge); 
  target3.bounceOff(bottomEdge); 
  target3.bounceOff(bottomEdge); 
  target4.bounceOff(bottomEdge); 
  target5.bounceOff(bottomEdge); 
  target6.bounceOff(bottomEdge); 
  target7.bounceOff(bottomEdge); 
  target8.bounceOff(bottomEdge); 
  target9.bounceOff(bottomEdge); 
  target10.bounceOff(bottomEdge); 
  target11.bounceOff(bottomEdge); 
  target12.bounceOff(bottomEdge); 
  target13.bounceOff(bottomEdge); 
  target14.bounceOff(bottomEdge); 
  target15.bounceOff(bottomEdge); 
  target16.bounceOff(bottomEdge); 


   target1.bounceOff(rightEdge);
   target2.bounceOff(rightEdge);
   target3.bounceOff(rightEdge);
   target4.bounceOff(rightEdge);
   target5.bounceOff(rightEdge);
   target6.bounceOff(rightEdge);
   target7.bounceOff(rightEdge);
   target8.bounceOff(rightEdge);
   target9.bounceOff(rightEdge);
   target10.bounceOff(rightEdge);
   target11.bounceOff(rightEdge);
   target12.bounceOff(rightEdge);
   target13.bounceOff(rightEdge);
   target14.bounceOff(rightEdge);
   target15.bounceOff(rightEdge);
   target16.bounceOff(rightEdge);
   
  target1.bounceOff(leftEdge);
  target2.bounceOff(leftEdge);
  target3.bounceOff(leftEdge);
  target4.bounceOff(leftEdge);
  target5.bounceOff(leftEdge);
  target6.bounceOff(leftEdge);
  target7.bounceOff(leftEdge);
  target8.bounceOff(leftEdge);
  target9.bounceOff(leftEdge);
  target10.bounceOff(leftEdge);
  target11.bounceOff(leftEdge);
  target12.bounceOff(leftEdge);
  target13.bounceOff(leftEdge);
  target14.bounceOff(leftEdge);
  target15.bounceOff(leftEdge);
  target16.bounceOff(leftEdge);
 
    //displays the text if the game state is serve
    if(gameState === "serve"){
    textSize(14);
    text("Press space to serve", 140, 250);
    }
    
    //if the ball goes out of the screen it shud reset
    if(ball.y<0,ball.y>400){
    reset();
    gameState = "serve";
    playSound("assets/category_explosion/8bit_explosion.mp3");
   }
   
    //when space is preesed the ball mobves and game state becomes play
    if (keyDown("space") &&  gameState === "serve") {
    ball.velocityX = 4;
    ball.velocityY = 4;
    serve();
    gameState = "play";
   }
  
    //if the ball is touching the targets the targets destroy ans the score increases by 1  
    if(ball.isTouching(target1)){
    ball.bounceOff(target1);
    playSound("assets/category_digital/bounce_2.mp3");
    target1.destroy();
    score = score + 1;
  }
  
    if(ball.isTouching(target2)){
    ball.bounceOff(target2);
    playSound("assets/category_digital/bounce_2.mp3");
    target2.destroy();
    score = score + 1; 
  }
  
  if(ball.isTouching(target3)){
    ball.bounceOff(target3);
    playSound("assets/category_digital/bounce_2.mp3");
    target3.destroy();
    score = score + 1;
  }
  
  if(ball.isTouching(target4)){
   ball.bounceOff(target4);
   playSound("assets/category_digital/bounce_2.mp3");
   target4.destroy();
   score = score + 1;
  }
  
  if(ball.isTouching(target5)){
    ball.bounceOff(target5);
    playSound("assets/category_digital/bounce_2.mp3");
    target5.destroy();
    score = score + 1;
  }
  
  if(ball.isTouching(target6)){
    ball.bounceOff(target6);
    playSound("assets/category_digital/bounce_2.mp3");
    target6.destroy();
    score = score + 1;
  }
  
  if(ball.isTouching(target7)){
    ball.bounceOff(target7);
    playSound("assets/category_digital/bounce_2.mp3");
    target7.destroy();
    score = score + 1;
  }
  
  if(ball.isTouching(target8)){
    ball.bounceOff(target8);
    playSound("assets/category_digital/bounce_2.mp3");
    target8.destroy();
    score = score + 1;
  }
  
 if(ball.isTouching(target9)){
   ball.bounceOff(target9);
   playSound("assets/category_digital/bounce_2.mp3");
   target9.destroy();
   score = score + 1;
 }
  
  if(ball.isTouching(target10)){
    ball.bounceOff(target10);
    playSound("assets/category_digital/bounce_2.mp3");
    target10.destroy();
    score = score + 1;
  }
  
  if(ball.isTouching(target11)){
    ball.bounceOff(target11);
    playSound("assets/category_digital/bounce_2.mp3");
    target11.destroy();
    score = score + 1;
  }
  
  if(ball.isTouching(target12)){
    ball.bounceOff(target12);
    playSound("assets/category_digital/bounce_2.mp3");
    target12.destroy();
    score = score + 1;
  }
  
  if(ball.isTouching(target13)){
    ball.bounceOff(target13);
    playSound("assets/category_digital/bounce_2.mp3");
    target13.destroy();
    score = score + 1;
    }
  
  if(ball.isTouching(target14)){
    ball.bounceOff(target14);
    playSound("assets/category_digital/bounce_2.mp3");
    target14.destroy();
    score = score + 1;
  }
  
  if(ball.isTouching(target15)){
    ball.bounceOff(target15);
    playSound("assets/category_digital/bounce_2.mp3");
    target15.destroy();
    score = score + 1;
  }
  
  if(ball.isTouching(target16)){
    ball.bounceOff(target16);
    playSound("assets/category_digital/bounce_2.mp3");
    target16.destroy();
    score = score + 1;
  }
  
  if(ball.isTouching(paddle)){
    ball.bounceOff(paddle);
    playSound("assets/category_explosion/destruction_5.mp3");
    }
  
  //if score is 16 the game state becomes over
   if(score === 16){
   reset();
   gameState = "serve";         
 }
  
  //if the ball goes out of the screen it resets
  if(ball.y > 400){
  text("YOU LOSE",200,200);
  reset();
  }  
  
  //draws the sprites
  drawSprites();
  }

 function serve(){
 
  //the ball and targets move according to the velocities
  ball.velocityX = 4;
  ball.velocityY = 4;
  target1.velocityX = 1;
  target2.velocityX = -1;
  target3.velocityX = 1; 
  target4.velocityX = -1;
  target5.velocityX = 1;
  target6.velocityX = -1;
  target7.velocityX = -1;
  target8.velocityX = 1;
  target9.velocityX = -1;
  target10.velocityX = 1;
  target11.velocityX = -1;
  target12.velocityX = 1;
  target13.velocityX = -1;
  target14.velocityX = 1;
  target15.velocityX = -1;
  target16.velocityX = 1;
  target1.velocityY = -1;
  target2.velocityY = 1; 
  target3.velocityY = 1;
  target4.velocityY = 1;
  target5.velocityY = -1;
  target6.velocityY = 1;  
  target7.velocityY = -1;
  target8.velocityY = 1;
  target9.velocityY = -1;
  target10.velocityY = 1;
  target11.velocityY = -1;
  target12.velocityY = 1;
  target13.velocityY = -1;
  target14.velocityY = 1;
  target15.velocityY = -1;
  target15.velocityY = 1;
  target16.velocityY = -1;

}

  function reset(){
  
  //gives the x and y position and the velocity 0 for the ball
   ball.x = 200;
   ball.y = 200;
   ball.velocityY = 0;
   ball.velocityX = 0;

  //makes the score 0
  score = 0;
  
  //destroys the ball and the targets
  ball.destroy();
  target1.destroy();
  target2.destroy();
  target3.destroy();
  target4.destroy();
  target5.destroy();
  target6.destroy();
  target7.destroy();
  target8.destroy();
  target9.destroy();
  target10.destroy();
  target11.destroy();
  target12.destroy();
  target13.destroy();
  target14.destroy();
  target15.destroy();
  target16.destroy();

  //creates the ball and the targets
  ball = createSprite(200,300,10,10);
  target1 = createSprite(80,100,50,10);
  target2 = createSprite(26,100,50,10);
  target3 = createSprite(135,100,50,10);
  target4 = createSprite(190,100,50,10);
  target5 = createSprite(245,100,50,10);
  target6 = createSprite(300,100,50,10);
  target7 = createSprite(355,100,50,10);
  target8 = createSprite(410,100,50,10);
  target9 = createSprite(80,70,50,10);
  target10 = createSprite(26,70,50,10);
  target11 = createSprite(135,70,50,10);
  target12 = createSprite(190,70,50,10);
  target13 = createSprite(245,70,50,10);
  target14 = createSprite(300,70,50,10);
  target15 = createSprite(355,70,50,10);
  target16 = createSprite(410,70,50,10);

  //gives velocity 0 to the targets
  target1.velocityX = 0;
  target2.velocityX = 0;
  target3.velocityX = 0; 
  target4.velocityX = 0;
  target5.velocityX = 0;
  target6.velocityX = 0;
  target7.velocityX = 0;
  target8.velocityX = 0;
  target9.velocityX = 0;
  target10.velocityX = 0;
  target11.velocityX = 0;
  target12.velocityX = 0;
  target13.velocityX = 0;
  target14.velocityX = 0;
  target15.velocityX = 0;
  target16.velocityX = 0;
  target1.velocityY = 0;
  target2.velocityY = 0; 
  target3.velocityY = 0;
  target4.velocityY = 0;
  target5.velocityY = 0;
  target6.velocityY = 0;  
  target7.velocityY = 0;
  target8.velocityY = 0;
  target9.velocityY = 0;
  target10.velocityY = 0;
  target11.velocityY = 0;
  target12.velocityY = 0;
  target13.velocityY = 0;
  target14.velocityY = 0;
  target15.velocityY = 0;
  target15.velocityY = 0;
  target16.velocityY = 0;

  //gives colours to the ball and the targets
  ball.shapeColor = "red";
  paddle.shapeColor = "lightblue";
  target1.shapeColor = "red";
  target2.shapeColor = "blue";
  target3.shapeColor = "green";
  target4.shapeColor = "salmon";
  target5.shapeColor = "gold";
  target6.shapeColor = "magenta";
  target7.shapeColor = "orange";
  target8.shapeColor = "white";
  target9.shapeColor = "purple";
  target10.shapeColor = "yellow";
  target11.shapeColor = "lightgreen";
  target12.shapeColor = "indigo";
  target13.shapeColor = "violet";
  target14.shapeColor = "brown";
  target15.shapeColor = "darkred";
  target16.shapeColor = "navy";
}
 


  







// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
