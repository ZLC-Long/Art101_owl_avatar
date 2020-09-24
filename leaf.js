class Leaf {

  constructor(_xPos, _yPos, _rotation, _size) {

    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
  this.size = _size;

  }

  display() {
    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    scale(this.size);
    ellipse(0, 0, 70, 30);
    //strokeWeight(5);
    pop();

    beginShape();
    fill(valueSk);
    strokeWeight(2);
    curveVertex(width * .12, height * .83);
    // curveVertex(width * .2, height * .93);
    curveVertex(width * .2, height * .91);
    endShape(CLOSE);
 
  }
  
  move(){
    //this.angle ++ is shorthand for this. rotate= this. roatation + 1:
    
    this.rotation ++;
    
    if(this.yPos <= height * 1.3){
    // this.yPos = this.yPos + 2;
    // 
    this.yPos += 2;
    }else {
      this.yPos = -height * .3;
    }
  }

}
//function leaf(xPos, yPos, rotation) {
//  push();
//  translate(xPos, yPos);
//  rotate(rotation);
//  ellipse(0, 0, 70, 30);
// //strokeWeight(5);
//  pop();

//  beginShape();
//  fill(valueSk);
//  strokeWeight(2);
//  curveVertex(width * .12, height * .83);
//  curveVertex(width * .2, height * .93);
//  curveVertex(width * .2, height * .91);
//  endShape(CLOSE);

//line(width * .14, height * .83, -width * .22, -height * .93);
//}//