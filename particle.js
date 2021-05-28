class Particle {
    constructor(x,y,r){
        var options = {
            restitution: 1,
            friction: 0,
            isStatic: false
        } 

        this.r = r;

        this.body = Bodies.circle(x, y, this.r, options);
        this.colour = fill(random(0,255),random(0,255),random(0,255));
        
        World.add(world, this.body);
    }

    display(){
       // var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

    }
}