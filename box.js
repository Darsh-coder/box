class Box {
  constructor(x1, y1, width1, height1) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x1, y1, width1, height1, options);
    this.width = width1;
    this.height = height1;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER)
    push()
    translate(pos.x,pos.y)
    rotate(this.body.angle) ;
    fill("red");
    rect(0, 0, this.width, this.height);
   pop();
  }
};
