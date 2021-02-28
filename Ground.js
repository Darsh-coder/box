class Ground {

constructor(x1,y1,width1,height1){

var option= {
isStatic:true


}
this.Groundbody=Bodies.rectangle(x1,y1,width1,height1,option)
this.width=width1;
this.height=height1

World.add(world,this.Groundbody)



}

display(){
var pos=this.Groundbody.position
rectMode(CENTER)
fill("green")
rect(pos.x,pos.y,this.width,this.height)

}









}