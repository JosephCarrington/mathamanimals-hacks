#pragma strict

function Start () {

}

function Update () {

	if (Globals.KillCards){
		Destroy(gameObject);
	}

}