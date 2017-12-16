#pragma strict

var titleSong : AudioSource;
var fasterSong : AudioSource;
var slowJam : AudioSource;
var medJam : AudioSource;
var winJam : AudioSource;

static var SlowJamGo : boolean = false;
static var MediumJamGo : boolean = false;
static var FastJamGo : boolean = false; 
static var TitleJamGo : boolean = false;
static var WinJamGo : boolean = false;

function Start () {

//THESE CAN ALL OVERLAP ETC, YAY.  JUST PUT AN AUDIOSOURCE ON THE OBJECT (FROM THE DROPDOWN MENU) AND UNCHECK PLAY ON AWAKE
	//titleSong.Play();
	//fasterSong.Play();
	//audio.Stop();
	//audio.loop = true;
	//titleSong.Stop();
	
	GetComponent.<AudioSource>().loop = true;
	titleSong.loop = true;
	fasterSong.loop = true;
	slowJam.loop = true;
	medJam.loop = true;
	winJam.loop = true;

}

function Update () {

	if (TitleJamGo){
		TitleJamGo = false;
		StopAllSounds();
		titleSong.Play();
	}

	if (SlowJamGo){
		SlowJamGo = false;
		StopAllSounds();
		slowJam.Play();
	}

	if (FastJamGo){
		FastJamGo = false;
		StopAllSounds();
		fasterSong.Play();
	}

	if (MediumJamGo){
		MediumJamGo = false;
		StopAllSounds();
		medJam.Play();
	}
	
	if (WinJamGo){
		WinJamGo = false;
		StopAllSounds();
		winJam.Play();
	}

}

function StopAllSounds(){
	titleSong.Stop();
	fasterSong.Stop();
	slowJam.Stop();
	medJam.Stop();
	winJam.Stop();
}