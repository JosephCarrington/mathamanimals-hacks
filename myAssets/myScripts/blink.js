#pragma strict

var timer : float = 0;
var timerSpeed : float = 1;


function Update () {

	timer += timerSpeed * Time.deltaTime;
	
	if (timer > 2){
		timer = 0;
	}
	
	if (timer < 1 ){
		GetComponent.<Renderer>().enabled = true;
	}
	if (timer > 1 ){
		GetComponent.<Renderer>().enabled = false;
	}

}