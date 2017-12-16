#pragma strict
var whichGame : int = 1;

var blinkRedXPrefab : Transform;
var blinkGreenCirclePrefab : Transform;
var particleStarPrefab : Transform;
var matchGamePrefab : Transform;
var starsPrefab : Transform;
var bananasNumMoe : Transform;
var bananasNumMyrtle : Transform;
var bananasNumYou : Transform;
var plusBananas : Transform;
var minusBananas : Transform;
var moesAnswer : Transform;
var myrtlesAnswer : Transform;

var originalPos : Vector3;
var orginalRot : Transform;
var parentObject : Transform;

var newPos : Vector3;
var newRot : Transform;

var timer : float = 0;
var timerSpeed : float = 4;

var secondTimer : float = 0;

var pulled = false;

var candleHandlerScript : candleHandler;

var numClickUpScript : numClickUp;

var numClickUpScriptYears : numClickUp;

private var whichTurn : int = 1;

var finalComplete : boolean = false;

var finalTimer : float = 0;

static var canCelebrate : boolean = false;
private var canCelebrateCounter : float = 0;

static var canAntiCelebrate : boolean = false;
var canAntiCelebrateCounter : float = 0;
static var AntiCelebrateShow : boolean = false;

var isCandles : boolean = true;
var isYears : boolean = false;

private var canGive : boolean = true;

var youLose : boolean = false;

private var celebrateOrAntiCelebrateTime : float = 8;

static var xExist : boolean = false;

private var canGiveBananasToCom : boolean = false;
private var canGiveBananaGraphics : boolean = false;
private var giveBananasToComCount : float = 0;

static var CandlesAnswer = 0;
static var YearsAnswer = 0;
static var IsYears : boolean = false;
static var IsCandles : boolean = false;






function Start(){
	CandlesAnswer = 0;
	YearsAnswer = 0;
	IsYears = false;
	IsCandles = false;
	AntiCelebrateShow = false;

	originalPos = transform.position;
	whichTurn = 1;
	canCelebrate = false;
	canAntiCelebrate = false;
//	orginalRot = transform.rotation;
	xExist = false;
}

function Update () {
	//make sure computer bananas don't go over 40
	if (matchWinHandler.bananasComputer > 40){
		matchWinHandler.bananasComputer = 40;
	}

	if (finalComplete){
		finalTimer += 1 * Time.deltaTime;
		if (finalTimer > celebrateOrAntiCelebrateTime){
			var matchScreen = Instantiate (matchGamePrefab,Vector3.zero, Quaternion.identity);
			var matchScreenScript : gameScreen = matchScreen.GetComponent(gameScreen);
			matchScreenScript.bananas = matchWinHandler.bananas;
			matchScreenScript.bananasComputer = matchWinHandler.bananasComputer;
			matchScreenScript.spawnObject = whichGame;
			Destroy(parentObject.gameObject);
		}
	}



	if (pulled){
		PullFunction();
		secondTimer += 1 * Time.deltaTime;
		if (secondTimer > 1 && isCandles){//if how many candles
			//not right
			if (numClickUpScript.myCurrentNum != candleHandlerScript.currentCard.x){
			/*
				matchWinHandler.bananasComputer += 4;
				if (matchWinHandler.Mode == 2){
					Instantiate(bananasNumMoe,transform.position,Quaternion.identity);
				}
				if (matchWinHandler.Mode == 3){
					Instantiate(bananasNumMyrtle,transform.position,Quaternion.identity);
				}
				var bananaLeftc = Instantiate(plusBananas,Vector3(-1,0,8),Quaternion.identity);
				var bananaRightc = Instantiate(plusBananas,Vector3(1,0,8),Quaternion.identity);
				var banLeftScriptc : plusBananasMove = bananaLeftc.GetComponent(plusBananasMove);
				var banRightScriptc : plusBananasMove = bananaRightc.GetComponent(plusBananasMove);
				banLeftScriptc.human = false;
				banRightScriptc.human = false;
				*/
				
				
				
				canGiveBananasToCom = true;
				canGiveBananaGraphics = true;
			
				//Instantiate (blinkRedXPrefab, Vector3(0,0,8),Quaternion.Euler(0,180,180));
				canAntiCelebrate = true;
				if (matchWinHandler.bananas >= 1){
					//Instantiate(bananasNumYou, transform.position,Quaternion.identity);
					//Instantiate(minusBananas,transform.position,Quaternion.identity);
				}
				if (matchWinHandler.bananas >= 1){
					//matchWinHandler.bananas -= 1;
				}
				
				if (matchWinHandler.Mode != 1){
					if (whichTurn == 10){
						finalComplete = true;
					}
					if (!finalComplete){
						MoveArrayFunction();
					}
					whichTurn += 1;
				}
				
				CurrentNumToZeroFunction();

			}
			
			//correct
			if (numClickUpScript.myCurrentNum == candleHandlerScript.currentCard.x){
				//banana spawning in canCelebrate thing
				
				if (whichTurn == 10){
					finalComplete = true;
				}
				if (!finalComplete){
					MoveArrayFunction();
				}
				//numClickUpScript.myCurrentNum = 0;
				//Instantiate (blinkGreenCirclePrefab, Vector3(0,0,8),Quaternion.Euler(0,180,180));
				canCelebrate = true;
				//numClickUpScript.myCurrentNum = 0;
				CurrentNumToZeroFunction();
				whichTurn += 1;
			}

			pulled = false;
			timer = 0;
			secondTimer = 0;
			transform.position = originalPos;
			transform.rotation = Quaternion.Lerp (newRot.rotation, orginalRot.rotation, 1);
		}
		if (secondTimer > 1 && isYears){//if how old am i
			//not right
			if (numClickUpScriptYears.myCurrentNum != (candleHandlerScript.currentCard.x * candleHandlerScript.currentCard.y)){
				/*matchWinHandler.bananasComputer += 4;
				if (matchWinHandler.Mode == 2){
					Instantiate(bananasNumMoe,transform.position,Quaternion.identity);
				}
				if (matchWinHandler.Mode == 3){
					Instantiate(bananasNumMyrtle,transform.position,Quaternion.identity);
				}
				var bananaLeftd = Instantiate(plusBananas,Vector3(-1,0,8),Quaternion.identity);
				var bananaRightd = Instantiate(plusBananas,Vector3(1,0,8),Quaternion.identity);
				var banLeftScriptd : plusBananasMove = bananaLeftd.GetComponent(plusBananasMove);
				var banRightScriptd : plusBananasMove = bananaRightd.GetComponent(plusBananasMove);
				banLeftScriptd.human = false;
				banRightScriptd.human = false;
			*/
				canGiveBananasToCom = true;
				canGiveBananaGraphics = true;
				//Instantiate (blinkRedXPrefab, Vector3(0,0,8),Quaternion.Euler(0,180,180));
				canAntiCelebrate = true;
				if (matchWinHandler.bananas >= 1){
					//Instantiate(bananasNumYou, transform.position,Quaternion.identity);
					//Instantiate(minusBananas,transform.position,Quaternion.identity);
				}
				if (matchWinHandler.bananas >= 1){
					//matchWinHandler.bananas -= 1;
				}
				
				if (matchWinHandler.Mode != 1){
					if (whichTurn == 10){
						finalComplete = true;
					}
					if (!finalComplete){
						MoveArrayFunction();
					}
					whichTurn += 1;
				}
				
				
				CurrentNumToZeroYearsFunction();
			}
			
			//correct
			if (numClickUpScriptYears.myCurrentNum == (candleHandlerScript.currentCard.x * candleHandlerScript.currentCard.y)){
				/*Instantiate(bananasNumYou, transform.position,Quaternion.identity);
				var bananaLeftb = Instantiate(plusBananas,Vector3(-1,0,8),Quaternion.identity);
				var bananaRightb = Instantiate(plusBananas,Vector3(1,0,8),Quaternion.identity);
				var banLeftScriptb : plusBananasMove = bananaLeftb.GetComponent(plusBananasMove);
				var banRightScriptb : plusBananasMove = bananaRightb.GetComponent(plusBananasMove);
				banLeftScriptb.human = true;
				banRightScriptb.human = true;*/
				
				if (whichTurn == 10){
					finalComplete = true;
				}
				if (!finalComplete){
					MoveArrayFunction();
				}
				//numClickUpScript.myCurrentNum = 0;
				//numClickUpScriptYears.myCurrentNum = 0;
				CurrentNumToZeroYearsFunction();
				//Instantiate (blinkGreenCirclePrefab, Vector3(0,0,8),Quaternion.Euler(0,180,180));
				canCelebrate = true;
				whichTurn += 1;
			}

			pulled = false;
			timer = 0;
			secondTimer = 0;
			transform.position = originalPos;
			transform.rotation = Quaternion.Lerp (newRot.rotation, orginalRot.rotation, 1);
		}
	}
	
	if (canGiveBananasToCom){
		GiveBananasToCom();
	}
	
	if (canCelebrate){
		if (matchWinHandler.Mode == 2 || matchWinHandler.Mode == 1){
			candleHandler.MoeRight = true;
		}
		if (matchWinHandler.Mode == 3){
			candleHandler.MyrtleRight = true;
		}
		SpawnCelebrate();
		canCelebrateCounter += 1 * Time.deltaTime;
		
		if (canCelebrateCounter > 1 && canGive){
			
			canGive = false;
			DelayBananaGive();

		}
		if (canCelebrateCounter > celebrateOrAntiCelebrateTime){
			candleHandler.MyrtleRight = false;
			candleHandler.MoeRight = false;
			canCelebrate = false;
			canCelebrateCounter = 0;
			canGive = true;
		}
		
		
	}
	
	if (canAntiCelebrate){
		if (matchWinHandler.Mode == 2 || matchWinHandler.Mode == 1){
			candleHandler.MoeWrong = true;
		}
		if (matchWinHandler.Mode == 3){
			candleHandler.MyrtleWrong = true;
		}
		canAntiCelebrateCounter += 1 * Time.deltaTime;
		

			
		
		if (canAntiCelebrateCounter > celebrateOrAntiCelebrateTime){
			candleHandler.MoeWrong = false;
			candleHandler.MyrtleWrong = false;
			canAntiCelebrate = false;
			canAntiCelebrateCounter = 0;
			AntiCelebrateShow = false;
		}
		if (canAntiCelebrateCounter > celebrateOrAntiCelebrateTime * .7 && matchWinHandler.Mode == 1){
			candleHandler.MoeWrong = false;
			candleHandler.MyrtleWrong = false;
			canAntiCelebrate = false;
			canAntiCelebrateCounter = 0;
			AntiCelebrateShow = false;
		}
	}
	
	

}//end of update

function OnMouseDown () {

	if (!finalComplete){
		pulled = true;
		Instantiate (particleStarPrefab,transform.position,Quaternion.identity);
		print ("i was touched");
	}

}

function PullFunction(){

	timer += timerSpeed * Time.deltaTime;
	transform.position = Vector3.Lerp(originalPos, newPos, timer);
	transform.rotation = Quaternion.Lerp (orginalRot.rotation, newRot.rotation, timer);
}

function SpawnCelebrate(){
		//var randomNum = Random.Range(0,10);
		
		//if (randomNum == 2){
   			Instantiate (starsPrefab,Vector3(0 + Random.Range(-3,4),0 + Random.Range(-2,3),transform.position.z + .1),Quaternion.identity);
   	//	}
}

function MoveArrayFunction(){
	yield WaitForSeconds(celebrateOrAntiCelebrateTime - .05);
	candleHandlerScript.moveArray = true;
}

function CurrentNumToZeroFunction(){
	yield WaitForSeconds(celebrateOrAntiCelebrateTime - .05);
	numClickUpScript.myCurrentNum = 0;
}

function CurrentNumToZeroYearsFunction(){
	yield WaitForSeconds(celebrateOrAntiCelebrateTime - .05);
	numClickUpScriptYears.myCurrentNum = 0;
}

function GiveBananasToCom(){
	if (matchWinHandler.Mode == 2 || matchWinHandler.Mode == 3){

		giveBananasToComCount += 1 * Time.deltaTime;
		
		if (giveBananasToComCount > 3 && canGiveBananaGraphics){
			AntiCelebrateShow = true;
			CandlesAnswer = candleHandlerScript.currentCard.x;
			YearsAnswer = candleHandlerScript.currentCard.x * candleHandlerScript.currentCard.y;
			IsYears = isYears;
			IsCandles = isCandles;
		
			if (matchWinHandler.Mode == 2){
				Instantiate(bananasNumMoe,transform.position,Quaternion.identity);
				Instantiate(moesAnswer, Vector3.zero,Quaternion.identity);
			}
			if (matchWinHandler.Mode == 3){
				Instantiate(bananasNumMyrtle,transform.position,Quaternion.identity);
				Instantiate(myrtlesAnswer, Vector3.zero,Quaternion.identity);
			}
			var bananaLeftd = Instantiate(plusBananas,Vector3(-1,0,8),Quaternion.identity);
			var bananaRightd = Instantiate(plusBananas,Vector3(1,0,8),Quaternion.identity);
			var banLeftScriptd : plusBananasMove = bananaLeftd.GetComponent(plusBananasMove);
			var banRightScriptd : plusBananasMove = bananaRightd.GetComponent(plusBananasMove);
			banLeftScriptd.human = false;
			banRightScriptd.human = false;	
			canGiveBananaGraphics= false;
		}
	
		if (giveBananasToComCount > 4){
			matchWinHandler.bananasComputer += 4;
			giveBananasToComCount = 0;
			canGiveBananasToCom = false;
		}
	}
}

function DelayBananaGive(){
	yield WaitForSeconds(2.5); 
	Instantiate(bananasNumYou, transform.position,Quaternion.identity);
	var bananaLeft = Instantiate(plusBananas,Vector3(-1,0,8),Quaternion.identity);
	var bananaRight = Instantiate(plusBananas,Vector3(1,0,8),Quaternion.identity);
	var banLeftScript : plusBananasMove = bananaLeft.GetComponent(plusBananasMove);
	var banRightScript : plusBananasMove = bananaRight.GetComponent(plusBananasMove);
	banLeftScript.human = true;
	banRightScript.human = true;
	
	yield WaitForSeconds(.2);
	matchWinHandler.bananas += 4;
	
}