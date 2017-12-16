#pragma strict


private var timeAtCurrentFrame : float = 0;
private var myDeltaTime : float = 0;
private var timeAtLastFrame : float = 0;


var cycleColors : boolean = false;
var rainBow : boolean = false;
var myColor : Color = Color(0,0,0,0);

var colorOverride : boolean = false;

//var useAlt : boolean = false;
//var fadePauseScript : fadePause;


private var pink : Vector4 = Vector4(.956,.603,.756,1);
private var blue : Vector4 = Vector4(.015,.388,.635,1);
private var yellow : Vector4 = Vector4(1,1,0,1);
private var black : Vector4 = Vector4(.26,.26,.26,1);
private var orange : Vector4 = Vector4(.968,.584,.129,1);
private var gray : Vector4 = Vector4(.65,.65,.65,1);
private var purple : Vector4 = Vector4(.521,.380,.666,1);
private var red : Vector4 = Vector4(.929,.109,.141,1);
private var green : Vector4 = Vector4(.223,.709,.290,1);
private var brown : Vector4 = Vector4(.796,.564,.254,1);

private var lerpColor : Vector4;
private var whichColor : int = 1;

var cycleSpeed : float = 1.0;

private var randomPick = 0;
private var countUp : float = 0;

var setBlack : boolean = false;
var setBlue : boolean = false;
var setBrown : boolean = false;
var setGray : boolean = false;
var setGreen : boolean = false;
var setOrange : boolean = false;
var setPink : boolean = false;
var setPurple : boolean = false;
var setRed : boolean = false;
var setYellow : boolean = false;


function Start(){

	timeAtCurrentFrame  = Time.realtimeSinceStartup - 1;
	myDeltaTime = Time.realtimeSinceStartup - 1;
	timeAtLastFrame  = Time.realtimeSinceStartup - 1;
	


}

function Update () {

	//we create our own deltaTime based on realtimeSinceStartup here
    timeAtCurrentFrame = Time.realtimeSinceStartup;
    myDeltaTime = timeAtCurrentFrame - timeAtLastFrame;
    timeAtLastFrame = timeAtCurrentFrame;



if (!colorOverride){
//	blue = Globals.PaddleWallColor;
//	pink = Globals.BallColor;
//	yellow = Globals.AccentColor;
}

	if (!cycleColors && !rainBow){
			if (setBlack || setBlue || setBrown|| setGray || setGreen || setOrange || setPink || setPurple || setRed || setYellow){
			if (setBlack){GetComponent.<Renderer>().material.color = black;}
			if (setBlue){GetComponent.<Renderer>().material.color = blue;}
			if (setBrown){GetComponent.<Renderer>().material.color = brown;}
			if (setGray){GetComponent.<Renderer>().material.color = gray;}
			if (setGreen){GetComponent.<Renderer>().material.color = green;}
			if (setOrange){GetComponent.<Renderer>().material.color = orange;}
			if (setPink){GetComponent.<Renderer>().material.color = pink;}
			if (setPurple){GetComponent.<Renderer>().material.color = purple;}
			if (setRed){GetComponent.<Renderer>().material.color = red;}
			if (setYellow){GetComponent.<Renderer>().material.color = yellow;}
		}else{GetComponent.<Renderer>().material.color = myColor;}
		

	}else{
		if (cycleColors){
			if(Time.deltaTime !=0){
				countUp += cycleSpeed * Time.deltaTime;
			}
			if(Time.deltaTime ==0){
				countUp += cycleSpeed * myDeltaTime;
			}
			//print(countUp);
			if (countUp > 1){
				countUp = 0;
				randomPick = Random.Range(1,4);
				if (randomPick == 1){GetComponent.<Renderer>().material.color = pink;}
				if (randomPick == 2){GetComponent.<Renderer>().material.color = blue;}
				if (randomPick == 3){GetComponent.<Renderer>().material.color = yellow;}
				//if (randomPick == 4){renderer.material.color = yellow;}
			}
		}
		if (rainBow){
			if(Time.deltaTime !=0){
				countUp += cycleSpeed * Time.deltaTime;
			}
			if(Time.deltaTime ==0){
				countUp += cycleSpeed * myDeltaTime;			
			}
			if (whichColor == 1){
				lerpColor = Vector4.Lerp(pink, blue, countUp);
				if (countUp > 1){
					countUp = 0;
					whichColor = 2;
				}
			}
			if (whichColor == 2){
				lerpColor = Vector4.Lerp(blue, yellow, countUp);
				if (countUp > 1){
					countUp = 0;
					whichColor = 3;
				}
			}
			if (whichColor == 3){
				lerpColor = Vector4.Lerp(yellow, pink, countUp);
				if (countUp > 1){
					countUp = 0;
					whichColor = 1;
				}
			}
			GetComponent.<Renderer>().material.color = lerpColor;
		}//end of rainbow
	}//end of else
	
	//if (useAlt){
//		renderer.material.color.a = fadePauseScript.altFade;
	//}
	
	
	
}//end of update

