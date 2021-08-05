class mango{
	constructor(x,y){
		var options={
			isStatic: true,
			restitution:0,
			friction:1,
		}
	this.body=Bodies.circle(x,y,50,options);
	this.width=50;
	this.height=50;
	this.image= loadImage("sprites/mango.png");
	World.add(world,this.body);
	};
display(){
	var pos= this.body.postion;
	var angle = this.body.angle;
	push();
	rotate(angle);
	imageMode(CENTER)
	image(this.image, this.x, this.y, this.width, this.height);
	pop();
}
}