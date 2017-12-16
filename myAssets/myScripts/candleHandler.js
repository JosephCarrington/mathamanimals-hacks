#pragma strict

var	cardArray = new Vector3[10];
var currentCard : Vector3;
var arraySpot : int = 0;

static var MyrtleRight : boolean = false;
static var MyrtleWrong : boolean = false;
static var MoeRight : boolean = false;
static var MoeWrong : boolean = false;

static var ResetCountdown : boolean = false;

var moveArray : boolean = false;


function Start(){
	//sound stuff
	if (matchWinHandler.Mode == 1){
		musicHandler.SlowJamGo = true;
	}
	if (matchWinHandler.Mode == 2){
		musicHandler.MediumJamGo = true;
	}
	if (matchWinHandler.Mode == 3){
		musicHandler.FastJamGo = true;
	}


	matchWinHandler.bananas = 0;
	matchWinHandler.bananasComputer = 0;

	SetArraySpots();
	var randomPick = Random.Range(0,cardArray.Length);
	currentCard = cardArray[randomPick];
	
	var randomNumJS : Array = cardArray;
	randomNumJS.RemoveAt(randomPick);
	cardArray = randomNumJS;
	
	MyrtleRight  = false;
	MyrtleWrong  = false;
	MoeRight  = false;
	MoeWrong  = false;

}

function Update () {

	if (moveArray){
		//arraySpot += 1;
		var randomPick = Random.Range(0,cardArray.Length);
		currentCard = cardArray[randomPick];
		moveArray = false; 
		
		var randomNumJS : Array = cardArray;
		randomNumJS.RemoveAt(randomPick);
		cardArray = randomNumJS;
	}


}//end of update


function SetArraySpots(){

	cardArray[0] = Vector3(1,1,0);
	cardArray[1] = Vector3(1,2,0);
	cardArray[2] = Vector3(2,1,0);
	cardArray[3] = Vector3(2,2,0);
	cardArray[4] = Vector3(3,1,0);
	cardArray[5] = Vector3(3,2,0);
	cardArray[6] = Vector3(4,1,0);
	cardArray[7] = Vector3(4,2,0);
	cardArray[8] = Vector3(5,1,0);
	cardArray[9] = Vector3(5,2,0);

	
	
	//=====NEW STUFF======
	
	if (matchWinHandler.WhichAnimal == 1){
		cardArray[0] = Vector3(1,1,0);
		cardArray[1] = Vector3(2,1,0);
		cardArray[2] = Vector3(3,1,0);
		cardArray[3] = Vector3(4,1,0);
		cardArray[4] = Vector3(5,1,0);
		cardArray[5] = Vector3(6,1,0);
		cardArray[6] = Vector3(7,1,0);
		cardArray[7] = Vector3(8,1,0);
		cardArray[8] = Vector3(9,1,0);
		cardArray[9] = Vector3(10,1,0);
	}
	if (matchWinHandler.WhichAnimal == 2){
		cardArray[0] = Vector3(1,2,0);
		cardArray[1] = Vector3(2,2,0);
		cardArray[2] = Vector3(3,2,0);
		cardArray[3] = Vector3(4,2,0);
		cardArray[4] = Vector3(5,2,0);
		cardArray[5] = Vector3(6,2,0);
		cardArray[6] = Vector3(7,2,0);
		cardArray[7] = Vector3(8,2,0);
		cardArray[8] = Vector3(9,2,0);
		cardArray[9] = Vector3(10,2,0);	
	}
	if (matchWinHandler.WhichAnimal == 3){
		cardArray[0] = Vector3(1,3,0);
		cardArray[1] = Vector3(2,3,0);
		cardArray[2] = Vector3(3,3,0);
		cardArray[3] = Vector3(4,3,0);
		cardArray[4] = Vector3(5,3,0);
		cardArray[5] = Vector3(6,3,0);
		cardArray[6] = Vector3(7,3,0);
		cardArray[7] = Vector3(8,3,0);
		cardArray[8] = Vector3(9,3,0);
		cardArray[9] = Vector3(10,3,0);	
	}
	if (matchWinHandler.WhichAnimal == 4){
		cardArray[0] = Vector3(1,4,0);
		cardArray[1] = Vector3(2,4,0);
		cardArray[2] = Vector3(3,4,0);
		cardArray[3] = Vector3(4,4,0);
		cardArray[4] = Vector3(5,4,0);
		cardArray[5] = Vector3(6,4,0);
		cardArray[6] = Vector3(7,4,0);
		cardArray[7] = Vector3(8,4,0);
		cardArray[8] = Vector3(9,4,0);
		cardArray[9] = Vector3(10,4,0);	
	}
	if (matchWinHandler.WhichAnimal == 5){
		cardArray[0] = Vector3(1,5,0);
		cardArray[1] = Vector3(2,5,0);
		cardArray[2] = Vector3(3,5,0);
		cardArray[3] = Vector3(4,5,0);
		cardArray[4] = Vector3(5,5,0);
		cardArray[5] = Vector3(6,5,0);
		cardArray[6] = Vector3(7,5,0);
		cardArray[7] = Vector3(8,5,0);
		cardArray[8] = Vector3(9,5,0);
		cardArray[9] = Vector3(10,5,0);	
	}
	if (matchWinHandler.WhichAnimal == 6){
		cardArray[0] = Vector3(1,6,0);
		cardArray[1] = Vector3(2,6,0);
		cardArray[2] = Vector3(3,6,0);
		cardArray[3] = Vector3(4,6,0);
		cardArray[4] = Vector3(5,6,0);
		cardArray[5] = Vector3(6,6,0);
		cardArray[6] = Vector3(7,6,0);
		cardArray[7] = Vector3(8,6,0);
		cardArray[8] = Vector3(9,6,0);
		cardArray[9] = Vector3(10,6,0);	
	}
	if (matchWinHandler.WhichAnimal == 7){
		cardArray[0] = Vector3(1,7,0);
		cardArray[1] = Vector3(2,7,0);
		cardArray[2] = Vector3(3,7,0);
		cardArray[3] = Vector3(4,7,0);
		cardArray[4] = Vector3(5,7,0);
		cardArray[5] = Vector3(6,7,0);
		cardArray[6] = Vector3(7,7,0);
		cardArray[7] = Vector3(8,7,0);
		cardArray[8] = Vector3(9,7,0);
		cardArray[9] = Vector3(10,7,0);	
	}
	if (matchWinHandler.WhichAnimal == 8){
		cardArray[0] = Vector3(1,8,0);
		cardArray[1] = Vector3(2,8,0);
		cardArray[2] = Vector3(3,8,0);
		cardArray[3] = Vector3(4,8,0);
		cardArray[4] = Vector3(5,8,0);
		cardArray[5] = Vector3(6,8,0);
		cardArray[6] = Vector3(7,8,0);
		cardArray[7] = Vector3(8,8,0);
		cardArray[8] = Vector3(9,8,0);
		cardArray[9] = Vector3(10,8,0);	
	}
	if (matchWinHandler.WhichAnimal == 9){
		cardArray[0] = Vector3(1,9,0);
		cardArray[1] = Vector3(2,9,0);
		cardArray[2] = Vector3(3,9,0);
		cardArray[3] = Vector3(4,9,0);
		cardArray[4] = Vector3(5,9,0);
		cardArray[5] = Vector3(6,9,0);
		cardArray[6] = Vector3(7,9,0);
		cardArray[7] = Vector3(8,9,0);
		cardArray[8] = Vector3(9,9,0);
		cardArray[9] = Vector3(10,9,0);	
	}
	if (matchWinHandler.WhichAnimal == 10){
		cardArray[0] = Vector3(1,10,0);
		cardArray[1] = Vector3(2,10,0);
		cardArray[2] = Vector3(3,10,0);
		cardArray[3] = Vector3(4,10,0);
		cardArray[4] = Vector3(5,10,0);
		cardArray[5] = Vector3(6,10,0);
		cardArray[6] = Vector3(7,10,0);
		cardArray[7] = Vector3(8,10,0);
		cardArray[8] = Vector3(9,10,0);
		cardArray[9] = Vector3(10,10,0);	
	}

}