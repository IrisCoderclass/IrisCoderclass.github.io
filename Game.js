var xCar; //Meest links boven
var yCar; //Meest links boven
var wheelSize;
var speed;
var lives;
var truen = true;
var sterren = [];
var points = 0;
var est1 = 0;
var sterspeed = 3;
var zer = 0;



function ster(x,y) {
  this.xPos = x; // random(0,1000);
  this.yPos = y;

  this.display = function() {
    noStroke();
    fill(255, 229, 0);
    rect(this.xPos,this.yPos,20,20)
    if (this.yPos > 1000) {
      this.xPos = random(1000);
      this.yPos = 0;
    }
    if (truen == true) {
      this.yPos += sterspeed;
    }
    if (this.yPos > 999) {
      points +=1
    }
  }

  this.isGebotst = function(x, y, h, w){
   if (this.xPos < x + w &&
   this.xPos + 20 > x &&
   this.yPos < y + h &&
   20 + this.yPos > y){
     lives = 0
   }
  }
  }



function setup() {
  //Canvas van 200 px bij 200 px
  createCanvas(1000, 650);
  xCar = 500;
  yCar = 500;
  wheelSize = 24;
  speed = 10;
  var ster1 = new ster(random(1000),-1001);
  sterren.push(ster1);
  var ster2 = new ster(random(1000),-1001);
  sterren.push(ster2);
  var ster3 = new ster(random(1000),-950);
  sterren.push(ster3);
  var ster4 = new ster(random(1000),-900);
  sterren.push(ster4);
  var ster5 = new ster(random(1000),-850);
  sterren.push(ster5);
  var ster6 = new ster(random(1000),-800);
  sterren.push(ster6);
  var ster7 = new ster(random(1000),-750);
  sterren.push(ster7);
  var ster8 = new ster(random(1000),-700);
  sterren.push(ster8);
  var ster9 = new ster(random(1000),-650);
  sterren.push(ster9);
  var ster10 = new ster(random(1000),-600);
  sterren.push(ster10);

  var ster11 = new ster(random(1000),-550);
  sterren.push(ster11);
  var ster12 = new ster(random(1000),-500);
  sterren.push(ster12);
  var ster13 = new ster(random(1000),-450);
  sterren.push(ster13);
  var ster14 = new ster(random(1000),-400);
  sterren.push(ster14);
  var ster15 = new ster(random(1000),-350);
  sterren.push(ster15);
  var ster16 = new ster(random(1000),-300);
  sterren.push(ster16);
  var ster17 = new ster(random(1000),-250);
  sterren.push(ster17);
  var ster18 = new ster(random(1000),-200);
  sterren.push(ster18);
  var ster19 = new ster(random(1000),-150);
  sterren.push(ster19);
  var ster20 = new ster(random(1000),-100);
  sterren.push(ster20);
  var ster21 = new ster(random(1000),-50);
  sterren.push(ster21);
  var ster22 = new ster(random(1000),0);
  sterren.push(ster22);
}

function draw() {

    //Één cijfer geeft grijswaarden
    if (keyIsDown(RIGHT_ARROW)) {
      speed = 10;
      xCar += speed;
    }
    else if (keyIsDown(LEFT_ARROW)) {
      speed = -10;
      xCar += speed;
    }
    else if (keyIsDown(UP_ARROW)){
      alert("Cars can't fly.")
      est1 = est1+1

    }
    else if (keyIsDown(DOWN_ARROW)){
      alert("Cars can't dig.")
    }
    else if (keyIsDown(77)){
      window.location = "sindex.html"
    }
    else if (est1 == 10){
      window.location = "est1.html"
    }
    if(keyIsDown(82)){
      if(keyIsDown(65)){
        var ra = prompt("What is the best song in this world?(only write in lowercase, if you don't, then face my wrath.)")
        if(ra == "never gonna give you up"){
          alert("Good job, you're awesome.")
        }
        else if(ra == "never gonna give you up by rick astley"){
          alert("Good job, you're awesome.")
        }
        else if(ra == "never gonna give you up - rick astley"){
          alert("Good job, you're awesome.")
        }
        else if(ra == "rick astley never gonna give you up"){
          alert("Good job, you're awesome.")
        }
        else if(ra == "rick astley - never gonna give you up"){
          alert("Good job, you're awesome.")
        }
        else if(ra == "rick astley's never gonna give you up"){
          alert("Good job, you're awesome.")
        }
        else{
          alert("WRONG ANSWER, NOW FACE MY WRATH.")
          window.location = "est2.html"
        }
      }
      }
      if(keyIsDown(80)){
        if(keyIsDown(49)){
          if(keyIsDown(48)){
            points = 999
          }
        }
      }
      background(35,6,64);

    for (var i=0; i<sterren.length; i++) {
      sterren[i].display();

      // per ster kijken of ik bots
      // if (sterren[i].isGebotst(xvandeauto, yvandeauto) == true) {
        // game over
      // }
    sterren[i].isGebotst(xCar, yCar, 40,70)
    sterren[i].isGebotst(xCar, yCar, 20,100)
    }


    drawCar(xCar, yCar, wheelSize);
    //width is de breedte van het canvas
    if (xCar > width || xCar < 0){
        speed = -speed;
    }
    if (lives == 0){
      alert("Game Over you have " + points + " points.");
      window.location = "nm.html"
    };
    if (xCar > 900){
      lives = 0;
    };
    if (xCar < 0){
      lives = 0;
    };
    if (points > 50){
      sterspeed = 4
    }
    if (points > 100){
      sterspeed = 5
    }
    if (points > 200){
      sterspeed = 6
    }
    if (points > 400){
      sterspeed = 7
    }
    if (points > 800){
      sterspeed = 8
    }
    if (points == 1000){
      alert("Congratulations!, you have reached the maximum score, 1000")
      window.location = "ind.html"
    }
  };

function drawCar(xCar, yCar, wheelSize){
    //Geen randen om de auto
    noStroke();
    //Kies de opvulkleur (rgb)
    fill(115, 247, 255);
    //Parameters: x, y, breedte, hoogte
    rect(xCar, yCar, 110, 20);
    rect(xCar + 10, yCar-22, 70, 40);
    // Wielen
    stroke(255); //Witte randen voor de wielen
    strokeWeight(2); //Iets dikkere randen
    fill(125, 166, 166);
    ellipse(xCar + 25, yCar + 21, wheelSize, wheelSize); //Parameters: x, y, breedte, hoogte
    ellipse(xCar + 80, yCar + 21, wheelSize, wheelSize);
    stroke(9); //Zwarte weg
    line(0, yCar + 21 + wheelSize/2, width, yCar + 21 + wheelSize/2); //Parameters: x1,y1,x2,y2
    //'width' is de breedte van je canvas
}
