class Chain {
    constructer(bodyA,bodyB){
        var options ={
            bodyA:bird.body, 
            bodyB:log6.body,
            stiffness:0.04 ,
            length:10 
        }
    }
    display(){
         var pointA=this.chain.bodyA.position
         var pointB =this.chain.bodyB.position
         strokeWeight(4)
         line(pointA.y,pointA.y,pointB.x,pointB.y)
    }
}