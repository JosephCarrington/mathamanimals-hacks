#pragma strict

var soundClickObj : Transform;

var changeTo : int = 0;
var numClickScript : numClickUp;
var hasClicked : boolean = false;
var circlePrefab : Transform;
var clickStickScript : clickStick;
var candleHandlerScript : candleHandler;
var myNumGraphic : Transform;
var myColorScript : colorScript2;

var howOld : boolean = false;

function Start(){
	if (matchWinHandler.Mode == 3){
		myColorScript = gameObject.GetComponent(colorScript2);
		myColorScript.setBlack  = false;
		myColorScript.setBlue  = false;
		myColorScript.setBrown  = true;
		myColorScript.setGray = false;
		myColorScript.setGreen  = false;
		myColorScript.setOrange  = false;
		myColorScript.setPink  = false;
		myColorScript.setPurple = false;
		myColorScript.setRed = false;
		myColorScript.setYellow = false; 
	}
}

function Update () {
	

	if (howOld){

	var tm : TextMesh = myNumGraphic.gameObject.GetComponent(TextMesh);

	var title = ""; 

	tm.text = title + (candleHandlerScript.currentCard.y * changeTo);
	
	}//end of howOld

}//end of update

function OnMouseDown(){

	if (!clickStickScript.canCelebrate &&  !clickStickScript.canAntiCelebrate){
		if (soundClickObj != null){
			Instantiate(soundClickObj,transform.position,Quaternion.identity);
		}
		if (!howOld){numClickScript.myCurrentNum = changeTo;}
		if (howOld){numClickScript.myCurrentNum = (candleHandlerScript.currentCard.y * changeTo);}
		hasClicked = true;
		Instantiate(circlePrefab ,transform.position,Quaternion.identity);
		clickStickScript.pulled = true;
	}
}

function OnMouseOver(){
	if (!clickStickScript.pulled){
		//if (!howOld){numClickScript.myCurrentNum = changeTo;}
		//if (howOld){numClickScript.myCurrentNum = (candleHandlerScript.currentCard.y * changeTo);}
	}
}

function OnMouseExit(){
	if (!hasClicked){
		//numClickScript.myCurrentNum = 0;
	}
	hasClicked = false;
	
}
