#pragma strict

var mat1 : Material;
var mat2 : Material;
var mat3 : Material;
var mat4 : Material;
var mat5 : Material;
var mat6 : Material;
var mat7 : Material;
var mat8 : Material;
var mat9 : Material;
var mat10 : Material;

var candleHandlerScript : candleHandler;


function Update () {

	if (candleHandlerScript.currentCard.y == 1){
		GetComponent.<Renderer>().material = mat1;
	}
	if (candleHandlerScript.currentCard.y == 2){
		GetComponent.<Renderer>().material = mat2;
	}
	if (candleHandlerScript.currentCard.y == 3){
		GetComponent.<Renderer>().material = mat3;
	}
	if (candleHandlerScript.currentCard.y == 4){
		GetComponent.<Renderer>().material = mat4;
	}
	if (candleHandlerScript.currentCard.y == 5){
		GetComponent.<Renderer>().material = mat5;
	}
	if (candleHandlerScript.currentCard.y == 6){
		GetComponent.<Renderer>().material = mat6;
	}
	if (candleHandlerScript.currentCard.y == 7){
		GetComponent.<Renderer>().material = mat7;
	}
	if (candleHandlerScript.currentCard.y == 8){
		GetComponent.<Renderer>().material = mat8;
	}
	if (candleHandlerScript.currentCard.y == 9){
		GetComponent.<Renderer>().material = mat9;
	}
	if (candleHandlerScript.currentCard.y == 10){
		GetComponent.<Renderer>().material = mat10;
	}

}