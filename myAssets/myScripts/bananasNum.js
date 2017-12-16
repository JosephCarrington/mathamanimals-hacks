#pragma strict

private var leftPos : Vector3 = Vector3(-3.361735,1.758891,7.400196);
private var rightPos : Vector3 = Vector3(3.761735,1.758891,7.400196);

var human : boolean = true;

function Start () {

	if (human){
		transform.position = leftPos;
	}else{
		transform.position = rightPos;
	}

}

function Update () {

}