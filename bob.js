class Bob{
    constructor(x,y,radius){

        var options ={
            isStatic:true,

            'restitution':0.3,
            'friction':0.5,
            'density':0.5
           

        }
        
       
        
        this.body = Bodies.circle(x,y,radius/4,options);
       this.radius = radius
        World.add(world,this.body)

    }


    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

}