#pragma strict

var animScript : animatedTexture;

var myrtleRight : boolean = false;
var myrtleWrong : boolean = false;
var moeRight : boolean = false;
var moeWrong : boolean = false;

var leafParticles : Transform;

private var previousStaticMyrtleRight : boolean = false;
private var previousStaticMyrtleWrong : boolean = false;
private var previousStaticMoeRight : boolean = false;
private var previousStaticMoeWrong : boolean = false;

private var previousRenderState : boolean = false;

function Start () {

}

function Update () {

	if (candleHandler.MyrtleRight && myrtleRight){
		if (candleHandler.MyrtleRight && !previousStaticMyrtleRight){
			Instantiate(leafParticles, transform.position,Quaternion.identity);
		}
		GetComponent.<Renderer>().enabled = true;
	}
	
	if (candleHandler.MyrtleWrong && myrtleWrong){
		if (candleHandler.MoeWrong && !previousStaticMoeWrong){
			Instantiate(leafParticles, transform.position,Quaternion.identity);
		}
		GetComponent.<Renderer>().enabled = true;
	}
	
	if (candleHandler.MoeRight && moeRight){
		if (candleHandler.MoeRight && !previousStaticMoeRight){
			Instantiate(leafParticles, transform.position,Quaternion.identity);
		}
		GetComponent.<Renderer>().enabled = true;
	}
	
	if (candleHandler.MoeWrong && moeWrong){
		if (candleHandler.MoeWrong && !previousStaticMoeWrong){
			Instantiate(leafParticles, transform.position,Quaternion.identity);
		}
		GetComponent.<Renderer>().enabled = true;
	}
	
	
	if (!candleHandler.MoeWrong && previousStaticMoeWrong){
		Instantiate(leafParticles, transform.position,Quaternion.identity);
	}
	if (!candleHandler.MoeRight && previousStaticMoeRight){
		Instantiate(leafParticles, transform.position,Quaternion.identity);
	}
	if (!candleHandler.MoeWrong && previousStaticMoeWrong){
		Instantiate(leafParticles, transform.position,Quaternion.identity);
	}
	if (!candleHandler.MyrtleRight && previousStaticMyrtleRight){
		Instantiate(leafParticles, transform.position,Quaternion.identity);
	}
	
	
	
	if (!candleHandler.MyrtleRight && myrtleRight){
		GetComponent.<Renderer>().enabled = false;
	}
	
	if (!candleHandler.MyrtleWrong && myrtleWrong){
		GetComponent.<Renderer>().enabled = false;
	}
	
	if (!candleHandler.MoeRight && moeRight){
		GetComponent.<Renderer>().enabled = false;
	}
	
	if (!candleHandler.MoeWrong && moeWrong){
		GetComponent.<Renderer>().enabled = false;
	}
	
	
	//makes counter reset after animal disappears
	if (previousRenderState == true && GetComponent.<Renderer>().enabled == false){
		candleHandler.ResetCountdown = true;
	}
	
	if (GetComponent.<Renderer>().enabled == true){
		candleHandler.ResetCountdown = true;
	}
	
	

previousStaticMyrtleRight = candleHandler.MyrtleRight;
previousStaticMyrtleWrong = candleHandler.MyrtleWrong;
previousStaticMoeRight= candleHandler.MoeRight;
previousStaticMoeWrong = candleHandler.MoeWrong;
previousRenderState = GetComponent.<Renderer>().enabled;
}