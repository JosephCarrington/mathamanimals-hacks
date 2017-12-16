#pragma strict


var circlePrefab : Transform;
var starsPrefab : Transform;
var deleteCard : Transform;

var scaleOriginal : Vector3 = Vector3(1,1,1);
var scaleNew : Vector3 = Vector3(2,2,2);
var scalePulse : float = 0;
var scalePulseSpeed : float = .5;
private var scalePulseCount : float = 0;
private var scaleUp : boolean = true;
private var originalPos : Vector3;

var alwaysPulse : boolean = false;

var scriptEnabled : boolean = true;

function Start(){
	originalPos = transform.position;
}


function Update () {

	if (scaleUp && scalePulse != 0){
		scalePulseCount += scalePulseSpeed * Time.deltaTime;
		if (scalePulseCount > scalePulse){
			scaleUp = false;
		}
	}
	if (!scaleUp && scalePulse != 0){
		scalePulseCount -= scalePulseSpeed * Time.deltaTime;
		if (scalePulseCount < -scalePulse){
			scaleUp = true;
		}
	}
	
	if (alwaysPulse){
		AlwaysPulseFunction();
	}
	

}

function OnMouseOver () {
if (scriptEnabled){
   transform.localScale = Vector3(scaleNew.x + scalePulseCount,scaleNew.y + scalePulseCount,scaleNew.z + scalePulseCount);
   transform.position.z = originalPos.z -.1;
   //Instantiate (circlePrefab,transform.position,Quaternion.identity);
   //Instantiate (starsPrefab,transform.position,Quaternion.identity);
}
}

function OnMouseExit () {
if (scriptEnabled){
   transform.localScale = scaleOriginal;
   transform.position.z = originalPos.z;
}
   //Instantiate(deleteCard, Vector3(transform.position.x,transform.position.y,transform.position.z - .2),Quaternion.identity);
   //Instantiate (circlePrefab,Vector3(transform.position.x,transform.position.y,transform.position.z - .2),Quaternion.identity);
   //Instantiate (starsPrefab,Vector3(transform.position.x,transform.position.y,transform.position.z - .2),Quaternion.identity);
}


function AlwaysPulseFunction(){

if (scriptEnabled){
   transform.localScale = Vector3(scaleNew.x + scalePulseCount,scaleNew.y + scalePulseCount,scaleNew.z + scalePulseCount);
   transform.position.z = originalPos.z -.1;
   //Instantiate (circlePrefab,transform.position,Quaternion.identity);
   //Instantiate (starsPrefab,transform.position,Quaternion.identity);
}

}