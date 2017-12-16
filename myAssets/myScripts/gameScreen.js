#pragma strict

var bananas : int = 0;
var bananasComputer : int = 0;
var bounceBanana : Transform;
var bounceBananaRed : Transform;
var leafPrefab : Transform;
var spawnObject = 1;//this is for intantiating the right GAME screen, the back arrow in the game screen looks for this

private var spawnCounter : float;
private var bananaNum : int;
private var bananaNumComputer : int;
private var bananasSet : boolean = false;

function Start(){
	musicHandler.WinJamGo = true;
}

function Update () {

	if (!bananasSet){
		bananasSet = true;
		bananaNum = bananas;
		bananaNumComputer = bananasComputer;
	}


	spawnCounter += 1 * Time.deltaTime;
	
	if (spawnCounter > .5){
		
		if (bananaNum >=1 ){
			var randomNum = Random.Range(-4.4,4.4);
			Instantiate (bounceBanana, Vector3(randomNum,2.36,7.3),Quaternion.Euler(0,180,180));
			Instantiate(leafPrefab, Vector3(randomNum,2.36,7.3), Quaternion.identity);
			bananaNum -=1;
		}
		
		if (bananaNumComputer >= 1){
			randomNum = Random.Range(-4.4,4.4);
			Instantiate (bounceBananaRed, Vector3(randomNum,2.36,7.3),Quaternion.Euler(0,180,180));
			Instantiate(leafPrefab, Vector3(randomNum,2.36,7.3), Quaternion.identity);
			bananaNumComputer -=1;
		}
		
		spawnCounter = 0;
		
		

	}




}