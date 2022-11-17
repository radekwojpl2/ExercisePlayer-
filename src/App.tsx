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

  const list2 = [
    { name: "t4Zz6-aG8Iw", playerVars: { start: 31 } },
    { name: "OjcN6RzWFWs", playerVars: { start: 1234 } },
    { name: "OjcN6RzWFWs", playerVars: { start: 1296 } },
    { name: "0vdQveRyVic" },
    { name: "1YT30fCSsLo" },
  ];

  const list3 = [
    { name: "lPKRiU9u_Hc", playerVars: { start: 1062 } },
    { name: "eA8DuVW3vPo" },
  ];

  return (
    <div className="App">
      {list.map((x) => (
        <div key={x.name}>
          <YouTube videoId={x.name} opts={{ playerVars: x?.playerVars }} />
        </div>
      ))}
      <hr />
      {list2.map((x) => (
        <div key={x.name}>
          <YouTube videoId={x.name} opts={{ playerVars: x?.playerVars }} />
        </div>
      ))}
      <hr />
      {list3.map((x) => (
        <div key={x.name}>
          <YouTube videoId={x.name} opts={{ playerVars: x?.playerVars }} />
        </div>
      ))}
    </div>
  );
}

export default App;
