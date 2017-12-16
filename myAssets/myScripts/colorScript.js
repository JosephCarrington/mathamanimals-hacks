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


private var pink : Vector4 = Vector4(.964,0,.6,1);
private var blue : Vector4 = Vector4(0,.9,1,1);
private var yellow : Vector4 = Vector4(.9,1,0,1);
private var white : Vector4 = Vector4(1,1,1,1);

private var lerpColor : Vector4;
private var whichColor : int = 1;

var cycleSpeed : float = 1.0;

private var randomPick = 0;
private var countUp : float = 0;

var setPink : boolean = false;
var setBlue : boolean = false;
var setYellow : boolean = false;
var setWhite : boolean = false;


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
			if (setPink || setBlue || setYellow|| setWhite){
			if (setPink){GetComponent.<Renderer>().material.color = pink;}
			if (setBlue){GetComponent.<Renderer>().material.color = blue;}
			if (setYellow){GetComponent.<Renderer>().material.color = yellow;}
			if (setWhite){GetComponent.<Renderer>().material.color = white;}
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

