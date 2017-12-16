#pragma strict

var timeToFadeIn : float = 1;
var fadeSpeed : float = 1;
private var timeToFadeInCounter : float = 0;
private var beginFade = false;


function Start(){
	GetComponent.<Renderer>().material.color.a = 0;
}


function Update () {

	timeToFadeInCounter += 1 * Time.deltaTime;
	
	if (timeToFadeInCounter > timeToFadeIn){
		beginFade = true;
	}
	
	if (beginFade){
	
		GetComponent.<Renderer>().material.color.a += 1 * fadeSpeed * Time.deltaTime;
	}

}