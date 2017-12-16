#pragma strict

var myCurrentNum : int = 0;
var circlePrefab : Transform;

var forHowManyCandles : boolean = false;


function Update () {

		GetComponent.<Renderer>().enabled = true;

		var tm : TextMesh = gameObject.GetComponent(TextMesh);

		var title = ""; 
		var question =  "?";
		
		
		if (myCurrentNum == 0){
			tm.text = title + question;
		}
		
		if (myCurrentNum != 0 ){
			tm.text = title + myCurrentNum;
		}
		
		if (forHowManyCandles && (clickStick.canCelebrate || clickStick.canAntiCelebrate)){
			GetComponent.<Renderer>().enabled = false;
			myCurrentNum = 0;
		}
		
		if (!forHowManyCandles && clickStick.AntiCelebrateShow){
			tm.text = title + clickStick.YearsAnswer;
		}

}


function OnMouseDown () {
/*
	myCurrentNum += 1;
	
	Instantiate(circlePrefab,transform.position,Quaternion.identity);
	
	if (myCurrentNum > 10){
		myCurrentNum = 0;
	}
	*/
}