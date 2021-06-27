class Rope{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:1,
            length:250
        }

      this.pointB = pointB;
      this.rope= Constraint.create(options);
      World.add(world,this.rope)
    }

    display(){
        if(this.rope.bodyA){
            var pA = this.rope.bodyA.position;
            var pB = this.pointB;
            push ();
            strokeWeight(4);
            line(pB.x,pB.y,pA.x,pA.y);
            pop ();
        }
    }
    attach(body){
       this.rope.bodyA=body; 
    }
    
    fly(){
        this.rope.bodyA=null;   
    }
}