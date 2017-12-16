#pragma strict

private var on : boolean = false;
var onObj : Transform;
var offObj : Transform;
var flipFlopExplObj : Transform;

function Start(){
	Globals.FlipFlopFun = false;
	on = false;
}


function OnMouseUp () {
	
	on = !on;
	
	if (on){
		onObj.GetComponent.<Renderer>().enabled = true;
		offObj.GetComponent.<Renderer>().enabled = false;
		Globals.FlipFlopFun = true;
		Instantiate(flipFlopExplObj,Vector3.zero,Quaternion.identity);
	}
	
	if (!on){
		onObj.GetComponent.<Renderer>().enabled = false;
		offObj.GetComponent.<Renderer>().enabled = true;
		Globals.FlipFlopFun = false;
	}
	
}