#pragma strict

static var soundOn : boolean = true;

function Start () {

}

function Update () {



}

static function SoundUpdate(){

	if (soundOn){
		AudioListener.volume = 1;
	}else{
		AudioListener.volume = 0;
	}
	
//	print ("ugh");
}