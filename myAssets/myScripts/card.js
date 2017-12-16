#pragma strict

//MOSTLY HANDLES CARD GRAPHICS, GO TO MATCHCARDCLICK FOR GOOD STUFFFF

var myFlip : boolean = false;

var myX : float  = 1;
var myY : float = 1;
var myZ : float = 0;

var mat11 : Material;
var mat12 : Material;
var mat13 : Material;
var mat14 : Material;
var mat15 : Material;
var mat16 : Material;
var mat17 : Material;
var mat18 : Material;
var mat19 : Material;
var mat110 : Material;
var mat21 : Material;
var mat22 : Material;
var mat23 : Material;
var mat24 : Material;
var mat25 : Material;
var mat26 : Material;
var mat27 : Material;
var mat28 : Material;
var mat29 : Material;
var mat210 : Material;
var mat31 : Material;
var mat32 : Material;
var mat33 : Material;
var mat34 : Material;
var mat35 : Material;
var mat36 : Material;
var mat37 : Material;
var mat38 : Material;
var mat39 : Material;
var mat310 : Material;
var mat41 : Material;
var mat42 : Material;
var mat43 : Material;
var mat44 : Material;
var mat45 : Material;
var mat46 : Material;
var mat47 : Material;
var mat48 : Material;
var mat49 : Material;
var mat410 : Material;
var mat51 : Material;
var mat52 : Material;
var mat53 : Material;
var mat54 : Material;
var mat55 : Material;
var mat56 : Material;
var mat57 : Material;
var mat58 : Material;
var mat59 : Material;
var mat510 : Material;
var mat61 : Material;
var mat62 : Material;
var mat63 : Material;
var mat64 : Material;
var mat65 : Material;
var mat66 : Material;
var mat67 : Material;
var mat68 : Material;
var mat69 : Material;
var mat610 : Material;
var mat71 : Material;
var mat72 : Material;
var mat73 : Material;
var mat74 : Material;
var mat75 : Material;
var mat76 : Material;
var mat77 : Material;
var mat78 : Material;
var mat79 : Material;
var mat710 : Material;
var mat81 : Material;
var mat82 : Material;
var mat83 : Material;
var mat84 : Material;
var mat85 : Material;
var mat86 : Material;
var mat87 : Material;
var mat88 : Material;
var mat89 : Material;
var mat810 : Material;
var mat91 : Material;
var mat92 : Material;
var mat93 : Material;
var mat94 : Material;
var mat95 : Material;
var mat96 : Material;
var mat97 : Material;
var mat98 : Material;
var mat99 : Material;
var mat910 : Material;
var mat101 : Material;
var mat102 : Material;
var mat103 : Material;
var mat104 : Material;
var mat105 : Material;
var mat106 : Material;
var mat107 : Material;
var mat108 : Material;
var mat109 : Material;
var mat1010 : Material;

var matQuestion : Material;


var materials : Material[,] = new Material[11,11];

var timeToVisible : float = 0;
private var timeToVisibleCounter : float = 0;

private var isVisible = false;

var isQuestion = false;

var leafParticlePrefab : Transform;
var makeLeaf : boolean = true;

var gameScreenPrefab : Transform;
var gameScreenCounter : float = 0;


//var matString : String;
//var myMaterial : Material;

function Start(){
	if (!isQuestion){
		GetComponent.<Renderer>().enabled = false;
	}
	/*matString = "mat" + myX.ToString() + myY.ToString();
	print(matString);
	myMaterial = matString;
	*/
	
	//renderer.material = ("mat21");
	
	materials[1,1] = mat11;
	materials[1,2] = mat12;
	materials[1,3] = mat13;
	materials[1,4] = mat14;
	materials[1,5] = mat15;
	materials[1,6] = mat16;
	materials[1,7] = mat17;
	materials[1,8] = mat18;
	materials[1,9] = mat19;
	materials[1,10] = mat110;
	materials[2,1] = mat21;
	materials[2,2] = mat22;
	materials[2,3] = mat23;
	materials[2,4] = mat24;
	materials[2,5] = mat25;
	materials[2,6] = mat26;
	materials[2,7] = mat27;
	materials[2,8] = mat28;
	materials[2,9] = mat29;
	materials[2,10] = mat210;
	materials[3,1] = mat31;
	materials[3,2] = mat32;
	materials[3,3] = mat33;
	materials[3,4] = mat34;
	materials[3,5] = mat35;
	materials[3,6] = mat36;
	materials[3,7] = mat37;
	materials[3,8] = mat38;
	materials[3,9] = mat39;
	materials[3,10] = mat310;
	materials[4,1] = mat41;
	materials[4,2] = mat42;
	materials[4,3] = mat43;
	materials[4,4] = mat44;
	materials[4,5] = mat45;
	materials[4,6] = mat46;
	materials[4,7] = mat47;
	materials[4,8] = mat48;
	materials[4,9] = mat49;
	materials[4,10] = mat410;
	materials[5,1] = mat51;
	materials[5,2] = mat52;
	materials[5,3] = mat53;
	materials[5,4] = mat54;
	materials[5,5] = mat55;
	materials[5,6] = mat56;
	materials[5,7] = mat57;
	materials[5,8] = mat58;
	materials[5,9] = mat59;
	materials[5,10] = mat510;
	materials[6,1] = mat61;
	materials[6,2] = mat62;
	materials[6,3] = mat63;
	materials[6,4] = mat64;
	materials[6,5] = mat65;
	materials[6,6] = mat66;
	materials[6,7] = mat67;
	materials[6,8] = mat68;
	materials[6,9] = mat69;
	materials[6,10] = mat610;
	materials[7,1] = mat71;
	materials[7,2] = mat72;
	materials[7,3] = mat73;
	materials[7,4] = mat74;
	materials[7,5] = mat75;
	materials[7,6] = mat76;
	materials[7,7] = mat77;
	materials[7,8] = mat78;
	materials[7,9] = mat79;
	materials[7,10] = mat710;
	materials[8,1] = mat81;
	materials[8,2] = mat82;
	materials[8,3] = mat83;
	materials[8,4] = mat84;
	materials[8,5] = mat85;
	materials[8,6] = mat86;
	materials[8,7] = mat87;
	materials[8,8] = mat88;
	materials[8,9] = mat89;
	materials[8,10] = mat810;
	materials[9,1] = mat91;
	materials[9,2] = mat92;
	materials[9,3] = mat93;
	materials[9,4] = mat94;
	materials[9,5] = mat95;
	materials[9,6] = mat96;
	materials[9,7] = mat97;
	materials[9,8] = mat98;
	materials[9,9] = mat99;
	materials[9,10] = mat910;
	materials[10,1] = mat101;
	materials[10,2] = mat102;
	materials[10,3] = mat103;
	materials[10,4] = mat104;
	materials[10,5] = mat105;
	materials[10,6] = mat106;
	materials[10,7] = mat107;
	materials[10,8] = mat108;
	materials[10,9] = mat109;
	materials[10,10] = mat1010;
	materials[0,0] = matQuestion;

	
	GetComponent.<Renderer>().material = materials[myX,myY];
	
	//IF FLIP FLOP AND MY Z SHOWS I AM THE SECOND OF 2 LIKE CARDS (Z == 1)
	if (/*myZ == 1*/myFlip){
		GetComponent.<Renderer>().material = materials[myY,myX];
		myZ = 0;
	}
}


function Update () {
if (!isVisible && !isQuestion){
	timeToVisibleCounter += 1 * Time.deltaTime;
	if (timeToVisibleCounter > timeToVisible){
		GetComponent.<Renderer>().enabled = true;
		transform.rotation = Quaternion.Euler(0,90,180);
		isVisible = true;
		if (makeLeaf){
			Instantiate (leafParticlePrefab,Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
			makeLeaf = false;
		}
	}
	
}//end is visible

if (isQuestion){
	if (matchWinHandler.CardsMatched == 20){
		gameScreenCounter += 1 * Time.deltaTime;
		if (gameScreenCounter > 1.8){
			SpawnGameScreen();
			matchWinHandler.GameEnd = true;
		} 
	}
}

}//end of update

function SpawnGameScreen(){
		
		var gameScreenThing = Instantiate (gameScreenPrefab,Vector3(0,0,0),Quaternion.identity);
		var gameScreenScript : gameScreen = gameScreenThing.gameObject.GetComponent(gameScreen);
		gameScreenScript.bananas = matchWinHandler.bananas;
		gameScreenScript.bananasComputer = matchWinHandler.bananasComputer;
		Instantiate (leafParticlePrefab,Vector3(transform.position.x,transform.position.y,transform.position.z - 1),Quaternion.identity);
		Destroy(gameObject);

}