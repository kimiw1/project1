var pg;

function setup() {
  createCanvas(720, 400)
  noStroke();
  ellipseMode(CENTER);
  pg = createGraphics(10, 10);
}

function draw() {
  background(220);
  fill(44, 103, 3);
  ellipse(mouseX, height/2, mouseY/2+10, mouseY/2+10);
  fill(222, 182, 22);
  var inverseX = width - mouseX;
  var inverseY = height - mouseY;
  ellipse(inverseX, height/2, (inverseY/2)+10, (inverseY/2)+10);
  fill(222, 81, 118);
  ellipse(mouseX, mouseY, 60, 60);
  
  pg. background(220);
  pg. noFill();
  pg. stroke(255);
  pg. ellipse(mouseX, mouseY, 60, 60);
    
function mousePressed() {
  ellipse(mouseX, mouseY, 80, 80);
  //prevent default
  return false;
}

}
