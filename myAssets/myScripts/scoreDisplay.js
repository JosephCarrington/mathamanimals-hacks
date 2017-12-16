#pragma strict

var playerScore : boolean = true;
var comScore : boolean = false;
private var tm : TextMesh;

private var count : float = 0;


private var title = ""; 

private var updated : boolean = false;


function Start(){
	 tm = gameObject.GetComponent(TextMesh);

	if (playerScore){
		tm.text = title + matchWinHandler.bananas;
	}
	
	if (comScore){
		tm.text = title + matchWinHandler.bananasComputer;
	}
}

function Update(){

	
	if (!updated){
		count += 1 * Time.deltaTime;
		if (count > 1){
			count = 0;
			UpdateScore();
			updated = true;
			matchWinHandler.UpdateScores = false;
		}
	}
}


function UpdateScore(){
	if (playerScore){
		tm.text = title + matchWinHandler.bananas;
	}
	
	if (comScore){
		tm.text = title + matchWinHandler.bananasComputer;
	}
}


