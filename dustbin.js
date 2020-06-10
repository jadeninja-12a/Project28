class Dustbin {
    constructor(x, y, width, height,thickness ){
        var options = {
            isStatic:true
        }
        this.right = Bodies.rectangle(x + width/2 - thickness/2, y, thickness, height, options);
        this.left = Bodies.rectangle(x - width/2 + thickness/2, y, thickness, height, options);
        this.down = Bodies.rectangle(x, y + height/2 - thickness/2, width, thickness, options);
        this.width = width;
        this.thickness = thickness;
        this.height = height;
        World.add(world, this.right);
        World.add(world, this.down);
        World.add(world, this.left);
    }
    display(){
        rectMode(CENTER);
        fill("grey");
        rect(this.right.position.x, this.right.position.y, this.thickness, this.height);
        rect(this.left.position.x, this.left.position.y, this.thickness, this.height);
        rect(this.down.position.x, this.down.position.y, this.width, this.thickness);
    }
}