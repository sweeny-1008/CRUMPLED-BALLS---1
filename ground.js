class Ground
{

    constructor(x,y,width,height)
    {
        var options={
            isStactic: true
        }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    World.add(world,options)
    }

    display()
    {
  var pos =this.body.postion;
  rectMode(CENTER)
  Fill("brown")
 rect(pos.x,pos.y,this.width,this.height);


    }




}


