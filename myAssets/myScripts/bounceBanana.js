#pragma strict

var bananaSound : Transform;

var canMakeSound : boolean = true;
var soundCounter : float = 0;


function OnMouseOver () {
	GetComponent.<Rigidbody>().AddForce(0,Random.Range(0,200),0);
	GetComponent.<Rigidbody>().AddForce(Random.Range(-100,100),0,0);
	if (canMakeSound){
		if (bananaSound != null){
			Instantiate(bananaSound,transform.position,Quaternion.identity);
		}
		canMakeSound = false;
	}
	

}

function Update(){
	if (!canMakeSound){
		soundCounter += 1 * Time.deltaTime;
		if (soundCounter > .5){
			soundCounter = 0;
			canMakeSound = true;
		}
	}
}

function OnCollisionEnter(collision : Collision) {
	if (collision.gameObject.tag == "killBananas"){
    	Destroy (gameObject);
    }
}