using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Mathamanimals {
	public class FlipFlopButtonController : MonoBehaviour {

		private bool flipFlop = false;
		private Text text;
		public GameObject flipFlopTut;
		public GameObject[] deactiveOnFlipFlopOn;

		// Use this for initialization
		void Start () {
			text = gameObject.GetComponent<Text> ();
			CreateString ();

		}

		public void ToggleFlipFlop() {
			flipFlop = !flipFlop;
			GameObject.Find ("0centerField").SendMessage ("ToggleFlipFlopFun");
			CreateString ();
			if (flipFlop) {
				SendMessage ("Cycle", true);
				flipFlopTut.SetActive (true);
				foreach (GameObject deactive in deactiveOnFlipFlopOn) {
					deactive.SetActive (false);
				}
			} else {
				SendMessage ("Cycle", false);
				GetComponent<ColorCycleController> ().enabled = false;
			}
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
}
