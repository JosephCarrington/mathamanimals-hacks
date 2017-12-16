#pragma strict

var myNum : int = 10;

var myNumCounter : float = 0;

var clickStickScript : clickStick;

var numClickUpScript : numClickUp;

var colorScript : colorScript2;

var xBlinkers : Transform;

private var mode2Count : int = 10;

private var mode3Count : int = 7;

private var comPointDelayStart : boolean = false;
private var comPointDelayCount : float = 0;

var plusBananas : Transform;
var bananasNumMoe : Transform;
var bananasNumMyrtle : Transform;

private var canMakeBananas : boolean = true;


function Start () {

	if (matchWinHandler.Mode == 1){
		//renderer.enabled = false;
	}else{
		GetComponent.<Renderer>().enabled = true;
	}
	
	if (matchWinHandler.Mode == 2){
		myNum = mode2Count;
	}
	if (matchWinHandler.Mode == 3){
		myNum = mode3Count;
	}

}

function Update () {

	if (clickStick.xExist == true){
		GetComponent.<Renderer>().enabled = false;
	}else{
		GetComponent.<Renderer>().enabled = true;
	}


	CounterStuff();
	
	if (comPointDelayStart){
		ComPointDelay();
	}
	


	var tm : TextMesh = gameObject.GetComponent(TextMesh);

	var title = ""; 

	tm.text = title + myNum;
	
	if (matchWinHandler.Mode == 1){
		tm.text = title + "?";
	}

}

function CounterStuff (){
	if (matchWinHandler.Mode != 1){
		myNumCounter += 1 * Time.deltaTime;
	}
	
	if (myNumCounter >= 1){
		myNumCounter = 0;
		myNum -= 1;
		
		if (myNum < 0){
			myNum = 10;
			comPointDelayStart = true;
			
			Instantiate (xBlinkers,Vector3.zero,Quaternion.identity);
			clickStickScript.pulled = true;
			numClickUpScript.myCurrentNum = 0;
/*			
			if (matchWinHandler.Mode == 2){
				Instantiate(bananasNumMoe,transform.position,Quaternion.identity);
			}
			if (matchWinHandler.Mode == 3){
				Instantiate(bananasNumMyrtle,transform.position,Quaternion.identity);
			}
			*/
/*			
			var bananas1 = Instantiate(plusBananas,Vector3(-1,0,8),Quaternion.identity);
			var bananas2 = Instantiate(plusBananas,Vector3(1,0,8),Quaternion.identity);
			var plusBananasScript : plusBananasMove = bananas1.GetComponent(plusBananasMove);
			var plusBananasScript2 : plusBananasMove = bananas2.GetComponent(plusBananasMove);
			plusBananasScript.human = false;
			plusBananasScript2.human = false;
			*/
		}
		

	}
	
	if (candleHandler.ResetCountdown){
		candleHandler.ResetCountdown = false;
		if (matchWinHandler.Mode == 2){myNum = mode2Count; myNumCounter = 0;}
		if (matchWinHandler.Mode == 3){myNum = mode3Count; myNumCounter = 0;}
	}
	
	if (myNum == 0 ){
		colorScript.rainBow = false;
		colorScript.setRed = true;
	}else{
		colorScript.rainBow = true;
		colorScript.setRed = false;
	}
}

function ComPointDelay(){

	comPointDelayCount += 1 * Time.deltaTime;
	
	if (comPointDelayCount > 3 && canMakeBananas){
/*		if (matchWinHandler.Mode == 2){
			Instantiate(bananasNumMoe,transform.position,Quaternion.identity);
		}
		if (matchWinHandler.Mode == 3){
			Instantiate(bananasNumMyrtle,transform.position,Quaternion.identity);
		}
		var bananas1 = Instantiate(plusBananas,Vector3(-1,0,8),Quaternion.identity);
		var bananas2 = Instantiate(plusBananas,Vector3(1,0,8),Quaternion.identity);
		var plusBananasScript : plusBananasMove = bananas1.GetComponent(plusBananasMove);
		var plusBananasScript2 : plusBananasMove = bananas2.GetComponent(plusBananasMove);
		plusBananasScript.human = false;
		plusBananasScript2.human = false;
*/		
		canMakeBananas = false;
	}
	
	
	if (comPointDelayCount > 4){
		comPointDelayCount = 0;
		comPointDelayStart = false;
		//matchWinHandler.bananasComputer += 4;
		canMakeBananas = true;
	}
	
}