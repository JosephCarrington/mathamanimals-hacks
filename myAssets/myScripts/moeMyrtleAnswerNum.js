#pragma strict


function Start () {

}

function Update () {





		var tm : TextMesh = gameObject.GetComponent(TextMesh);

		var title = ""; 
	//	var candlesNum = candleHandlerScript.currentCard.x;
		//var yearsNum = candleHandlerScript.currentCard.x * candleHandlerScript.currentCard.y;
		
		
		if (clickStick.IsCandles){
			tm.text = title + clickStick.CandlesAnswer;
		}
		
		if (clickStick.IsYears){
			tm.text = title + clickStick.YearsAnswer;
		}
		


}