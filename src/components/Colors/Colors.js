import React from "react";
import PropTypes from "prop-types";
import styles from "./Colors.module.css";
import { useState, useEffect } from "react";

const Colors = (props) => {
  const [color, setColor] = useState("ffffff");
  const [isHex, setIsHex] = useState(false);
  const [colorLabel, setColorLabel] = useState("Enter a valid color.");
  const [textColor, setTextColor] = useState("black");

  const lightOrDark = (bgColor) => {
    if (bgColor.match(/^rgb/)) {
      bgColor = bgColor.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      );
      var r = bgColor[1];
      var g = bgColor[2];
      var b = bgColor[3];
    } else {
      bgColor = +(
        "0x" + bgColor.slice(1).replace(bgColor.length < 5 && /./g, "$&$&")
      );
      r = bgColor >> 16;
      g = (bgColor >> 8) & 255;
      b = bgColor & 255;
    }

    var hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    if (hsp >= 127.5) {
      return "light";
    }
    return "dark";
  };

  const updateColor = (event) => {
    var newColor = event.target.value;
    var newIsHex = props.hexRegExp.test(newColor);
    setColor(newColor);
    if (newColor != "") {
      if (newIsHex) {
        setIsHex(true);
      } else {
        setIsHex(false);
      }

      props.setBackground(newColor);

      if (newIsHex) {
        setColorLabel(`#${newColor}`);
      } else {
        setColorLabel(newColor);
      }
    } else {
      setColorLabel("Enter a valid color.");
    }
  };

  useEffect(() => {
    var element = document.getElementById("App");
    var bgColor = window
      .getComputedStyle(element, null)
      .getPropertyValue("background-color");
    var brightness = lightOrDark(bgColor);
    console.log(bgColor);
    if (brightness == "dark") {
      setTextColor("white");
    } else {
      setTextColor("black");
    }
  }, [colorLabel]);

  const isColor = (strColor) => {
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor.toLowerCase();
  };

  return (
    <div className={styles.Colors} data-testid="Colors">
      <h1 className="ColorLabel" style={{ color: textColor }}>
        {isColor(color) || isHex ? colorLabel : "Enter a valid color."}
      </h1>
      <input
        type="text"
        name="color"
        onChange={updateColor}
        value={color}
      ></input>
    </div>
  );
};

Colors.propTypes = {};

Colors.defaultProps = {};

export default Colors;
