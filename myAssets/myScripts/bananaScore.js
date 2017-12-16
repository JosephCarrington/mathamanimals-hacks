#pragma strict

var gameScript : gameScreen;
var bananaScore : int = 0;

function Start(){

	bananaScore = gameScript.bananas;
	
}

function Update () {

	var tm : TextMesh = gameObject.GetComponent(TextMesh);

		var title = ""; 
		
		

		tm.text = title + bananaScore;


}