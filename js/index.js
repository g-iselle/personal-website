function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function draw() { 

  
}

function drawTarget(x,y,size,colour) {
  
noFill();
  stroke(130, random(255), random(255),10);
  ellipse(width/2,height/2,size,size);
  
  stroke(random(255), 29, random(255),20);
  ellipse(x,y,size*.66,size*.66);
  
  stroke(random(255), random(255),10,20);
  ellipse(width,height,size*.33,size*.33);
  
  stroke(random(255),10, random(255),10);
  ellipse(x,y,size*.22,size*.22);
  

  
}

function mouseMoved() {
 drawTarget(mouseX,mouseY,mouseX*2,random(255)); 
}
function mousePressed(){
 background(255); 
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}