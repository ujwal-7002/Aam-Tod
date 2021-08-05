class Tree {
    constructor(x,y){
            var options={
                isStatic : true,
                restitution: 0
            }
            
            this.treewidth=450;
            this.treeheight=600;
            this.body= Bodies.rectangle(this.x,this.y,this.treewidth,this.treeheight,options);
        
        this.image=loadImage("sprites/tree.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        //imageMode(CENTER);
        image(this.image,800,10,this.treewidth,this.treeheight);
        pop();
    }
}