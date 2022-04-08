

class Branch{

constructor(begin, end){
    this.begin = begin;
    this.end = end;
    this.finished = false;
}

show(){

     const {begin, end} = this;
     line(begin.x, begin.y, end.x, end.y);
}

branchA(){
       const{begin, end} = this;
       const dirVec = p5.Vector.sub(end, begin);
       dirVec.rotate(PI/4);
       dirVec.mult(0.6);
       const newEnd = p5.Vector.add(end, dirVec);
       const b = new Branch(end, newEnd);
       return b;
       }

branchB(){
       const{begin, end} = this;
       const dirVec = p5.Vector.sub(end, begin);
       dirVec.rotate(-PI/4);
       dirVec.mult(0.6);
       const newEnd = p5.Vector.add(end, dirVec);
       const b = new Branch(end, newEnd);
       return b;
}

}



class Eye
{
       constructor(x,y)
       {
              this.x =x;
              this.y =y; 
              this.angle = 0;
       }

       showPoint()
       {
              stroke(255);
              strokeWeight(10);
              point(this.x, this.y);
       }

       createShape()
              {
             
               for(let i=0; i<30; i++)
               {
               const x = cos(10*i)*(fxrand()*3);
               const y = sin(10*i)*(fxrand()*5);
               const px = (fxrand()*10)+x;
               const py = 23+y;
               const width = fxrand()*20
               rect(px, py, width , 10)
               }

              }

       createInner()
            { 

              beginShape();
              vertex(5, 19)
              for(let i=0; i<30; i++)
               {
               const x = cos(10*i)*random(5);
               const y = sin(10*i)*random(5);
               vertex(random(2)+x, 3+y);
               quadraticVertex(random(10)+x, random(10)+y, 5, 13);
               }
               endShape();
             }              
            
}
              



