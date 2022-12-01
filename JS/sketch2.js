// variables for text

let txtWelcome , txtInst, txtResult  

// button for games and RPS
let btn1game, btn3Game, btn5Game , btnR, BtnP, BtnS

// button end the game and replay

let btnReplay , btnEndGame

// variable for computerChoice

let compOpt;


function setup() {
 
  createCanvas(400, 400);
  txtWelcome = " welcome to the game "
 
  txtInst = "     please choose the game format"
  txtResult = ""
 
  // buttons for 1 3 5 games
 
  btn1Game = createButton('Single Game')
  btn1Game.position(580, 380)
  btn1Game.style('width', '100px')
  btn1Game.mousePressed( NewGame )
 
  btn3Game = createButton('Best of Three')
  btn3Game.position(680, 380)
  btn3Game.style('width', '100px')
 
  btn5Game = createButton('Best of Five')
  btn5Game.position(780, 380)
  btn5Game.style('width', '100px')
 
  // button for R P S
 
  btnR = createButton('Rock')
  btnR.position(580, 380)
  btnR.style('width', '100px')
  btnR.hide()
  btnR.mousePressed( CompareRock )
 
  btnP = createButton('Paper')
  btnP.position(680, 380)
  btnP.style('width', '100px')
  btnP.hide()
  btnP.mousePressed( ComparePaper )
 
  btnS = createButton('Scissors')
  btnS.position(780, 380)
  btnS.style('width', '100px')
  btnS.hide()
  btnS.mousePressed( CompareScissors )
 
  // button for replay or end game
 
 
 
  //reset random number compOpt
 
 
}

function draw() {
  background(220);
 
  text( txtWelcome, 140, 60)
  text( txtInst, 100, 90)
  text( txtResult , 120, 300)
 
}

function showRPS()
{
 
  txtInst = " choose between rock,  paper, scissors"
  txtResult = ""
 
  //hide game options
  btn1Game.hide()
  btn3Game.hide()
  btn5Game.hide()
 
  //show Rock paper scissors buttons
 
  btnR.show()
  btnP.show()
  btnS.show()
 
}

function CompareRock()
  {  
    if(compOpt == 1)
      {
       txtResult = "It's a Draw"  
      }
    else if(compOpt == 2)
      {
       txtResult = "Computer Won ! "  
      }
    else
      {
        txtResult = "You Won !"
      }  

  }

function ComparePaper()
{if(compOpt == 1)
      {
       txtResult = "you Won !"  
      }
    else if(compOpt == 2)
      {
       txtResult = "It's a Draw ! "  
      }
    else
      {
        txtResult = " Computer Won !"
      }  
}

function CompareScissors()
{if(compOpt == 1)
      {
       txtResult = "It's a Draw"  
      }
    else if(compOpt == 2)
      {
       txtResult = "Computer Won ! "  
      }
    else
      {
        txtResult = "You Won !"
      }  
}

function NewGame()
{
 
  compOpt = round(random (0.5, 3.5) )
  showRPS();
 
}