class DustBin
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
}