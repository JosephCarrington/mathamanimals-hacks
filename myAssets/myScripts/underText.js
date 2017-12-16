#pragma strict

var myClickUpScript : numClickUp;
var numClickUp : Transform;
var myCurrentNum : int;


function Update () {

		transform.localScale = numClickUp.localScale;	


		var tm : TextMesh = gameObject.GetComponent(TextMesh);
		var title = ""; 
		var question = "?";
		myCurrentNum = myClickUpScript.myCurrentNum;
	
		if (myClickUpScript.myCurrentNum == 0){
			tm.text = title + question;
		}
		
		if (myClickUpScript.myCurrentNum != 0 ){
			tm.text = title + myClickUpScript.myCurrentNum;
		}

}