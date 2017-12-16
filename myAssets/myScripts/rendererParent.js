#pragma strict


function Update () {

	GetComponent.<Renderer>().enabled = transform.parent.gameObject.GetComponent.<Renderer>().enabled;

}