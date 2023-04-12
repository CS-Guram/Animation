// we want to grap html element tag canvas.
var canvas1 = document.querySelector('canvas');
// fillRect() is a method of the 2D canvas context that is used to draw a filled rectangle on the canvas.
// The method takes four arguments:
// x - the x-coordinate of the upper-left corner of the rectangle
// y - the y-coordinate of the upper-left corner of the rectangle
// width - the width of the rectangle
// height - the height of the rectangle)
var c = canvas1.getContext('2d');


      function drawGrass() {

//////////////////////////////////////////  CLOUD with SUN //////////////////////////////////////////////
// Define the cloud properties
var cloudColor = "#FFF";
var cloudRadius = 45;
var cloudX = 120;
var cloudY = 180;

// Draw the cloud
c.fillStyle = cloudColor;
c.beginPath();
c.arc(cloudX, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius, cloudY - cloudRadius, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 2, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 3, cloudY, cloudRadius, 0, Math.PI * 3.0);
c.arc(cloudX + cloudRadius * 1, cloudY, cloudRadius, 1, Math.PI * 3.0);
c.closePath();
c.fill();

 //  the moon
        c.fillStyle = "#d2c4ad";
        c.beginPath();
        c.arc(100, 100, 50, 0, Math.PI * 0.5, true);
        c.fill();

// Define the cloud properties
var cloudColor = "#FFF";
var cloudRadius = 35;
var cloudX = 650;
var cloudY = 150;

// Draw the cloud
c.fillStyle = cloudColor;
c.beginPath();
c.arc(cloudX, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius, cloudY - cloudRadius, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 2, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 3, cloudY, cloudRadius, 0, Math.PI * 3.0);
c.arc(cloudX + cloudRadius * 1, cloudY, cloudRadius, 1, Math.PI * 3.0);
c.closePath();
c.fill();

         ///////////////////////  Sun   /////////
        // Arc / Circle 
        c.beginPath();
        c.lineWidth = "5";
        c.arc(980, 120, 70, 0, Math.PI * 2, false);
        c.strokeStyle = '#FFE88C';
        c.fillStyle = "yellow";
        c.fill();
        c.stroke();

// Define the cloud properties
var cloudColor = "#FFF";
var cloudRadius = 30;
var cloudX = 1000;
var cloudY = 180;

// Draw the cloud
c.fillStyle = cloudColor;
c.beginPath();
c.arc(cloudX, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius, cloudY - cloudRadius, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 2, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 3, cloudY, cloudRadius, 0, Math.PI * 3.0);
c.arc(cloudX + cloudRadius * 1, cloudY, cloudRadius, 1, Math.PI * 3.0);
c.closePath();
c.fill();

// Define the cloud properties
var cloudColor = "#FFF";
var cloudRadius = 30;
var cloudX = 400;
var cloudY = 280;

// Draw the cloud
c.fillStyle = cloudColor;
c.beginPath();
c.arc(cloudX, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius, cloudY - cloudRadius, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 2, cloudY, cloudRadius, 0, Math.PI * 2);
c.arc(cloudX + cloudRadius * 3, cloudY, cloudRadius, 0, Math.PI * 3.0);
c.arc(cloudX + cloudRadius * 1, cloudY, cloudRadius, 1, Math.PI * 3.0);
c.closePath();
c.fill();
//////////////////////////////////////////  CLOUD with SUN END //////////////////////////////////////////////

  // Set the line properties
  c.strokeStyle = "green";
  c.lineWidth = 30;
  
  // Draw the line
  c.beginPath();
  c.moveTo(0, canvas1.height - 5);
  c.lineTo(canvas1.width, canvas1.height - 10);
  c.stroke();
   
/////////////////////////////////////////  The Tree  //////////////////////////////////////////////////////////

// Tree 1  //////////////////////////
var treeX = 600;
var treeY = 580;
var trunkColor = "#663300";
var leavesColor = "#339933";
var trunkWidth = 30;
var trunkHeight = 100;
var leavesRadius = 45;  

// Draw the trunk
c.fillStyle = trunkColor;
c.fillRect(treeX - trunkWidth / 2, treeY - trunkHeight, trunkWidth, trunkHeight);

// Draw the leaves
c.fillStyle = leavesColor;
c.beginPath();
c.arc(treeX, treeY  - trunkHeight - leavesRadius, leavesRadius, 0, Math.PI * 2);
c.arc(treeX - leavesRadius, treeY - trunkHeight - leavesRadius * 0.7, leavesRadius, 0, Math.PI * 2);
c.arc(treeX - leavesRadius, treeY - trunkHeight - leavesRadius * 1.8, leavesRadius, 0, Math.PI * 2);
c.arc(treeX + leavesRadius, treeY - trunkHeight - leavesRadius * 1.8, leavesRadius, 0, Math.PI * 2);
c.arc(treeX, treeY - trunkHeight - leavesRadius * 0.8, leavesRadius, 0, Math.PI * 2);
c.arc(treeX, treeY - trunkHeight - leavesRadius - 2 * leavesRadius  * 0.8, leavesRadius, 0, Math.PI * 2);

c.closePath();
c.fill();

// Tree 2 /////////////////////////
var treeX = 350;
var treeY = 580;
var trunkColor = "#663300";
var leavesColor = "#339933";
var trunkWidth = 30;
var trunkHeight = 130;
var leavesRadius = 45;  

// Draw the trunk
c.fillStyle = trunkColor;
c.fillRect(treeX - trunkWidth / 2, treeY - trunkHeight, trunkWidth, trunkHeight);


// Draw the leaves
c.fillStyle = leavesColor;
c.beginPath();
c.arc(treeX, treeY  - trunkHeight - leavesRadius, leavesRadius, 0, Math.PI * 2);
c.arc(treeX - 2 + leavesRadius, treeY - trunkHeight - leavesRadius * 0.5, leavesRadius, 0, Math.PI * 2);
c.arc(treeX + 2 - leavesRadius, treeY - trunkHeight - leavesRadius * 0.6, leavesRadius, 0, Math.PI * 2);
c.arc(treeX - 2 + leavesRadius, treeY - trunkHeight - leavesRadius * 2.0, leavesRadius, 0, Math.PI * 2);
c.arc(treeX + 2 - leavesRadius, treeY - trunkHeight - leavesRadius * 1.4, leavesRadius, 0, Math.PI * 2);
c.arc(treeX - 2 + leavesRadius, treeY - trunkHeight - leavesRadius * 2.0, leavesRadius, 0, Math.PI * 2);

c.closePath();
c.fill();

                                    //////  The Tree end  /////////

  requestAnimationFrame(drawGrass);
 }
         // Call the drawGrass function every 20 milliseconds
  drawGrass();