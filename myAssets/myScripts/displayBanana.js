#pragma strict

var myNum : int = 1;
var candleHandlerScript : candleHandler;
var myNumGraphic : Transform;

function Start () {

}

function Update () {







	if (candleHandlerScript.currentCard.x >= myNum){
		GetComponent.<Renderer>().enabled = true;
	}else{
		GetComponent.<Renderer>().enabled = false;
	}
	
	if (candleHandlerScript.currentCard.x == myNum){
		myNumGraphic.GetComponent.<Renderer>().enabled = true;
	}else{
		myNumGraphic.GetComponent.<Renderer>().enabled = false;
	}
	
	if (matchWinHandler.Mode == 3){
		GetComponent.<Renderer>().enabled = false;
		myNumGraphic.GetComponent.<Renderer>().enabled = false;
	}
	
	
	
	

	if (clickStick.canCelebrate == true || clickStick.canAntiCelebrate == true){
		GetComponent.<Renderer>().enabled = false;
		myNumGraphic.GetComponent.<Renderer>().enabled = false;
	}
}