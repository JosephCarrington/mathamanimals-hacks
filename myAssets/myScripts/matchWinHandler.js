#pragma strict

static var CardOne : Vector3;
static var CardTwo : Vector3;

static var Match : boolean = false;

static var FirstCardFlipped : boolean = false;

static var WrongMatch : boolean = false;

static var WrongMatchCounter : float = 0;

static var bananas : int = 0;
static var bananasComputer : int = 0;

static var CardsMatched : int = 0;

static var GameEnd : boolean = false;

static var Mode : int = 2; //1 == single, 2 is difficulty2 against comp, 3 is difficulty 3 against comp

static var TurnNum : int = 0;//0 and 1 is player 1 turn, 2 and 3 is computer

static var MatchCelebration : boolean = false;

static var PlayerTurn : boolean = true;

static var WhichAnimal : int = 0;

static var UpdateScores : boolean = false;

static var BananasNumPlayerExists : boolean = false;

static var AnimalVisible : boolean = false;




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
	
	CardOne = Vector3.zero;
	CardTwo = Vector3.zero;

	Match = false;

	PlayerTurn = true;

	//Mode = 1;
	
	MatchCelebration = false;

	TurnNum = 0;

	Match = false;

	FirstCardFlipped  = false;

	WrongMatch = false;

	WrongMatchCounter = 0;

	bananas = 0;

	bananasComputer = 0;

	CardsMatched  = 0;

	GameEnd = false;
	
	BananasNumPlayerExists = false;
	
	AnimalVisible = false;
}


function Update () {
//	print(MatchCelebration);

	//print(FirstCardFlipped);
	//print(TurnNum);
	
	//print(TurnNum); //=============PRETTY HANDY TO LOOK AT
	
	if (GameEnd){
		Destroy(gameObject);
	}
	
	if (Input.GetKeyDown ("1")){
        print ("difficulty 1 set");
        Mode = 1;
	}
	
	if (Input.GetKeyDown ("2")){
        print ("difficulty 2 set");
        Mode = 2;
	}
	
	if (Input.GetKeyDown ("3")){
        print ("difficulty 3 set");
        Mode = 3;
	}


}