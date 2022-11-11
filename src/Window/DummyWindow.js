import * as React from "react";
import { useState } from "react";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";

export const DummyWindow = (URL) => {
  return (
    <ReflexElement className="left-pane">
      <div className="pane-content">Dummy Pane (resizeable)</div>
      <iframe src={URL}></iframe>
    </ReflexElement>
  );
};
