var Score = 0
var GameState = "PLAY"
function preload(){
gunIMG = loadImage("gun.png")
bulletIMG = loadImage("bullet-png-1024.png")
enemyIMG = loadImage("R.png")
backgroundIMG = loadImage("background.jpg")
sound = loadSound("sound.mp3")
//enemyGIF = createImg("R.gif")
}
function setup(){
createCanvas(displayWidth,displayHeight)
gun = createSprite(displayWidth/2,displayHeight/2)
gun.addImage(gunIMG)
gun.scale = 0.09
enemyGroup = new Group()
bulletGroup = new Group()


}
function draw(){
background(backgroundIMG)

//image(enemyIMG,200,200 )
//enemyGIF.position(200,200)
if(Score === 0){
    GameState = "PLAY" 
}
if (GameState === "PLAY"){

gun.x = mouseX 
gun.y = mouseY
gun.visible = true
//bullet.visible = true
spaceShip()
if(keyDown("space")){
bulletG()
}
if (bulletGroup.isTouching(enemyGroup)){
    for(var i = 0;i < enemyGroup.length;i++ ){
   if(enemyGroup[i] && enemyGroup[i].isTouching(bullet)){
       enemyGroup[i].destroy()
       bullet.destroy()
       sound.play()
     Score = Score + 2 
     
    
    if (Score >=  6){
        GameState = "END"
      
    }
}
    }
}
}
if (GameState === "END"){
    textSize(100)
    fill("Black")
    text("GAME ENDED!  PRESS R TO RESTART",displayWidth/2 - 200,displayHeight/2) 
   // enemyGroup.setVelocityEach(0,0)
   // bulletGroup.setVelocityEach(0,0)
  
   enemy.visible = false
   bullet.visible = false
    gun.visible = false
 
 if (keyDown("r")){
     Score = 0
 }
}
    //console.log("DESTROYED!")



//spaceShip()


drawSprites()
textSize(20)
fill("Blue")
text("SCORE = "+Score,400,100)
}
function spaceShip(){
   if (frameCount % 120 === 0) {
    enemy = createSprite(displayWidth,random(0,displayHeight))
    enemy.addImage(enemyIMG)
    enemy.scale=0.03
    enemy.velocityX = -4
    enemyGroup.add(enemy)
    enemyGroup.setLifetimeEach(150)
   }
}
function bulletG(){
    bullet = createSprite(gun.x,gun.y)
    bullet.addImage(bulletIMG)
    bullet.scale = 0.02
    bullet.velocityX = 5
    bulletGroup.add(bullet)
    bulletGroup.setLifetimeEach(150)

}