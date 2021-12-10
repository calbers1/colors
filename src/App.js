import logo from "./logo.svg";
import "./App.css";
import Colors from "./components/Colors/Colors";
import { useState } from "react";
function App() {
  const hexRegexp = new RegExp(/^([0-9a-f]{3}|[0-9a-f]{6})$/i);
  const [bgColor, setBgColor] = useState(null);
  const setBackground = (color) => {
    if (hexRegexp.test(color)) {
      setBgColor(`#${color}`);
    } else {
      setBgColor(color);
    }
  };
  return (
    <div style={{ backgroundColor: bgColor }} className="App" id="App">
      <Colors setBackground={setBackground} hexRegExp={hexRegexp}></Colors>
    </div>
  );
}

export default App;
