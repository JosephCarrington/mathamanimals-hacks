#pragma strict
var ifXes : boolean = false;

var myParticle : Transform;

var timeTillDeath : float = 1;
private var deathCounter : float = 0;

var doNotDestroy : boolean = false;

private var canDoParticle : boolean = true;

var banana1 : Transform;
var banana2 : Transform;

var bananasNumThing : boolean = false;

function Start(){
	if (bananasNumThing){
		matchWinHandler.BananasNumPlayerExists = true;
	}
	
	if (ifXes){
		clickStick.xExist = true;
	}
}

function Update () {

	deathCounter += 1 * Time.deltaTime;
	
	if (deathCounter > timeTillDeath){
		if (canDoParticle){
			canDoParticle = false;
			Instantiate(myParticle,transform.position,Quaternion.identity);
		}
		if (!doNotDestroy){
			Destroy(gameObject);
			if (ifXes){
				clickStick.xExist = false;
			}
			if (bananasNumThing){
				matchWinHandler.BananasNumPlayerExists = false;
			}
		}
		if (doNotDestroy){
			if (banana1 != null && banana2 != null){
				banana1.GetComponent.<Renderer>().enabled = false;
				banana2.GetComponent.<Renderer>().enabled = false;
			}
		}
	}

}