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
  useGetLeaf,
  useReset,
  useCallback
  // useGetRootNode,
  // TabBarPropsWithAction,
  // TabsBarConfig
} from "react-tile-pane";
import { SampleWindow } from "./Window/SampleWindow";
import { FullscreenWindow } from "./Window/FullscreenWindow";
import { ClusterWindow } from "./Window/ClusterWindow";
import { styles, theme } from "./theme";
import { SideMenu } from "./SideMenu";

/****************************************************
 * Config
 *****************************************************/
export const windowTitle = [
  "Serial",
  "Wave",
  "Camera",
  "Cluster",
  "App1",
  "App2",
  "Sample"
];
export const rootPane: TileBranchSubstance = {
  children: [{ children: windowTitle[0] }, { children: windowTitle[1] }]
};
export const rootPane2: TileBranchSubstance = {
  children: [{ children: windowTitle[3] }, { children: windowTitle[4] }]
};

/****************************************************
 * functions
 *****************************************************/
export const DummyWindow = (title: string) => {
  return <div style={styles.pane}>Hello, {title} window!</div>;
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

export const WindowMove = (name, place = [0.99, 0.5]) => {
  const reset = useReset();
  console.log("WindowMove is pushed");
  return (
    <div>
      <button onClick={() => reset(rootPane2)}>Test</button>
    </div>
  );
};

/****************************************************
 * Main function
 *****************************************************/
export function MainWindow2() {
  const hostname = window.location.hostname;
  const [nodeList, setNodeList] = useState([
    FullscreenWindow("http://" + hostname + ":7681"),
    FullscreenWindow("http://" + hostname + ":3030"),
    FullscreenWindow("http://" + hostname + ":5900"),
    <ClusterWindow />,
    DummyWindow("App1"),
    DummyWindow("App2"),
    <SampleWindow />
  ]);
  return (
    <TileProvider
      tilePanes={nodeList.map((child, index) => ({
        child: child,
        name: windowTitle[index]
      }))}
      rootNode={rootPane}
      {...theme({})}
    >
      <div className="flex">
        <div className="SideMenu">
          <SideMenu />
        </div>
        <div className="MainWindow">
          <div style={{ width: "99%", height: "99%" }}>
            <div style={{ display: "flex", marginTop: 6 }}>
              {nodeList.map((_, index) => (
                <PaneIcon name={windowTitle[index]} key={index} />
              ))}
            </div>
            <TileContainer
              style={{ color: "#fff", width: "99%", height: "99%" }}
            />
          </div>
        </div>
      </div>
    </TileProvider>
  );
}
