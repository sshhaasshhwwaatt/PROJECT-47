class Load {
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.animation1=loadAnimation("sprites/lo1.png","sprites/lo2.png","sprites/lo3.png","sprites/lo4.png","sprites/lo5.png","sprites/lo6.png","sprites/lo7.png","sprites/lo8.png","sprites/lo9.png","sprites/lo10.png","sprites/lo11.png","sprites/lo12.png","sprites/lo13.png","sprites/lo14.png","sprites/lo15.png")
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        animation(this.animation1, 0, 0, this.width, this.height);
        pop();
      }
}
   

  

