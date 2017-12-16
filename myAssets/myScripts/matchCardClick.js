#pragma strict

private var flipped : boolean = false;//!flipped means you see the backside
private var canFlip : boolean = true;
private var canFlipCounter : float = 0;

private var rotationFlipped : Quaternion = Quaternion.Euler(0,180,180);
private var rotationNotFlipped : Quaternion = Quaternion.Euler(0,0,180);

private var startRotation : boolean = true;
private var rotationCounter : float = 0;

var isQuestion : boolean = false;
var whichCard : int = 0;

var soundBuzzRight : Transform;
var soundFlip : Transform;
var circlePrefab : Transform;
var starsPrefab : Transform;
var leafPrefab : Transform;
var plusBananas : Transform;
var minusBanana : Transform;
var bananasNumMoe: Transform;
var bananasNumMyrtle : Transform;
var bananasNumYou : Transform;

var madeMatchCardOne : boolean = false;
var madeMatchCardTwo : boolean = false;
private var matchCardOnePos : Vector3 = Vector3(-1.25,0,7.5);
private var matchCardOneScale : Vector3 = Vector3 (1.23,1.8,1.8);
private var matchCardTwoPos : Vector3 = Vector3(1.25,0,7.5);
private var matchCounter : float = 0;

private var firstCard : boolean = false;
private var secondCard : boolean = false;

private var canFlipBack : boolean = true;
private var flipBackTimer : float = 0;

private var wrongMatchCounter : float = 0;
private var wrongMatchCounterBool : boolean = false;

private var matchCard2Count : int = 0;

private var playerTurnCounter : float = 0;

private var stillCom : boolean = false;

private var prevMatchWinHandlerMatch : boolean = false;


private var canDoMatchStuff : boolean = true;
private var matchCounterLimit : float = .6;
private var matchCounterLimit2 : float = .7;//must die before banana counter





function Update () {

	CheckAI();

	if (!isQuestion){

		if (flipped){
			transform.rotation = Quaternion.Lerp (transform.rotation, rotationFlipped, rotationCounter);
		}
		if (!flipped){
			transform.rotation = Quaternion.Lerp (transform.rotation, rotationNotFlipped, rotationCounter);
		}
	
		if (!canFlip){
			canFlipCounter += 1 * Time.deltaTime;
			if (canFlipCounter > .2){
				canFlipCounter = 0;
				canFlip = true;
			}
		}
	
		if (startRotation){
			rotationCounter += 1 * Time.deltaTime;
			if (rotationCounter > 1){
				rotationCounter = 1;
				startRotation = false;
			}
		}
	}//end isquestion
	
	if (matchWinHandler.Match == true && firstCard){
		MadeMatchCardOne();
	}
	if (matchWinHandler.Match == true && secondCard){
			MadeMatchCardTwo();
	}
	
	if (matchWinHandler.Match){
		SpawnCelebrate();
		if (!prevMatchWinHandlerMatch && matchWinHandler.Match && firstCard){
			Instantiate(soundBuzzRight,transform.position,Quaternion.identity);
		}
	}
	

	PlayerTurnCheck();

	
	WrongMatch();
	

	prevMatchWinHandlerMatch = matchWinHandler.Match;
}//end update

function OnMouseDown(){

	if ((matchWinHandler.TurnNum == 0 || matchWinHandler.TurnNum == 1) && !matchWinHandler.MatchCelebration && matchWinHandler.TurnNum != 3
		&& matchWinHandler.PlayerTurn && !flipped && canFlip && !matchWinHandler.AnimalVisible){
		OnMouseDownFunction();
	}
}


function OnMouseDownFunction  () {

	Instantiate(soundFlip,transform.position,Quaternion.identity);

	//handles whether or not player can go during mode 2 or 3
	if (matchWinHandler.Mode == 2 || matchWinHandler.Mode == 3 && !flipped && canFlip){
		matchWinHandler.TurnNum += 1;

	}

	//flip first
	if (!flipped && canFlip && matchWinHandler.WrongMatch == false && matchWinHandler.Match == false){
		
		//set the w on the array to I'VE SEEN THIS (1) 
		for (var i =0;i < matchComputerPick.CardsArray2.Length; i ++){
			if (whichCard == matchComputerPick.CardsArray2[i].z){
				matchComputerPick.CardsArray2[i].w = 1;
			}
		}
	
		var cardScript : card = transform.gameObject.GetComponent(card);
		
		flipped = true;
		startRotation = true;
		rotationCounter = 0;
   		Instantiate (circlePrefab,Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
   		Instantiate (starsPrefab,Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
   		
   		//IF MATCH STUFF
   		if (canFlip){
   			if (matchWinHandler.FirstCardFlipped == false){//first card
				matchWinHandler.FirstCardFlipped = true;
				if (!firstCard){
   					firstCard = true;
   					matchWinHandler.CardOne.x = cardScript.myX; matchWinHandler.CardOne.y = cardScript.myY;
					//matchComputerPick.firstCard = whichCard;
   				}
   				canFlip = false;
   			}  	
     		if (matchWinHandler.FirstCardFlipped == true && canFlip){//second card
   				if (!secondCard){
   					secondCard = true;
   					matchWinHandler.CardTwo.x = cardScript.myX; matchWinHandler.CardTwo.y = cardScript.myY;
   					if (matchWinHandler.CardOne == matchWinHandler.CardTwo && matchWinHandler.CardOne.x !=0){
   						matchWinHandler.Match = true;
   					}else{
   						matchWinHandler.WrongMatch = true;
   					}
   				}
   				canFlip = false;
   			}	
   		}
		//IF MATCH STUFF
		
		
		canFlip = false;
	}
	
	//flipping back to original
	if (flipped && canFlip && matchWinHandler.WrongMatch == false && matchWinHandler.Match == false){
	

	
		flipped = false;
		canFlip = false;
		startRotation = true;
		rotationCounter = 0;
		Instantiate (circlePrefab,Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
		if (firstCard){
			matchWinHandler.FirstCardFlipped = false;
			matchWinHandler.CardOne.x = 0;
			matchWinHandler.CardOne.y = 0;
		}
		if (secondCard){
			matchWinHandler.CardTwo.x = 0;
			matchWinHandler.CardTwo.y = 0;		
		}
		firstCard = false;
		secondCard = false;
	}
}

function MadeMatchCardOne(){
	matchWinHandler.MatchCelebration = true; //LOOK FOR matchcelebrationoff.js !!!!
	var parentScript : onMouseOver = transform.gameObject.GetComponent(onMouseOver);
	parentScript.scriptEnabled = false;
	transform.position = Vector3.Lerp(transform.position,matchCardOnePos,matchCounter);
	transform.localScale = Vector3.Lerp(transform.localScale,matchCardOneScale,matchCounter);
	matchCounter += .1 * Time.deltaTime;
	
	
	if (matchCounter > matchCounterLimit && canDoMatchStuff){

		canDoMatchStuff = false;
		
		
		//BANANA COUNTER/RECEIVER STUFF
		if (matchWinHandler.Mode == 1){
			Instantiate(bananasNumYou , transform.position,Quaternion.identity);
			matchWinHandler.bananas += 2;
		}else{
			if (matchComputerPick.comTurn){//this is reversed from what you'd expect since it's used a different way elsewhere
				Instantiate(bananasNumYou , transform.position,Quaternion.identity);
				matchWinHandler.bananas += 2;
			}else{
				if (matchWinHandler.Mode == 2){
					Instantiate(bananasNumMoe , transform.position,Quaternion.identity);
				}
				if (matchWinHandler.Mode == 3){
					Instantiate(bananasNumMyrtle, transform.position,Quaternion.identity);	
				}
				matchWinHandler.bananasComputer += 2;
			}
		}


		

   		Instantiate (circlePrefab,Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
   		Instantiate (leafPrefab,Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
   		var bananasOne = Instantiate (plusBananas,Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
		var bananasOneScript : plusBananasMove = bananasOne.GetComponent(plusBananasMove);
		if (matchWinHandler.Mode !=1 && !matchComputerPick.comTurn){
			bananasOneScript.human = false;
		}else{
			bananasOneScript.human = true;
		}
		if (matchWinHandler.Mode == 1){
			bananasOneScript.human = true;
		}


	}//if match counter > .3
	if (matchCounter > matchCounterLimit2){//must die before banana counter
		canDoMatchStuff = false;
		matchWinHandler.PlayerTurn = false;
		matchWinHandler.FirstCardFlipped = false;
		matchWinHandler.CardOne.x = 0;
		matchWinHandler.CardOne.y = 0;
		matchWinHandler.CardTwo.x = 0;
		matchWinHandler.CardTwo.y = 0;
		matchWinHandler.CardsMatched += 1;
		
		matchComputerPick.cardOneRemove = whichCard;
		matchComputerPick.removeCard1 = true;
		
		if (matchWinHandler.TurnNum  > 3){
			matchWinHandler.TurnNum = 0;
			stillCom = true;
		}
		Destroy(gameObject);		
	}
}

function MadeMatchCardTwo(){
	matchWinHandler.MatchCelebration = true;
	var parentScript : onMouseOver = transform.gameObject.GetComponent(onMouseOver);
	parentScript.scriptEnabled = false;
	transform.position = Vector3.Lerp(transform.position,matchCardTwoPos,matchCounter);
	transform.localScale = Vector3.Lerp(transform.localScale,matchCardOneScale,matchCounter);
	matchCounter += .1 * Time.deltaTime;
	if (matchCounter > matchCounterLimit + .01 && canDoMatchStuff){
		canDoMatchStuff = false;

		//matchWinHandler.bananas += 2;

		if (matchWinHandler.Mode == 1){
			matchWinHandler.bananas += 2;
		}else{
			if (matchComputerPick.comTurn){//this is reversed from what you'd expect since it's used a different way elsewhere
				matchWinHandler.bananas += 2;
			}else{
				matchWinHandler.bananasComputer += 2;
			}
		}
		

		

   		Instantiate (circlePrefab,Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
   		Instantiate (leafPrefab,Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
   		var bananasTwo = Instantiate (plusBananas,Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
		var bananasTwoScript : plusBananasMove = bananasTwo.GetComponent(plusBananasMove);
		if (matchWinHandler.Mode !=1 && !matchComputerPick.comTurn){
			bananasTwoScript.human = false;
		}else{
			bananasTwoScript.human = true;
		}
		if (matchWinHandler.Mode == 1){
			bananasTwoScript.human = true;
		}
	}//if bigger than .31
	if (matchCounter > ((matchCounterLimit2) + .01)){//must die before banana counter
		matchWinHandler.PlayerTurn = false;
		matchWinHandler.CardOne.x = 0;
		matchWinHandler.CardOne.y = 0;
		matchWinHandler.CardTwo.x = 0;
		matchWinHandler.CardTwo.y = 0;
		matchWinHandler.Match = false;
	
		matchWinHandler.CardsMatched += 1;

		matchComputerPick.cardTwoRemove = whichCard;
		matchComputerPick.removeCard2 = true;
		
		if (matchWinHandler.TurnNum  > 3){
			matchWinHandler.TurnNum = 0;
		}
		Destroy(gameObject);	
	}
}

function FlipBack(){
		if (flipped){
			Instantiate(soundFlip,transform.position,Quaternion.identity);
		}
		if (matchWinHandler.TurnNum  > 3){
			matchWinHandler.TurnNum = 0;
		}
		flipped = false;
		canFlip = false;
		startRotation = true;
		rotationCounter = 0;
		Instantiate (circlePrefab,Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
		
		if (firstCard){
			matchWinHandler.FirstCardFlipped = false;
			matchWinHandler.CardOne.x = 0;
			matchWinHandler.CardOne.y = 0;
		}
		if (secondCard){
			matchWinHandler.CardTwo.x = 0;
			matchWinHandler.CardTwo.y = 0;		
		}
		firstCard = false;
		secondCard = false;
}

function WrongMatch(){
	if (matchWinHandler.WrongMatch){
		wrongMatchCounter += 1 * Time.deltaTime;
		if (wrongMatchCounter > 1){
			wrongMatchCounterBool = true;
		}		
	}
	
	if (wrongMatchCounterBool){
		if (canFlipBack){
			if (firstCard && matchWinHandler.bananas > 0 && matchComputerPick.comTurn && matchWinHandler.Mode !=1){//again, reversed from what's expected
				matchWinHandler.bananas -= 1;
				
				var minusBanana1 = Instantiate(minusBanana,Vector3(0,0,transform.position.z - 1),Quaternion.identity);
				var minusBanana1Script : plusBananasMove = minusBanana1.GetComponent(plusBananasMove);
				minusBanana1Script.human = true;
				
				Instantiate(bananasNumYou , transform.position,Quaternion.identity);
			}
			
			if (firstCard && matchWinHandler.bananasComputer > 0 && !matchComputerPick.comTurn && matchWinHandler.Mode !=1){//again, reversed from what's expected
				matchWinHandler.bananasComputer -= 1;	
							
				var minusBanana2 = Instantiate(minusBanana,Vector3(0,0,transform.position.z - 1),Quaternion.identity);
				var minusBanana2Script : plusBananasMove = minusBanana2.GetComponent(plusBananasMove);
				minusBanana2Script.human = false;
				
				if (matchWinHandler.Mode == 2){
					Instantiate(bananasNumMoe , transform.position,Quaternion.identity);
				}
				if (matchWinHandler.Mode == 3){
					Instantiate(bananasNumMyrtle, transform.position,Quaternion.identity);	
				}
			}
			
			if (firstCard && matchWinHandler.Mode == 1 && matchWinHandler.bananas > 0){
				matchWinHandler.bananas -=1;
				Instantiate(minusBanana,Vector3(0,0,transform.position.z - 1),Quaternion.identity);
				
				Instantiate(bananasNumYou , transform.position,Quaternion.identity);
			}
			
			FlipBack();
			canFlipBack = false;
		}	
	}
	
	if (canFlipBack == false){
		flipBackTimer += 1 * Time.deltaTime;
		if (flipBackTimer > .5){
			canFlipBack = true;
			flipBackTimer = 0;
			wrongMatchCounterBool = false;
			wrongMatchCounter = 0;
			matchWinHandler.WrongMatch = false;
		}
	}
}

function SpawnCelebrate(){
		var randomNum = Random.Range(0,10);
		
		if (randomNum == 2){
   			Instantiate (starsPrefab,Vector3(0 + Random.Range(-3,4),0 + Random.Range(-2,3),transform.position.z + .1),Quaternion.identity);
   		}
}

function CheckAI(){
	if (matchComputerPick.CanPickCard && matchComputerPick.WhichCard == whichCard){
		matchComputerPick.CanPickCard = false;
		OnMouseDownFunction();
	}
}

function PlayerTurnCheck(){

	if ((matchWinHandler.TurnNum == 3 || matchWinHandler.TurnNum == 4) && canDoMatchStuff != false){
		matchWinHandler.PlayerTurn = false;
	}
	
	if (matchWinHandler.TurnNum == 0 && matchWinHandler.PlayerTurn == false){
		playerTurnCounter += 1 * Time.deltaTime;
		if (playerTurnCounter > .5){
			playerTurnCounter = 0;
			matchWinHandler.PlayerTurn = true;
		}
	}
	
	if (matchWinHandler.PlayerTurn == true){
		playerTurnCounter = 0;
	}

}