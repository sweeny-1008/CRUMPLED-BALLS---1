class Paper {
 
   constructor(x,y,r)
{
    var options={

     isStactic:false,
     restitution:0.3,
     friction:0.5,
     density:1.2

   }
    
   this.x=x;
   this.y=y;
   this.r=r;
   this.Body=Bodies.circle(this.x,this.y,this.r/2,options)
   world.add(World,this.Body)
}

  display()
   {
  var Paperpos=this.Body.postion;

  Push()
  translate(Paperpos.x,Paperpos.y);
  rectMode(center)
  strokeWeight(3);
  Fill(255,0,255)
  ellipse(0,0,this.r,this.r)
  Pop()



  }


}