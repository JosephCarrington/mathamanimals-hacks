using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Mathamanimals {
	public class ColorCycleController : MonoBehaviour {

		// Use this for initialization
		public Color[] colorsToCycle;
		Color initialColor;
		public bool lerpColors = true;
		public float cycleTime = 1f;
		Text text;
		int currentColor = 1;
		int oldColor = 0;

		void Start () {
			text = gameObject.GetComponent<Text> ();
			initialColor = text.color;
		}

		void Cycle(bool cycle) {
			StopAllCoroutines ();
			if (cycle) {
				StartCoroutine (CycleColors ());
			} else {
				text.color = initialColor;
			}
		}

		IEnumerator CycleColors() {
			while (true) {
				if (lerpColors) {
					StartCoroutine(LerpFromColorToColor (colorsToCycle [oldColor], colorsToCycle [currentColor], cycleTime));
				} else {
					text.color = colorsToCycle [oldColor];
				}
				oldColor++;
				if (oldColor == colorsToCycle.Length) {
					oldColor = 0;
				}
				currentColor++;
				if (currentColor == colorsToCycle.Length) {
					currentColor = 0;
				}
				yield return new WaitForSeconds (cycleTime);
			}
		}

		IEnumerator LerpFromColorToColor(Color a, Color b, float length) {
			float startTime = Time.time;
			while (Time.time < startTime + length) {
				float factor = (Time.time - startTime) / ((startTime + length) - startTime);
				text.color = Color.Lerp(a, b, factor);
				yield return null;
			}
		}
		// Update is called once per frame
		void Update () {
			
		}
	}
}
