"use strict";

var Scene = {
    canvas : undefined,
    canvasContext : undefined,
	manSprite: undefined,
    wolfSprite: undefined
};

Scene.start = function () {

	// Get the canvas and it's context.
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");
	
	// Setup the man to be displayed.
    Scene.manSprite = man;   
    Scene.wolfSprite = wolf;
	
	// Attach the image to be used for the sprite.
	// Scene.sprite.img = new Image();
    // Scene.sprite.img.src = Scene.sprite.src;

    Scene.manSprite.img = new Image();
    Scene.manSprite.img.src = Scene.manSprite.src;
    Scene.wolfSprite.img = new Image();
    Scene.wolfSprite.img.src = Scene.wolfSprite.src;
	
	// Wait till the wolf image is loaded before starting the animation.
    Scene.wolfSprite.img.onload = function() {        
        Scene.wolfSprite.offset=-Scene.wolfSprite.frames[Scene.wolfSprite.frame].frame.w;
          Scene.mainLoop();
        // Wait for 2 seconds before starting the man animation.
        setTimeout(function() {
            Scene.manSprite.img.onload = function() {        
                Scene.manSprite.offset=-Scene.manSprite.frames[Scene.manSprite.frame].frame.w;
                Scene.mainLoop();
            };
        }, 2000);
    };
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener( 'DOMContentLoaded', Scene.start);

Scene.clearCanvas = function () {
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);

};

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();
	
	// Animate 5.5 frames per second 
	window.setTimeout(Scene.mainLoop, 180);
};

Scene.update = function () {
	// Set the canvas width to be that of the display Window. Which helps if you resize the window.
  	Scene.canvas.width = window.innerWidth;
	
	  Scene.manSprite.offset+=48;
    if(Scene.manSprite.offset>Scene.canvas.width)
        Scene.manSprite.offset=-Scene.manSprite.frames[Scene.manSprite.frame].frame.w;

     Scene.wolfSprite.offset+=48;
    if(Scene.wolfSprite.offset>Scene.canvas.width)
        Scene.wolfSprite.offset=-Scene.wolfSprite.frames[Scene.wolfSprite.frame].frame.w;
};

Scene.draw = function () {
    Scene.canvasContext.drawImage(Scene.manSprite.img,Scene.manSprite.frames[Scene.manSprite.frame].frame.x,Scene.manSprite.frames[Scene.manSprite.frame].frame.y,Scene.manSprite.frames[Scene.manSprite.frame].frame.w,Scene.manSprite.frames[Scene.manSprite.frame].frame.h,Scene.manSprite.offset,0,Scene.manSprite.frames[Scene.manSprite.frame].frame.w,Scene.manSprite.frames[Scene.manSprite.frame].frame.h);
	
	// Advance to the next frame.
    Scene.manSprite.frame++;

	// At the end of the sprite sheet, start at the first frame.
   if(Scene.manSprite.frame==Scene.manSprite.frames.length)
        Scene.manSprite.frame=0;

    Scene.canvasContext.drawImage(Scene.wolfSprite.img,Scene.wolfSprite.frames[Scene.wolfSprite.frame].frame.x,Scene.wolfSprite.frames[Scene.wolfSprite.frame].frame.y,Scene.wolfSprite.frames[Scene.wolfSprite.frame].frame.w,Scene.wolfSprite.frames[Scene.wolfSprite.frame].frame.h,Scene.wolfSprite.offset,0,Scene.wolfSprite.frames[Scene.wolfSprite.frame].frame.w,Scene.wolfSprite.frames[Scene.wolfSprite.frame].frame.h);
    Scene.wolfSprite.frame++;

   // At the end of the sprite sheet, start at the first frame.
   if(Scene.wolfSprite.frame==Scene.wolfSprite.frames.length)
        Scene.wolfSprite.frame=0;
};