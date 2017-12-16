#pragma strict

static var CanPickCard : boolean = false;

static var WhichCard : int = 0;

static var CardsArray : Vector4[] = new Vector4[20];
static var cardNumArray : int[] = new int[20];
static var cardNumArray2 : int[] = new int[20];
static var CardsArray2 : Vector4[] = new Vector4[20];
//static var cardNumArray3 : int[] = new int[20];

private var randPick : int;

static var howManyFlipped : int = 0;

static var removeCard1 : boolean = false;
static var removeCard2 : boolean = false;
static var cardOneRemove : int;
static var cardTwoRemove : int;

static var firstCard : int;

private var gotSeenCard : boolean = false;

private var comCounter : float = 0;
private var comCounter2 : float = 0;

static var comTurn : boolean = false;

private var comTimes : int = 0;

private var foundPair : boolean = false;

private var whichCardTemp : int = 0;

private var secondCard : int = 0;
private var sawPair : boolean = false;


function Start(){ 
	//CardsArray = new Vector4[20];
	//CardsArray2 = new Vector4[20];
	CanPickCard = false;
	WhichCard = 0;
	cardNumArray = new int[20];
	cardNumArray2 = new int[20];
	InitializeStuff();
	cardNumArray2 = cardNumArray;
	CardsArray2 = CardsArray;
	howManyFlipped = 0;
	removeCard1 = false;
	removeCard2 = false;
	comTurn = false;
	//cardNumArray3 = cardNumArray;
}

function Update(){
	//print(howManyFlipped);


	if (removeCard1){
		RemoveCardOne();
	}
	
	if (removeCard2){
		RemoveCardTwo();
	}
//	print(matchWinHandler.TurnNum);
	if (matchWinHandler.TurnNum == 2){
		comTurn = true;
	}
	
	
	if (comTurn && !matchWinHandler.MatchCelebration && !matchWinHandler.BananasNumPlayerExists){//LOOK IN PARTICLE KILLER FOR PLAYER BANANA BOX DISPLAY THING
		matchWinHandler.PlayerTurn = false;
		comCounter += 1 * Time.deltaTime;
		comCounter2 += 1 * Time.deltaTime;
		
		if (comCounter > 3){
			comCounter = -30;
			if (matchWinHandler.Mode == 2){
				//FlipRandom();
				NewFlipMoe();
			}
			if (matchWinHandler.Mode == 3){
				//FlipNotRandom();
				NewFlipMyrtle();
			}
		}
		
		if (comCounter2 > 4){
			matchWinHandler.PlayerTurn = true;
			comCounter2 = 0;
			comCounter = 0;
			comTurn = false;
			if (matchWinHandler.Mode == 2){
				//FlipRandom();
				NewFlipMoe();
			}
			if (matchWinHandler.Mode == 3){
				//FlipNotRandom();
				NewFlipMyrtle();
			}
		}
	}




    if (Input.GetKeyDown ("space")){//RANDOM PICK
    	randPick = Random.Range(0,cardNumArray.Length);
    	WhichCard = cardNumArray[randPick];
        CanPickCard = true;
        howManyFlipped += 1;
        
        var cardNumArrayJS : Array = cardNumArray;
		cardNumArrayJS.RemoveAt(randPick);
		cardNumArray = cardNumArrayJS;
		
		var CardsArrayJS : Array = CardsArray;
		CardsArrayJS.Remove(randPick);
		CardsArray = CardsArrayJS;
		
		//this helps us not pick the same first card twice and resets it to original after the second card
		if (howManyFlipped == 2){
			howManyFlipped = 0;
			cardNumArray = cardNumArray2;
			CardsArray = CardsArray2;
		}
	}//random
	
	var canUseB = false;
    if (Input.GetKeyDown ("b") && canUseB){//NOT RANDOM
    	if (howManyFlipped == 0){
    		randPick = Random.Range(0,cardNumArray.Length);
    		WhichCard = cardNumArray[randPick];
        	CanPickCard = true;
        }
    	if (howManyFlipped == 1){//50 percent of pairing with second card that has been seen, first card always random
    		for (var i = 0;i < cardNumArray.Length; i ++){
    			if (CardsArray[i].x == matchWinHandler.CardOne.x && CardsArray[i].y == matchWinHandler.CardOne.y && CardsArray[i].w == 1){
    				var fiftyPercent = Random.Range(1,3);
    				if (fiftyPercent == 2){
    					randPick = i;
    					gotSeenCard = true;
    				}
    			}

    		}
    		if (!gotSeenCard){
    			randPick = Random.Range(0,cardNumArray.Length);
    		}
    		gotSeenCard = false;
    		WhichCard = cardNumArray[randPick];
        	CanPickCard = true;
        }
        
        howManyFlipped += 1;
        
        var cardNumArrayJSb : Array = cardNumArray;
		cardNumArrayJSb.RemoveAt(randPick);
		cardNumArray = cardNumArrayJSb;
		
		var CardsArrayJSb : Array = CardsArray;
		CardsArrayJSb.RemoveAt(randPick);
		CardsArray = CardsArrayJSb;
		
		//this helps us not pick the same first card twice and resets it to original after the second card
		if (howManyFlipped == 2){
			howManyFlipped = 0;
			cardNumArray = cardNumArray2;
			CardsArray = CardsArray2;
		}
	}//not random
	
	//print(howManyFlipped);
}

function InitializeStuff(){
	for (var i = 0; i < 20; i ++){
		cardNumArray[i] = i;
	}
}

function RemoveCardOne(){

			var spotToGo : int;
		for (var i = 0; i < cardNumArray.Length; i ++){
			if (cardOneRemove == cardNumArray[i]){
				spotToGo = i;
			}
		}
		
		var cardNumArrayJS : Array = cardNumArray;
		cardNumArrayJS.RemoveAt(spotToGo);
		cardNumArray = cardNumArrayJS;
		cardNumArray2 = cardNumArrayJS;
		
		var CardsArrayJS : Array = CardsArray;
		CardsArrayJS.RemoveAt(spotToGo);
		CardsArray = CardsArrayJS;
		CardsArray2 = CardsArray;
		
		
		removeCard1 = false;

}

function RemoveCardTwo(){

		var spotToGo : int;
		for (var i = 0; i < cardNumArray.Length; i ++){
			if (cardTwoRemove == cardNumArray[i]){
				spotToGo = i;
			}
		}
		
		var cardNumArrayJS : Array = cardNumArray;
		cardNumArrayJS.RemoveAt(spotToGo);
		cardNumArray = cardNumArrayJS;
		cardNumArray2 = cardNumArrayJS;
		
		var CardsArrayJS : Array = CardsArray;
		CardsArrayJS.RemoveAt(spotToGo);
		CardsArray = CardsArrayJS;
		CardsArray2 = CardsArray;
		
		
		removeCard2 = false;

}

function FlipRandom(){//no longer random!! 
/*
    	randPick = Random.Range(0,cardNumArray.Length);
    	WhichCard = cardNumArray[randPick];
        CanPickCard = true;
        howManyFlipped += 1;
        
        var cardNumArrayJS : Array = cardNumArray;
		cardNumArrayJS.RemoveAt(randPick);
		cardNumArray = cardNumArrayJS;
		
		var CardsArrayJS : Array = CardsArray;
		CardsArrayJS.Remove(randPick);
		CardsArray = CardsArrayJS;
		
		//this helps us not pick the same first card twice and resets it to original after the second card
		if (howManyFlipped == 2){
			howManyFlipped = 0;
			cardNumArray = cardNumArray2;
			CardsArray = CardsArray2;
		}
*/

    	if (howManyFlipped == 0){
    		randPick = Random.Range(0,cardNumArray.Length);
    		WhichCard = cardNumArray[randPick];
        	CanPickCard = true;
        }
    	if (howManyFlipped == 1){//50 percent of pairing with second card that has been seen, first card always random
    		for (var i = 0;i < cardNumArray.Length; i ++){
    			if (CardsArray[i].x == matchWinHandler.CardOne.x && CardsArray[i].y == matchWinHandler.CardOne.y && CardsArray[i].w == 1){
    				var thirtyPercent = Random.Range(1,11);//you will never get the last number
    				if (thirtyPercent <= 3){
    					randPick = i;
    					gotSeenCard = true;
    				}
    			}

    		}
    		if (!gotSeenCard){
    			randPick = Random.Range(0,cardNumArray.Length);
    		}
    		gotSeenCard = false;
    	
    		WhichCard = cardNumArray[randPick];
        	CanPickCard = true;
        }
        
        howManyFlipped += 1;
        
        var cardNumArrayJSb : Array = cardNumArray;
		cardNumArrayJSb.RemoveAt(randPick);
		cardNumArray = cardNumArrayJSb;
		
		var CardsArrayJSb : Array = CardsArray;
		CardsArrayJSb.RemoveAt(randPick);
		CardsArray = CardsArrayJSb;
		
		//this helps us not pick the same first card twice and resets it to original after the second card
		if (howManyFlipped == 2){
			howManyFlipped = 0;
			cardNumArray = cardNumArray2;
			CardsArray = CardsArray2;
		}

}

function FlipNotRandom(){

    	if (howManyFlipped == 0){
    		randPick = Random.Range(0,cardNumArray.Length);
    		WhichCard = cardNumArray[randPick];
        	CanPickCard = true;
        }
    	if (howManyFlipped == 1){//50 percent of pairing with second card that has been seen, first card always random
    		for (var i = 0;i < cardNumArray.Length; i ++){
    			if (CardsArray[i].x == matchWinHandler.CardOne.x && CardsArray[i].y == matchWinHandler.CardOne.y && CardsArray[i].w == 1){
    				var seventyFivePercent = Random.Range(1,101);//you will never get the last number
    				if (seventyFivePercent <= 75){
    					randPick = i;
    					gotSeenCard = true;
    				}
    			}
    		}
    		if (!gotSeenCard){
    			randPick = Random.Range(0,cardNumArray.Length);
    		}
    		gotSeenCard = false;
    	
    		WhichCard = cardNumArray[randPick];
        	CanPickCard = true;
        }
        
        howManyFlipped += 1;
        
        var cardNumArrayJSb : Array = cardNumArray;
		cardNumArrayJSb.RemoveAt(randPick);
		cardNumArray = cardNumArrayJSb;
		
		var CardsArrayJSb : Array = CardsArray;
		CardsArrayJSb.RemoveAt(randPick);
		CardsArray = CardsArrayJSb;
		
		//this helps us not pick the same first card twice and resets it to original after the second card
		if (howManyFlipped == 2){
			howManyFlipped = 0;
			cardNumArray = cardNumArray2;
			CardsArray = CardsArray2;
		}

}


function NewFlipMoe(){//no longer random!! 
    	if (howManyFlipped == 0){
    		var sawCard : boolean = false;
    		for (var j = 0; j < cardNumArray.Length; j++){
    			if (CardsArray[j].w == 1 && !sawCard){
    				for (var k =0; k < cardNumArray.Length; k++){
    					if (CardsArray[k].x == CardsArray[j].x && CardsArray[k].y == CardsArray[j].y && CardsArray[k].w ==1 && k != j){
    						randPick = j;
    						secondCard = k;
    						WhichCard = cardNumArray[j];
    						CanPickCard = true;
    						sawCard = true;
    						print("saw pair");
    						sawPair = true;
    					}
    				}
    			}
    		}
    		if (!sawCard){
    			randPick = Random.Range(0,cardNumArray.Length);
    			WhichCard = cardNumArray[randPick];
        		CanPickCard = true;
        		print ("random");
        	}
    		var thirtyPercent = Random.Range(1,11);//you will never get the last number
    		if (thirtyPercent > 3 && sawPair){
    			randPick = Random.Range(0,cardNumArray.Length);
    			WhichCard = cardNumArray[randPick];
        		CanPickCard = true;
        		sawPair = false;
        		print ("found pair but lost roll");
    		}

        }
    	if (howManyFlipped == 1){
			
			if (sawPair){
				print ("trying pair 2");
    			for (var i = 0;i < cardNumArray.Length; i ++){
    				if (CardsArray[i].x == matchWinHandler.CardOne.x && CardsArray[i].y == matchWinHandler.CardOne.y && CardsArray[i].w == 1){
    					randPick = i;
    					sawPair = true;
    					print ("saw pair 2");
    				}
    			}
			}
    		if (!sawPair){
    			randPick = Random.Range(0,cardNumArray.Length);
    			print("random 2");
    		}
    		sawPair = false;
    		WhichCard = cardNumArray[randPick];
        	CanPickCard = true;
        }
        
        howManyFlipped += 1;
        
        var cardNumArrayJSb : Array = cardNumArray;
		cardNumArrayJSb.RemoveAt(randPick);
		cardNumArray = cardNumArrayJSb;
		
		var CardsArrayJSb : Array = CardsArray;
		CardsArrayJSb.RemoveAt(randPick);
		CardsArray = CardsArrayJSb;
		
		//this helps us not pick the same first card twice and resets it to original after the second card
		if (howManyFlipped == 2){
			howManyFlipped = 0;
			cardNumArray = cardNumArray2;
			CardsArray = CardsArray2;
		}


}

function NewFlipMyrtle(){
    	if (howManyFlipped == 0){
    		var sawCard : boolean = false;
    		for (var j = 0; j < cardNumArray.Length; j++){
    			if (CardsArray[j].w == 1 && !sawCard){
    				for (var k =0; k < cardNumArray.Length; k++){
    					if (CardsArray[k].x == CardsArray[j].x && CardsArray[k].y == CardsArray[j].y && CardsArray[k].w ==1 && k != j){
    						randPick = j;
    						secondCard = k;
    						WhichCard = cardNumArray[j];
    						CanPickCard = true;
    						sawCard = true;
    						print("saw pair");
    						sawPair = true;
    					}
    				}
    			}
    		}
    		if (!sawCard){
    			randPick = Random.Range(0,cardNumArray.Length);
    			WhichCard = cardNumArray[randPick];
        		CanPickCard = true;
        		print ("random");
        	}
    		var seventyFivePercent = Random.Range(1,101);//you will never get the last number
    		if (seventyFivePercent > 75 && sawPair){
    			randPick = Random.Range(0,cardNumArray.Length);
    			WhichCard = cardNumArray[randPick];
        		CanPickCard = true;
        		sawPair = false;
        		print ("found pair but lost roll MYRTLE");
    		}

        }
    	if (howManyFlipped == 1){
			
			if (sawPair){
				print ("trying pair 2");
    			for (var i = 0;i < cardNumArray.Length; i ++){
    				if (CardsArray[i].x == matchWinHandler.CardOne.x && CardsArray[i].y == matchWinHandler.CardOne.y && CardsArray[i].w == 1){
    					randPick = i;
    					sawPair = true;
    					print ("saw pair 2");
    				}
    			}
			}
    		if (!sawPair){
    			randPick = Random.Range(0,cardNumArray.Length);
    			print("random 2");
    		}
    		sawPair = false;
    		WhichCard = cardNumArray[randPick];
        	CanPickCard = true;
        }
        
        howManyFlipped += 1;
        
        var cardNumArrayJSb : Array = cardNumArray;
		cardNumArrayJSb.RemoveAt(randPick);
		cardNumArray = cardNumArrayJSb;
		
		var CardsArrayJSb : Array = CardsArray;
		CardsArrayJSb.RemoveAt(randPick);
		CardsArray = CardsArrayJSb;
		
		//this helps us not pick the same first card twice and resets it to original after the second card
		if (howManyFlipped == 2){
			howManyFlipped = 0;
			cardNumArray = cardNumArray2;
			CardsArray = CardsArray2;
		}

}




