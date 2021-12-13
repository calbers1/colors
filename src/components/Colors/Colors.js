import React from "react";
import PropTypes from "prop-types";
import styles from "./Colors.module.css";
import { useState, useEffect } from "react";

const Colors = (props) => {
  const [randomizerInterval, setRandomizerInterval] = useState("");
  const [color, setColor] = useState("");
  const [colorLabel, setColorLabel] = useState("Enter a valid color.");
  const [textColor, setTextColor] = useState("black");

  //credit to https://awik.io/determine-color-bright-dark-using-javascript/ for hsp color space stuff
  const bgDarkness = (bgColor) => {
    var r, g, b;
    //Splitting into R G B independant vars. if rgb:
    if (bgColor.match(/^rgb/)) {
      bgColor = bgColor.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      );
      r = bgColor[1];
      g = bgColor[2];
      b = bgColor[3];
    } else {
      //else it's hex
      bgColor = +(
        "0x" + bgColor.slice(1).replace(bgColor.length < 5 && /./g, "$&$&")
      );
      r = bgColor >> 16;
      g = (bgColor >> 8) & 255;
      b = bgColor & 255;
    }
    //this is the stuff I couldn't figure out myself...
    var hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    if (hsp >= 127.5) {
      return "light";
    }
    return "dark";
  };

  const updateColor = (event) => {
    var newColor = event.target.value.trim();
    var IsHex = props.hexRegExp.test(newColor);

    setColor(newColor);

    if (newColor !== "") {
      props.setBackground(newColor);

      if (newColor.toLowerCase() === "random") {
        setColorLabel("Randomizing... Press space to stop on a color");
      } else if (IsHex) {
        setColorLabel(`#${newColor}`);
      } else if (isColor(newColor)) {
        setColorLabel(newColor);
      } else {
        setColorLabel("Enter a valid color.");
      }
    } else {
      setColorLabel("Enter a valid color.");
    }

    if (newColor.toLowerCase() === "random") {
      startRandomizer();
    } else if (randomizerInterval != null) {
      clearInterval(randomizerInterval);
    }
  };

  //start the party!
  const startRandomizer = () => {
    setRandomizerInterval(setInterval(Randomizer, 250));
  };

  //PARTY!
  const Randomizer = () => {
    var hexChars = "";

    //load a string for a random hex color
    for (var i = 0; i < 6; i++) {
      hexChars = hexChars + Math.floor(Math.random() * 16).toString(16);
    }
    props.setBackground(hexChars);
    setColor(hexChars);
  };

  //change the font color based on the background color/contrast
  const changeFontColor = () => {
    if (color !== "") {
      var element = document.getElementById("colorIndicator");
      var bgColor = window
        .getComputedStyle(element, null)
        .getPropertyValue("background-color");
      var brightness = bgDarkness(bgColor);
      if (brightness === "dark") {
        setTextColor("white");
      } else {
        setTextColor("black");
      }
    }
  };

  //using useEffect so that after the state vars get updated to the latest values, we can make sure that the text color is readable
  useEffect(() => {
    changeFontColor();
  });

  //credit to Gennady G/dandavis on SO: https://stackoverflow.com/questions/48484767/javascript-check-if-string-is-valid-css-color
  const isColor = (strColor) => {
    var s = new Option().style;
    s.color = strColor;
    return s.color === strColor.toLowerCase();
  };

  return (
    <div className={styles.Colors} data-testid="Colors">
      <h1
        className="ColorLabel"
        style={{
          color: textColor,
        }}
      >
        {colorLabel}
      </h1>
      <input
        type="text"
        name="color"
        onChange={updateColor}
        style={{ color: textColor, borderColor: textColor }}
        value={color.trim()}
      ></input>
    </div>
  );
};

Colors.propTypes = {};

Colors.defaultProps = {};

export default Colors;
