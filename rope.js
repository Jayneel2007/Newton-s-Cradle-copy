class Rope{

    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options={

        bodyA:body1,
        bodyB:body2,
        stiffness:0.1,
        length:10
        }

        this.rope = Constraint.create(options)
        World.add(world,this.rope)

    

    }

    display(){

        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
        //rope1 = new Rope(bobObject1,roof.body,-bobDiameter*2,0)
    }

}