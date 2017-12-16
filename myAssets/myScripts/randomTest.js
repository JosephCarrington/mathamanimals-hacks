#pragma strict

var randomNum : int = 0;

function Start () {

}

function Update () {

	if (Input.GetKeyDown("space")){
		randomNum = Random.Range(1,3);
		print (randomNum);
	}

}