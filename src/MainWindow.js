import * as React from "react";
import { useState } from "react";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import "react-reflex/styles.css";

import { DummyWindow } from "./Window/DummyWindow";

export function MainWindow() {
  let window_list = [];
  const [active_window, setActiveWindow] = useState([0, 1, 2, 3]);

  const MakeWindow = (pane_name, _color) => {
    return (
      <ReflexElement className="left-pane" style={{ background: _color }}>
        <div className="pane-content">Pane {pane_name}(resizeable)</div>
      </ReflexElement>
    );
  };

  /** each item's menu */
  let item = "dummy";
  active_window.forEach(function (num) {
    console.log(num);
    switch (num) {
      case 0:
        window_list[num] = MakeWindow("Dummy0", "#5aa");
        break;
      case 1:
        window_list[num] = MakeWindow("Dummy1", "#a5a");
        break;
      case 2:
        window_list[num] = MakeWindow("Dummy2", "#aa5");
        break;
      case 3:
        window_list[num] = DummyWindow("/dummy.html");
      default:
        break;
    }
  });
  const window0 = { display: "none", color: "red" };

  return (
    <div className="MainWindow">
      <p>Hello, MainWindow</p>

      <ReflexContainer orientation="horizontal">
        <ReflexElement>
          <ReflexContainer orientation="vertical">
            {window_list[2]}
            <ReflexSplitter />
            {window_list[3]}
          </ReflexContainer>
        </ReflexElement>
        <ReflexSplitter />
        <ReflexElement>
          <ReflexContainer orientation="vertical">
            {window_list[0]}
            <ReflexSplitter />
            {window_list[1]}
          </ReflexContainer>
        </ReflexElement>
      </ReflexContainer>
    </div>
  );
}
/**
 * <ReflexSplitter />
 */
