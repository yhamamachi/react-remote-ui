import * as React from "react";
import "react-tile-pane/theme/left-tab/styles.css";
import { styles } from "../theme";

//const hostname = window.location.hostname;
const hostname = "localhost";
let cluster_scale = 0.5;

export const ClusterWindow = () => {
  return (
    <div style={styles.pane}>
      <div style={{ width: "100%", height: "100%" }}>
        <form id="cluster_window_form">
          <div>
            edgeIP=
            <input type="text" name="ipaddr" defaultValue="192.168.0.100" />
            <input type="text" name="dummy" style={{ display: "none" }} />
            <button type="button" onClick={ClusterReload}>
              Reload
            </button>
            &nbsp;&nbsp;&nbsp;
            <button type="button" onClick={ClusterZoomOut}>
              -
            </button>
            <button type="button" onClick={ClusterZoomIn}>
              +
            </button>
          </div>
        </form>
        <object
          id="cluster_obj"
          type="text/html"
          data={"http://" + hostname + ":8088/cluster?edgeIP=192.168.0.100"}
          width="1920px"
          height="720px"
          style={{
            transform: "scale(" + cluster_scale + ")",
            transformOrigin: "0px 0px 0px"
          }}
        >
          <p>Note: It seems that your browser doesn't support Object tag.</p>
        </object>
      </div>
    </div>
  );
};

const ClusterZoomIn = () => {
  var obj = document.getElementById("cluster_obj");
  cluster_scale += 0.05;
  obj.style.transform = "scale(" + cluster_scale + ")";
};
const ClusterZoomOut = () => {
  var obj = document.getElementById("cluster_obj");
  cluster_scale -= 0.05;
  obj.style.transform = "scale(" + cluster_scale + ")";
};

const ClusterReload = () => {
  const formElm = document.getElementById("cluster_window_form");
  const ipaddr = formElm["ipaddr"].value;

  var obj = document.getElementById("cluster_obj");
  const obj_data_non_query = obj.data.split("?")[0];
  obj.data = obj_data_non_query + "?edgeIP=" + ipaddr;
};