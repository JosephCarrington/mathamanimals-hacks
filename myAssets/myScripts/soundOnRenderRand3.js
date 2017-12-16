#pragma strict

var matchingGame : boolean = false;



var sound1 : Transform;
var sound2 : Transform;
var sound3 : Transform;
var sounda : Transform;
var soundb : Transform;
var soundc : Transform;
var previousRenderState : boolean = false;
var canDoStuff : boolean = false;
var canDoStuffCounter : float = 0;
var prevAlpha : float = 0;

function Start () {

}

function Update () {

	if (!canDoStuff){
		canDoStuffCounter += 1 * Time.deltaTime;
	}
	if (canDoStuffCounter > 1){
		canDoStuff = true;
	}


	if (!previousRenderState && GetComponent.<Renderer>().enabled && canDoStuff){
		var randomNum = Random.Range(1,4);
		if (matchWinHandler.Mode == 1){
			if (randomNum == 1){
				Instantiate(sound1,transform.position,Quaternion.identity);
			}
			if (randomNum == 2){
				Instantiate(sound2,transform.position,Quaternion.identity);
			}
			if (randomNum == 3){
				Instantiate(sound3,transform.position,Quaternion.identity);
			}
		}
		if (matchWinHandler.Mode ==2 || matchWinHandler.Mode == 3){
			if (randomNum == 1){
				Instantiate(sounda,transform.position,Quaternion.identity);
			}
			if (randomNum == 2){
				Instantiate(soundb,transform.position,Quaternion.identity);
			}
			if (randomNum == 3){
				Instantiate(soundc,transform.position,Quaternion.identity);
			}
		}
	}
	
	if (matchingGame && canDoStuff && (GetComponent.<Renderer>().material.color.a > 0 && prevAlpha <= 0)){
		var randomNum2 = Random.Range(1,4);
		if (randomNum2 == 1){
			Instantiate(sound1,transform.position,Quaternion.identity);
		}
		if (randomNum2 == 2){
			Instantiate(sound2,transform.position,Quaternion.identity);
		}
		if (randomNum2 == 3){
			Instantiate(sound3,transform.position,Quaternion.identity);
		}
	}

	prevAlpha = GetComponent.<Renderer>().material.color.a;
	previousRenderState = GetComponent.<Renderer>().enabled;
}