#pragma strict

private var leftPos : Vector3 = Vector3(-3.361735,1.758891,7.400196);
private var rightPos : Vector3 = Vector3(3.361735,1.758891,7.400196);

private var startPos : Vector3;

private var count : float = 0;

var human : boolean = true;

var minusBanana : boolean = false;

function Start () {

	startPos = transform.position;
	count = 0;
	//matchWinHandler.UpdateScores = true;
	
	if (minusBanana){
		if (human){
			transform.position = leftPos;
		}
		if (!human){
			transform.position = rightPos;
		}
	}

}

function Update () {

	if (!minusBanana){

		count += 1 * .65 * Time.deltaTime;

		if (human){
			transform.position = Vector3.Lerp(startPos, leftPos, count);
		}else{
			transform.position = Vector3.Lerp(startPos, rightPos, count);
		}
	}
	
	if (minusBanana){
		transform.position.y -= 1.5 * Time.deltaTime;
	}
	

}