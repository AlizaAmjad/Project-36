var dog,sadDog,happyDog;
var n = 0
var database

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database=firebase.database()
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  database.ref("Food").on("value",function(data){
    n=data.val()
  })
  food=new Food(n)
}

function draw() {
  background(46,139,87);
  food.display()
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
