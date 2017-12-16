#pragma strict
var animalName : AudioClip;
var animalPickerMakeSound : boolean = false;
var clickBlocker : Transform;
var leafParticles : Transform;

var clickSoundObj : Transform;

var killCards : boolean = false;
var spawnObject : int = 1;
var objectToSpawn : Transform;
var objectToSpawn2 : Transform;
var objectToSpawn3 : Transform;
var gameScreenScript : gameScreen;
var objectToDestroy : Transform;

var objectToSpawnTrans : Vector3;

var difficultyNum : int = 0;

var whichAnimal : int = 0;

function Start(){
	if (gameScreenScript != null){
		spawnObject = gameScreenScript.spawnObject;
	}
}

function OnMouseDown () {
	if (animalPickerMakeSound){
		if (clickBlocker != null){
			clickBlocker.GetComponent.<Collider>().isTrigger = false;
			clickBlocker.transform.localPosition = Vector3(0,0,6);
		}
		if (leafParticles != null){
			Instantiate(leafParticles,transform.position,Quaternion.identity);
		}
	
	}
	
	


	if (animalName != null && animalPickerMakeSound){
		AudioSource.PlayClipAtPoint(animalName, Camera.main.transform.position);
	}
	
	if (!animalPickerMakeSound){


		if (clickSoundObj != null){
			Instantiate (clickSoundObj,transform.position,Quaternion.identity);
		}
		Destroy(objectToDestroy.gameObject);
		Time.timeScale = 1;
		if (objectToSpawn != null){
			if (spawnObject == 1){
    			Instantiate(objectToSpawn,objectToSpawnTrans,Quaternion.identity);
    		}
			if (spawnObject == 2){
    			Instantiate(objectToSpawn2,objectToSpawnTrans,Quaternion.identity);
    		}
			if (spawnObject == 3){
    			Instantiate(objectToSpawn3,objectToSpawnTrans,Quaternion.identity);
    		}
    	}
    
		if (difficultyNum == 1){
			matchWinHandler.Mode = 1;
        	print ("difficulty 1 set");
		}
		if (difficultyNum == 2){
			matchWinHandler.Mode = 2;
       		print ("difficulty 2 set");
		}
		if (difficultyNum == 3){
			matchWinHandler.Mode = 3;
       		print ("difficulty 3 set");
		}
	
		if (whichAnimal == 1){
			matchWinHandler.WhichAnimal = 1;
		}
		if (whichAnimal == 2){
			matchWinHandler.WhichAnimal = 2;
		}
		if (whichAnimal == 3){
			matchWinHandler.WhichAnimal = 3;
		}
		if (whichAnimal == 4){
			matchWinHandler.WhichAnimal = 4;
		}
		if (whichAnimal == 5){
			matchWinHandler.WhichAnimal = 5;
		}
		if (whichAnimal == 6){
			matchWinHandler.WhichAnimal = 6;
		}
		if (whichAnimal == 7){
			matchWinHandler.WhichAnimal = 7;
		}
		if (whichAnimal == 8){
			matchWinHandler.WhichAnimal = 8;
		}
		if (whichAnimal == 9){
			matchWinHandler.WhichAnimal = 9;
		}
		if (whichAnimal == 10){
			matchWinHandler.WhichAnimal = 10;
		}
	
		if (killCards){
			Globals.KillCards = true;
		}
	}else{
		if (clickSoundObj != null){
			Instantiate (clickSoundObj,transform.position,Quaternion.identity);
		}
		AfterClick();
	}
}

function AfterClick(){

		yield WaitForSeconds(3.0);

		Destroy(objectToDestroy.gameObject);
		Time.timeScale = 1;
		if (objectToSpawn != null){
			if (spawnObject == 1){
    			Instantiate(objectToSpawn,objectToSpawnTrans,Quaternion.identity);
    		}
			if (spawnObject == 2){
    			Instantiate(objectToSpawn2,objectToSpawnTrans,Quaternion.identity);
    		}
			if (spawnObject == 3){
    			Instantiate(objectToSpawn3,objectToSpawnTrans,Quaternion.identity);
    		}
    	}
    
		if (difficultyNum == 1){
			matchWinHandler.Mode = 1;
        	print ("difficulty 1 set");
		}
		if (difficultyNum == 2){
			matchWinHandler.Mode = 2;
       		print ("difficulty 2 set");
		}
		if (difficultyNum == 3){
			matchWinHandler.Mode = 3;
       		print ("difficulty 3 set");
		}
	
		if (whichAnimal == 1){
			matchWinHandler.WhichAnimal = 1;
		}
		if (whichAnimal == 2){
			matchWinHandler.WhichAnimal = 2;
		}
		if (whichAnimal == 3){
			matchWinHandler.WhichAnimal = 3;
		}
		if (whichAnimal == 4){
			matchWinHandler.WhichAnimal = 4;
		}
		if (whichAnimal == 5){
			matchWinHandler.WhichAnimal = 5;
		}
		if (whichAnimal == 6){
			matchWinHandler.WhichAnimal = 6;
		}
		if (whichAnimal == 7){
			matchWinHandler.WhichAnimal = 7;
		}
		if (whichAnimal == 8){
			matchWinHandler.WhichAnimal = 8;
		}
		if (whichAnimal == 9){
			matchWinHandler.WhichAnimal = 9;
		}
		if (whichAnimal == 10){
			matchWinHandler.WhichAnimal = 10;
		}
	
		if (killCards){
			Globals.KillCards = true;
		}

}