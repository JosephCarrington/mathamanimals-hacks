#pragma strict

var candleHandlerScript : candleHandler;
var myColorScript : colorScript2;


function Update () {

	SetColors();

}

function SetColors(){

	if (candleHandlerScript.currentCard.x == 1){
		myColorScript.setBlack = true;
		myColorScript.setBlue = false;
		myColorScript.setBrown= false;
		myColorScript.setGray  = false;
		myColorScript.setGreen = false;
		myColorScript.setOrange = false;
		myColorScript.setPink  = false;
		myColorScript.setPurple = false;
		myColorScript.setRed  = false;
		myColorScript.setYellow  = false;
	}
	if (candleHandlerScript.currentCard.x == 2){
		myColorScript.setBlack = false;
		myColorScript.setBlue = true;
		myColorScript.setBrown= false;
		myColorScript.setGray  = false;
		myColorScript.setGreen = false;
		myColorScript.setOrange = false;
		myColorScript.setPink  = false;
		myColorScript.setPurple = false;
		myColorScript.setRed  = false;
		myColorScript.setYellow  = false;
	}
	
	if (candleHandlerScript.currentCard.x == 3){
		myColorScript.setBlack = false;
		myColorScript.setBlue = false;
		myColorScript.setBrown= true;
		myColorScript.setGray  = false;
		myColorScript.setGreen = false;
		myColorScript.setOrange = false;
		myColorScript.setPink  = false;
		myColorScript.setPurple = false;
		myColorScript.setRed  = false;
		myColorScript.setYellow  = false;
	}
	
	if (candleHandlerScript.currentCard.x == 4){
		myColorScript.setBlack = false;
		myColorScript.setBlue = false;
		myColorScript.setBrown= false;
		myColorScript.setGray  = true;
		myColorScript.setGreen = false;
		myColorScript.setOrange = false;
		myColorScript.setPink  = false;
		myColorScript.setPurple = false;
		myColorScript.setRed  = false;
		myColorScript.setYellow  = false;
	}

	if (candleHandlerScript.currentCard.x == 5){
		myColorScript.setBlack = false;
		myColorScript.setBlue = false;
		myColorScript.setBrown= false;
		myColorScript.setGray  = false;
		myColorScript.setGreen = true;
		myColorScript.setOrange = false;
		myColorScript.setPink  = false;
		myColorScript.setPurple = false;
		myColorScript.setRed  = false;
		myColorScript.setYellow  = false;
	}
	
	if (candleHandlerScript.currentCard.x == 6){
		myColorScript.setBlack = false;
		myColorScript.setBlue = false;
		myColorScript.setBrown= false;
		myColorScript.setGray  = false;
		myColorScript.setGreen = false;
		myColorScript.setOrange = true;
		myColorScript.setPink  = false;
		myColorScript.setPurple = false;
		myColorScript.setRed  = false;
		myColorScript.setYellow  = false;
	}
	
	if (candleHandlerScript.currentCard.x == 7){
		myColorScript.setBlack = false;
		myColorScript.setBlue = false;
		myColorScript.setBrown= false;
		myColorScript.setGray  = false;
		myColorScript.setGreen = false;
		myColorScript.setOrange = false;
		myColorScript.setPink  = true;
		myColorScript.setPurple = false;
		myColorScript.setRed  = false;
		myColorScript.setYellow  = false;
	}
	
	if (candleHandlerScript.currentCard.x == 8){
		myColorScript.setBlack = false;
		myColorScript.setBlue = false;
		myColorScript.setBrown= false;
		myColorScript.setGray  = false;
		myColorScript.setGreen = false;
		myColorScript.setOrange = false;
		myColorScript.setPink  = false;
		myColorScript.setPurple = true;
		myColorScript.setRed  = false;
		myColorScript.setYellow  = false;
	}
	
	if (candleHandlerScript.currentCard.x == 9){
		myColorScript.setBlack = false;
		myColorScript.setBlue = false;
		myColorScript.setBrown= false;
		myColorScript.setGray  = false;
		myColorScript.setGreen = false;
		myColorScript.setOrange = false;
		myColorScript.setPink  = false;
		myColorScript.setPurple = false;
		myColorScript.setRed  = true;
		myColorScript.setYellow  = false;
	}
	
	if (candleHandlerScript.currentCard.x == 10){
		myColorScript.setBlack = false;
		myColorScript.setBlue = false;
		myColorScript.setBrown= false;
		myColorScript.setGray  = false;
		myColorScript.setGreen = false;
		myColorScript.setOrange = false;
		myColorScript.setPink  = false;
		myColorScript.setPurple = false;
		myColorScript.setRed  = false;
		myColorScript.setYellow  = true;
	}

}