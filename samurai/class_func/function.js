
function makeArmour(){
    strokeWeight(5); //left armour 
    fill(randColor());
    beginShape()
    vertex(159.40, 228); //159 228
    vertex(159.40, height -150); //
    push()
    translate(159, height-150)
    vertex(220, 540); //
    pop();
    endShape(CLOSE); //440 228
    
    strokeWeight(5);  //right armour
    fill(randColor());
    beginShape()
    vertex(440.5, 228); //159 228
    vertex(440.5, height-150); //
    push()
    translate(440.5, height-150)
    vertex(380, 540); //
    pop();
    endShape(CLOSE); //440 228
    
    
    strokeWeight(3)
    noFill();
    beginShape()
    vertex(205,450);
    vertex(250,500);
    vertex(360,500);
    vertex(397,445);
    endShape();
    }




    function makeTree()
    {
       for(let j=0; j<5; j++)
        {
           
          for(let i = tree.length-1; i >= 0; i--) 
            {
    
                    if (!tree[i].finished) 
                    {
                    tree.push(tree[i].branchA());
                    tree.push(tree[i].branchB());
                    }
                    tree[i].finished = true;
            }
    
            count++;
          if (count===4) //figure this out
           {
            for(let i = tree.length-1; i >= 0; i--) 
                {
    
                        if (!tree[i].finished) 
                        {
                          let leaf = tree[i].end.copy();
                          leaves.push(leaf);
                        }
                        tree[i].finished = true;
                }
           }
        }
    
    }
    
    function showTree(){
    
      for(let i=0; i < tree.length; i++)
      {
        stroke(255);
        if(i===0){
        strokeWeight(10);
        } else if(i===20){
          strokeWeight(4.5);
        }
        else if(i===25){
          strokeWeight(4.5)
        }
        else {
          strokeWeight(4); 
        }
        tree[i].show();
      }
    }
    
    function showLeaf(){

      strokeWeight(0.5);
      for(let i=0; i < leaves.length; i++){
        if(i==5 || i==10){
          continue;
        }else{
        fill(randColor());
        ellipse(leaves[i].x, leaves[i].y, 15, 15 );
        }
      }
    }

    let randRo = Math.floor((fxrand()*35))+16;
    let randRo2 = Math.floor((fxrand()*59))+11;
    
    function makeEye(){
      for(let i=0; i<30; i++)
      {
      stroke(0);
      strokeWeight(0.8);
      push()
      translate(225, 280);
      rotate(radians(i*randRo));
      leftRPoint.createShape();
      pop();
      push()
      translate(600-225, 280);
      rotate(radians(i*randRo));
      leftLPoint.createShape();
      pop()
      }
    }
    
    function makeInnerEye()
    {    for(let i=0; i<50; i++)
       {  
          stroke(255);
          strokeWeight(0.1);
        fill(randStuff());
        push()
            translate(225, 280);
            rotate(radians(i*randRo2));
            leftLPoint.createInner();
         pop();
    
         push();
         translate(600-225, 280);
         rotate(radians(i*randRo2));
         leftRPoint.createInner();
      pop();
       }
    }

//fragments - face
    function makeFragment(){
      strokeWeight(3);
      stroke(255);
      beginShape();
      vertex(200, 348);
      vertex(230, 436);
      endShape();
      beginShape()
      vertex(250, 334);
      vertex(280, 413);
      endShape()
      beginShape()
      vertex(205, 448);
      vertex(295, 322);
      endShape()
    
      //Second 
      beginShape();
      vertex(600-200, 348);
      vertex(600-230, 436);
      endShape();
      beginShape()
      vertex(600-250, 334);
      vertex(600-280, 413);
      endShape()
    }
    