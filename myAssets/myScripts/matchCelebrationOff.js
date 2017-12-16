#pragma strict

private var counter : float = 0;
var timeTillEnd : float = 1;

function Start (){
	//matchWinHandler.MatchCelebration = false;
}

function Update () {

	counter += 1 * Time.deltaTime;
	
	if (counter > timeTillEnd){
		matchWinHandler.MatchCelebration = false;
		Destroy(gameObject);
		//print ("heck yeah");
		//print ("I'm Attached to " + this.gameObject);//ATTACHED TO PLUS BANANAS OH GOD WHY
	}

}