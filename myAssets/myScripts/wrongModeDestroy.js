#pragma strict

var you: boolean = false;
var moe : boolean = false;
var myrtle : boolean = false;

function Start () {

	if (moe && matchWinHandler.Mode != 2){
		Destroy(gameObject);
	}
	
	if (myrtle && matchWinHandler.Mode != 3){
		Destroy(gameObject);
	}

}

function Update () {

}