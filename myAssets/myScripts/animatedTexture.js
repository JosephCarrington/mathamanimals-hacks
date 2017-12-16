var uvAnimationTileX = 24; //Here you can place the number of columns of your sheet.
                           //The above sheet has 24

var uvAnimationTileY = 1; //Here you can place the number of rows of your sheet.
                          //The above sheet has 1
var framesPerSecond = 10.0;

var destroyWhenDone : boolean = false;

var currentFrame = 0.0;

//var destroyFrame = 10;

var myParent : Transform;

private var killed : boolean = false;

private var material : Material;

function Start (){
	material = GetComponent.<Renderer>().material;
	if (gameObject.tag == "cube"){
		//var sinusCurveModifierScript : SinusCurveModifier;
		//sinusCurveModifierScript = gameObject.AddComponent ("SinusCurveModifier");
		//sinusCurveModifierScript.scale = 0;
		//sinusCurveModifierScript.speed = 46;
		//sinusCurveModifierScript.myTopScale = 1;
		//sinusCurveModifierScript.myTopDecay = 3;
		
	}
}

function Update () {

	if (GetComponent.<Renderer>().enabled == false){
		currentFrame = 0;
	}



    // Calculate index
    var index : int = Time.time * framesPerSecond;
    // repeat when exhausting all frames
    index = index % (uvAnimationTileX * uvAnimationTileY);

    
    currentFrame += Time.deltaTime * framesPerSecond;
    if (currentFrame > (uvAnimationTileX + 1) && !killed && destroyWhenDone){
    	killed = true;
    	Destroy(transform.parent.gameObject);
    	Destroy(gameObject);
    }
    if (currentFrame > (uvAnimationTileX * uvAnimationTileY)){
    	currentFrame = 0;
    }
    
    index = currentFrame;
   
    // Size of every tile
    var size = Vector2 (1.0 / uvAnimationTileX, 1.0 / uvAnimationTileY);
   
    // split into horizontal and vertical index
    var uIndex = index % uvAnimationTileX;
    var vIndex = index / uvAnimationTileX;

    // build offset
    // v coordinate is the bottom of the image in opengl so we need to invert.
    var offset = Vector2 (uIndex * size.x, 1.0 - size.y - vIndex * size.y);
    
    if(material == null)
    {
    	material = GetComponent.<Renderer>().material;
	}
    material.SetTextureOffset ("_MainTex", offset);
    material.SetTextureScale ("_MainTex", size);
    
    
}