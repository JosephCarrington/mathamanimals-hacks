#pragma strict

var candleHandlerScript : candleHandler;

function Update () {

	var tm : TextMesh = gameObject.GetComponent(TextMesh);

	var title = ""; 

	tm.text = title + (candleHandlerScript.currentCard.y);
	
	if (clickStick.canCelebrate == true/* || clickStick.canAntiCelebrate == true*/){
		GetComponent.<Renderer>().enabled = false;
	}else{
		GetComponent.<Renderer>().enabled = true;
	}

}