class Ground{
    constructor(thickness){
        var property={
            isStatic:true
        }
        this.body = Bodies.rectangle(400, 700 - thickness/2, 800, thickness, property);
        this.width = 800;
        this.height = thickness;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(165, 42, 42);
        rect(pos.x, pos.y, this.width, this.height);
    }
}