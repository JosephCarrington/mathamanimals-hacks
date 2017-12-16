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

var mat1b : Material;
var mat2b : Material;
var mat3b : Material;
var mat4b : Material;
var mat5b : Material;
var mat6b : Material;
var mat7b : Material;
var mat8b : Material;
var mat9b : Material;
var mat10b : Material;

function Start () {

	
	if (matchWinHandler.WhichAnimal == 1){
		GetComponent.<Renderer>().material = mat1;
	}
	
	if (matchWinHandler.WhichAnimal == 2){
		GetComponent.<Renderer>().material = mat2;
	}
	
	if (matchWinHandler.WhichAnimal == 3){
		GetComponent.<Renderer>().material = mat3;
	}
	
	if (matchWinHandler.WhichAnimal == 4){
		GetComponent.<Renderer>().material = mat4;
	}
	
	if (matchWinHandler.WhichAnimal == 5){
		GetComponent.<Renderer>().material = mat5;
	}
	
	if (matchWinHandler.WhichAnimal == 6){
		GetComponent.<Renderer>().material = mat6;
	}
	
	if (matchWinHandler.WhichAnimal == 7){
		GetComponent.<Renderer>().material = mat7;
	}
	
	if (matchWinHandler.WhichAnimal == 8){
		GetComponent.<Renderer>().material = mat8;
	}
	
	if (matchWinHandler.WhichAnimal == 9){
		GetComponent.<Renderer>().material = mat9;
	}
	
	if (matchWinHandler.WhichAnimal == 10){
		GetComponent.<Renderer>().material = mat10;
	}
	
	if (Globals.FlipFlopFun){
		if (matchWinHandler.WhichAnimal == 1){
			GetComponent.<Renderer>().material = mat1b;
		}
	
		if (matchWinHandler.WhichAnimal == 2){
			GetComponent.<Renderer>().material = mat2b;
		}
	
		if (matchWinHandler.WhichAnimal == 3){
			GetComponent.<Renderer>().material = mat3b;
		}
	
		if (matchWinHandler.WhichAnimal == 4){
			GetComponent.<Renderer>().material = mat4b;
		}
	
		if (matchWinHandler.WhichAnimal == 5){
			GetComponent.<Renderer>().material = mat5b;
		}
	
		if (matchWinHandler.WhichAnimal == 6){
			GetComponent.<Renderer>().material = mat6b;	
		}
	
		if (matchWinHandler.WhichAnimal == 7){
			GetComponent.<Renderer>().material = mat7b;
		}
	
		if (matchWinHandler.WhichAnimal == 8){
			GetComponent.<Renderer>().material = mat8b;
		}
	
		if (matchWinHandler.WhichAnimal == 9){
			GetComponent.<Renderer>().material = mat9b;
		}
	
		if (matchWinHandler.WhichAnimal == 10){
			GetComponent.<Renderer>().material = mat10b;
		}
	}


}

