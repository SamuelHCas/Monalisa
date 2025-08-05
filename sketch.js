function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('rgb(46,168,117)');
  strokeWeight(1);
  fill('rgb(61,16,16)')
  rect(150,300,100,200)
  fill('rgb(85,50,40)')
  circle(50,200,75);
  circle(350,200,75);
  circle(200,200,300);
  fill('rgb(61,16,16)')
  triangle(180,220,220,220,200,160);
  fill('rgb(255,255,255)')
  circle(150,150,60);
  circle(250,150,60);
  fill('rgb(90,170,228)')
  rect(50,375,300,150)
  line(150,270,250,270);
  line(200,25,200,75);
  strokeWeight(5);
  line(120,100,180,90);
  line(220,90,280,100);

  olhoX = map(mouseX, 45, 450, 130, 170);
  olhoY = map(mouseY, 45, 450, 130, 170);

  strokeWeight(1);
  circle(olhoX,olhoY,25);
  circle(olhoX+100,olhoY,25);
  
  if(mouseIsPressed){
    console.log(mouseX,mouseY)
  }
}