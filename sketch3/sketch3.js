function setup() {
  createCanvas(500, 500);
  noStroke();
  background(206, 220, 227);

  var inside = color(41, 129, 175);
  var middle = color(224, 165, 54);
  var outside = color(46, 116, 66);

  //color inside = #2981AF;
  //color middle = #E0A536;
  //color outside = #2E7442;

  push();
  translate(80, 80);
  fill(outside);
  ellipse(200, 200, 200, 200);
  fill(middle);
  ellipse(60, 60, 120, 120);
  fill(inside);
  ellipse(150, 90, 80, 80);
  pop();

}

function mouseClicked() {
  var c;
  noStroke();
  c = color(255,204, 0);
  fill(c);
  for (var i = 0; i < 50; i++) {
  var r = random(50);
  fill(r * 5);
  color(50, i, 50 + r, i);
}
  ellipse(mouseX, mouseY, r, r);
  for (var i = 0; i < 100; i++) {
  var r = random(50);
  fill(r * 5);
  scale(50, i, 50 + r, i);
}
  // prevent default
  return false;
}
