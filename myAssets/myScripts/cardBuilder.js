#pragma strict

var cardPrefab : Transform;

var cardArray : Vector3[] = new Vector3[20];
var cardArrayRandom : Vector3[] = new Vector3[20];
var cardArrayRandom2 : Vector3[] = new Vector3[20];//THIS IS THE ONE WE USE

var randomNum : int[] = new int[4];


private var cardPos : Vector3 = new Vector3(-4.05,1.9,8.1);
private var secondRowPos : Vector3 = new Vector3(-4.05,0,8.1);
private var thirdRowPos : Vector3 = new Vector3(-4.05,-1.9,8.1);
private var xDifference : float = 1.35;

function Start(){

	cardArrayRandom = new Vector3[20];
	
	cardArrayRandom2 = new Vector3[20];
	
	cardArray = new Vector3[10];

	SetArraySpots();//original spots - set these depending on what animal is picked

	SetRandCardArray();//randomize
	
	matchComputerPick.CardsArray = new Vector4[20];
	
	matchComputerPick.CardsArray2 = new Vector4[20];

	MakeCards();//spit cards out

	
}//end of start


function Update () {


	

	for (var i = 0; i < 5; i++){	
		if (randomNum.Length > 0){
			var randomPick = Random.Range(0,randomNum.Length);
		//	print(randomNum[randomPick]);
			var randomNumJS : Array = randomNum;
			randomNumJS.RemoveAt(randomPick);
			randomNum = randomNumJS;
		}
	}

}//end of update

function SetRandCardArray(){
/*
	//gets a random from total cards and sets it to a random from the 20 display cards, cardArrayRandom2
	//is set to the same thing.  the reason we have a second array being set to the same thing is that 
	//the randomizing process is destroying the first array to nothing and we wouldn't be able to reload
	//from it in MakeCards()
	for (var i = 0; i < 10; i++){//< than 10 since we're dealing with an array that starts at 0?
		var randomPickCards = Random.Range(0,cardArray.Length);//get a rand from total cards
		var randomPick20 = Random.Range(0,cardArrayRandom.Length);//get a rand from 20 cards
		cardArrayRandom[randomPick20] = cardArray[randomPickCards];//set the rand20 to the rand from total cards 
		cardArrayRandom2[randomPick20] = cardArray[randomPickCards];//set the rand20-2 to the same
		//print(cardArrayRandom2[randomPick20]);
		var cardArrayRandomJS : Array = cardArrayRandom;//make js array, remove part, convert back
		cardArrayRandomJS.RemoveAt(randomPick20);
		cardArrayRandom = cardArrayRandomJS;
		randomPick20 = Random.Range(0,cardArrayRandom.Length);//get a new rand from 20 cards
		cardArrayRandom[randomPick20] = cardArray[randomPickCards];//set the new rand20 to the same card from all
		cardArrayRandom2[randomPick20] = cardArray[randomPickCards];//set the rand20-2 to the same
		//print(cardArrayRandom2[randomPick20]);
		cardArrayRandomJS = cardArrayRandom;//reset js array, remove part, and convert back again
		cardArrayRandomJS.RemoveAt(randomPick20);
		cardArrayRandom = cardArrayRandomJS;
		var cardArrayJS : Array = cardArray;//make js array of total card array, remove part, convert back
		cardArrayJS.RemoveAt(randomPickCards);
		cardArray = cardArrayJS;
		
	}
	
	for(var n =0; n < 20; n++){
		print(cardArrayRandom2[n]);
	}
	*/
	
	for (var n = 0; n < 20; n +=2){
		var randomPickCards = Random.Range(0,cardArray.Length);
		cardArrayRandom2[n] = cardArray[randomPickCards];
		cardArrayRandom2[n+1] = cardArray[randomPickCards];
		if (Globals.FlipFlopFun){
			cardArrayRandom2[n+1].z = 1;
		}
		
		var cardArrayJS : Array = cardArray;
		cardArrayJS.RemoveAt(randomPickCards);
		cardArray = cardArrayJS;
	}
	
	//cardArrayRandom2 = cardArray;
	
	//Fisher-Yates shuffle
	for (var i = cardArrayRandom2.Length - 1; i > 0; i--) {
        var r = Random.Range(0,i);
        var tmp = cardArrayRandom2[i];
        cardArrayRandom2[i] = cardArrayRandom2[r];
        cardArrayRandom2[r] = tmp;
    }
	
}

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
	/*cardArray[10] = Vector3(6,1,0);
	cardArray[11] = Vector3(6,2,0);
	cardArray[12] = Vector3(7,1,0);
	cardArray[13] = Vector3(7,2,0);
	cardArray[14] = Vector3(8,1,0);
	cardArray[15] = Vector3(8,2,0);
	cardArray[16] = Vector3(9,1,0);
	cardArray[17] = Vector3(9,2,0);
	cardArray[18] = Vector3(10,1,0);
	cardArray[19] = Vector3(10,2,0);*/
	
	randomNum[0] = 5;
	randomNum[1] = 7;
	randomNum[2] = 9;
	randomNum[3] = 2;
	
	
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

function MakeCards(){

	for(var n = 0; n < 21; n++)//THIS IS 21 BECAUSE WE HAVE THE EXTRA QUESTION CARD!
	{
		var cardObj = Instantiate (cardPrefab,cardPos,Quaternion.Euler(0,90,180));//y at 180 shows card, 0 shows back
		var cardScript : card = cardObj.GetComponent(card);
		var cardClickScript : matchCardClick = cardObj.GetComponent(matchCardClick);
		cardScript.timeToVisible = n * .05;
		
		if (n != 10){
			if (n > 10){
				cardScript.myX = cardArrayRandom2[n-1].x;
				cardScript.myY = cardArrayRandom2[n-1].y;
				//cardScript.myZ = cardArrayRandom2[n-1].z;
				if (cardArrayRandom2[n-1].z == 1){
					cardArrayRandom2[n-1].z = 0;
					cardScript.myFlip = true;
				}
				cardClickScript.whichCard = n-1;
				
				matchComputerPick.CardsArray[n-1].x = cardArrayRandom2[n-1].x; 
				matchComputerPick.CardsArray[n-1].y = cardArrayRandom2[n-1].y;
				matchComputerPick.CardsArray[n-1].z = n-1; 

			}
			if (n < 10){
				cardScript.myX = cardArrayRandom2[n].x;
				cardScript.myY = cardArrayRandom2[n].y;
				//cardScript.myZ = cardArrayRandom2[n].z;
				if (cardArrayRandom2[n].z == 1){
					cardArrayRandom2[n].z = 0;
					cardScript.myFlip = true;
				}
				cardClickScript.whichCard = n;
				
				matchComputerPick.CardsArray[n].x = cardArrayRandom2[n].x; 
				matchComputerPick.CardsArray[n].y = cardArrayRandom2[n].y;
				matchComputerPick.CardsArray[n].z = n;
			}
		}
		
		
		
		//set question card
		if (n == 10){
			cardScript.myX = 0;
			cardScript.myY = 0;
			cardScript.isQuestion = true;
			cardObj.transform.rotation = Quaternion.Euler(0,180,180);
			cardClickScript.isQuestion = true;
			
		}
		//set question card
		
		
		//SET CARD POSITIONS
		cardPos.x += xDifference;
		if (n == 6){
			cardPos = secondRowPos;
		}
		if (n == 13){
			cardPos = thirdRowPos;
		}
		//SET CARD POSITIONS

	}

}




