using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class FlipFlopButtonController : MonoBehaviour {

	private bool flipFlop = false;
	private Text text;
	// Use this for initialization
	void Start () {
		text = gameObject.GetComponent<Text> ();
		CreateString ();

	}

	public void ToggleFlipFlop() {
		flipFlop = !flipFlop;
		GameObject.Find ("0centerField").SendMessage ("ToggleFlipFlopFun");
		CreateString ();
	}

	private void CreateString() {
		text.text = "FLIP FLOP FUN: ";
		if (flipFlop) {
			text.text += "ON";
		} else {
			text.text += "OFF";
		}
	}
}
