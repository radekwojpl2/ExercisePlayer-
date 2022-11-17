import React from "react";
import logo from "./logo.svg";
import "./App.css";
import YouTube from "react-youtube";

function App() {
  const list = [
    { name: "tpczTeSkHz0" },
    { name: "2TOqw5wSfgE" },
    { name: "0IwQZHo3tVo" },
    { name: "2rHaVGhEChg" },
    { name: "5Hs7AfiMXgs", playerVars: { start: 248 } },
  ];

  return (
    <div className="App">
      {list.map((x) => (
        <div key={x.name}>
          <YouTube videoId={x.name} opts={{ playerVars: x?.playerVars }} />
        </div>
      ))}
    </div>
  );
}

export default App;
