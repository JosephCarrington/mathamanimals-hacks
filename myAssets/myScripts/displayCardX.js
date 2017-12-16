#pragma strict

var candleHandlerScript : candleHandler;

function Update () {

	var tm : TextMesh = gameObject.GetComponent(TextMesh);

	var title = ""; 

	tm.text = title + (candleHandlerScript.currentCard.x);

}