let angleWag = 10;
let valueFc = 'rgb(61, 93, 38)';
let valueFc2 = 'rgb(140, 185, 107)';
let valueFc3 = 250;
let valueEb = 'rgb(61, 93, 38)';
let valueSk = 'rgb(11, 78, 31)';
let valueBg = 'rgb(185, 223, 120)';
//let valueEys =(61, 230, 38);

let a = 4;
let direction = 1;

let leaf1;
let leaf2;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  mic = new p5.AudioIn();
  mic.start();

  leaf1 = new Leaf(width * .1, height * .12, 47, .7);
  leaf2 = new Leaf(width * .3, height * .47, 39, .6);

  leaf3 = new Leaf(width * .4, height * .4, 50, .6);
  leaf4 = new Leaf(width * .79, height * .92, 30, .5);

  leaf5 = new Leaf(width * .9, height * .5, 10, .6);
  leaf6 = new Leaf(width * .89, height * .72, 2, .8);

  leaf7 = new Leaf(width * .2, height * .6, 33, .5);
  leaf8 = new Leaf(width * .61, height * .32, 10, .9);

  leaf9 = new Leaf(width * .5, height * .2, 10, .6);
  leaf10 = new Leaf(width * .99, height * .32, 40, .4);
  // console.log(leaf1);
  // console.log(leaf2);

}


function draw() {

  //console.log("mouse x is:", mouseX);
  //console.log("mouse y is:" , mouseY);  
  //console.log("mic level" + mic.getLevel());

  background(valueBg);

  leaf1.display();
  leaf2.display();
  leaf3.display();
  leaf4.display();
  leaf5.display();
  leaf6.display();
  leaf7.display();
  leaf8.display();
  leaf9.display();
  leaf10.display();

  angleWag = mouseX;

  owlFace();

  owlChin();

  owlEyes();



  owlPupils();

  owlEyelids(a);
  varChng();

  //close eyes
  // if (mouseX < 26 || mouseX > 374) {
  //   //console.log("mouse x is:", mouseX);
  //   fill(0);
  //   ellipse(width * .34, height * .3, 100, 100);
  //   ellipse(width * .66, height * .3, 100, 100);
  // }

  owlEBrows();

  treeStick();

  //leaf(width * .06, height * .82, 10);

  //leaf(width * .1, height * .77, 60);

  //rect(25, 25, 50, 50);
  leaf1.move();
  leaf2.move();
  leaf3.move();
  leaf4.move();
  leaf5.move();
  leaf6.move();
  leaf7.move();
  leaf8.move();
  leaf9.move();
  leaf10.move();

}

function varChng() {

  // just flip if a is increasing or decreasing by adding 1 * either negative or positive 1

  a = a + (1 * direction);

  if (a > width || a < 0) {
    direction = -direction; // flip from positive to negative
  }




  // yr original code 
  //    a++;
  //   if (a > width) {
  //     a = 0;
  //     !direction;
  //   }

  //   if (direction === true) {
  //     stroke(a);
  //   } else {
  //     stroke(width - a);
  //   }
}




function mousePressed() {



  if (mouseIsPressed == true) {
    valueFc = 0;
  } else if (mouseIsPressed == false) {
    valueFc = 'rgb(61, 93, 38)';
  }

  if (valueFc2 === 0) {
    valueFc2;
  } else {
    valueFc2 = 0;
  }

  if (valueFc3 === 0) {
    valueFc3 = 250;
  } else {
    valueFc3 = 0;
  }
  if (valueEb === 0) {
    valueEb = (61, 93, 38);
  } else {
    valueEb = 0;
  }
  if (valueSk === 0) {
    valueSk = (11, 78, 31);
  } else {
    valueSk = 0;
  }
  if (valueBg === 0) {
    valueBg = (185, 223, 120);
  } else {
    valueBg = 0;
  }


}



function owlFace() {
  //face
  fill(valueFc);
  strokeWeight(4);
  ellipse(width * .5, height * .5, 350, 400)

  noStroke();
  fill(valueFc2);
  ellipse(width * .5, height * .69, 200, 250);
  fill(valueFc3);
  ellipse(width * .33, height * .24, 140, 125);
  ellipse(width * .67, height * .24, 140, 125);
  ellipse(width * .5, height * .5, 350, 200);

}

function owlPupils() {
  //eyes
  //left
  strokeWeight(4);
  fill(0);
  let x1 = map(mouseX, 0, width, 115, 155, true);
  let x2 = map(mouseX, 0, width, 243, 280, true);
  let y1 = map(mouseY, 0, height, 100, 143, true);

  fill(75, x1, y1); //color change as mouseX changing

  let c = map(mic.getLevel(), 0, .3, 35, 60);
  ellipse(x1, y1, c, c); //width * .34
  //right
  ellipse(x2, y1, c, c);

}


function owlEyes() {

  fill(61, 230, 38);
  ellipse(width * .34, height * .3, 100, 100);
  ellipse(width * .66, height * .3, 100, 100);


}

function owlEyelids(fade) {


  // fourth parameter is the alpha channel. This draws duplicate fading black eye over the other eyes
  // when calling function, pass variable 'a' into it as the fade value
  fill(0, 0, 0, fade);
  ellipse(width * .34, height * .3, 100, 100);
  ellipse(width * .66, height * .3, 100, 100);

}


function owlChin() {
  //chin
  beginShape();
  fill(49, 81, 6);
  vertex(width * .5, height * .44);
  vertex(width * .47, height * .5);
  vertex(width * .5, height * .65);
  vertex(width * .53, height * .5);
  endShape(CLOSE);

}

function owlEBrows() {
  //eyebrows
  //push();
  //translate(xPos, yPos);
  //rotate(rotation);
  //rectMode(CENTER);
  fill(valueEb);
  beginShape();
  noStroke();
  curveVertex(width * .05, height * .18);
  curveVertex(width * .3, height * .1);
  curveVertex(width * .49, height * .2);
  curveVertex(width * .48, height * .33);
  endShape(CLOSE);
  beginShape();
  curveVertex(width * .95, height * .18);
  curveVertex(width * .7, height * .1);
  curveVertex(width * .51, height * .2);
  curveVertex(width * .52, height * .33);
  endShape(CLOSE);
  //pop();

}

function treeStick() {
  //tree stick
  fill(valueSk);
  beginShape();
  strokeWeight(4);
  vertex(width * .1, height * .9);
  vertex(width * .12, height * .99);
  vertex(width * .9, height * .85);
  vertex(width * .9, height * .8);
  endShape(CLOSE);
}

// function leaf(xPos, yPos, rotation) {
//   push();
//   translate(xPos, yPos);
//   rotate(rotation);
//   ellipse(0, 0, 70, 30);
//   //strokeWeight(5);
//   pop();

//   beginShape();
//   fill(valueSk);
//   strokeWeight(2);
//   curveVertex(width * .12, height * .83);
//   curveVertex(width * .2, height * .93);
//   curveVertex(width * .2, height * .91);
//   endShape(CLOSE);

// }