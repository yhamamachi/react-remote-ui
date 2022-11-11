/****************************************************
 * Header
 *****************************************************/
import * as React from "react";
import { useState } from "react";

import {
  //createTilePanes,
  DraggableTitle,
  TileBranchSubstance,
  TileContainer,
  TileProvider,
  useMovePane,
  useGetLeaf
  // useGetRootNode,
  // TabBarPropsWithAction,
  // TabsBarConfig
} from "react-tile-pane";
import { SampleWindow } from "./Window/SampleWindow";
import { styles, theme } from "./theme";

/****************************************************
 * Config
 *****************************************************/
const title = ["Serial", "Wave", "Camera", "App1", "App2", "Sample"];
export const rootPane: TileBranchSubstance = {
  children: [{ children: title[0] }, { children: title[1] }]
};

/****************************************************
 * functions
 *****************************************************/
export const DummyWindow = (title: string) => {
  return <div style={styles.pane}>Hello, {title} window!</div>;
};
export const DummyWindow2 = (URL: string) => {
  return (
    <div style={styles.pane}>
      <object type="text/html" data={URL} width="100%" height="100%">
        <p>Note: It seems that your browser doesn't support Object tag.</p>
      </object>
    </div>
  );
};

function PaneIcon({ name }: { name: number | string }) {
  const getLeaf = useGetLeaf();
  const move = useMovePane();
  const leaf = getLeaf(name);
  const isShowing = !!leaf;
  const tab_style = {
    borderBottom: isShowing ? "solid 3px orange" : "solid 0px orange"
  };
  return (
    <div className="PaneIconOuter">
      <div className="PaneIconInner">
        <DraggableTitle
          onClick={() => {
            console.log(`pane-${name} is clicked`);
            move(name, isShowing ? null : [0.99, 0.5]);
          }}
          style={tab_style}
          name={name}
        >
          {name}
        </DraggableTitle>
      </div>
    </div>
  );
}

/****************************************************
 * Main function
 *****************************************************/
export function MainWindow2() {
  const hostname = window.location.hostname;
  const [nodeList, setNodeList] = useState([
    DummyWindow2("http://" + hostname + ":7681"),
    DummyWindow2("http://" + hostname + ":3030"),
    DummyWindow2("http://" + hostname + ":5900"),
    DummyWindow("App1"),
    DummyWindow("App2"),
    <SampleWindow />
  ]);
  return (
    <TileProvider
      tilePanes={nodeList.map((child, index) => ({
        child: child,
        name: title[index]
      }))}
      rootNode={rootPane}
      {...theme({})}
    >
      <div style={{ width: "99%", height: "99%" }}>
        <div style={{ display: "flex", marginTop: 6 }}>
          {nodeList.map((_, index) => (
            <PaneIcon name={title[index]} key={index} />
          ))}
        </div>
        <TileContainer style={{ color: "#fff", width: "99%", height: "99%" }} />
      </div>
    </TileProvider>
  );
}
