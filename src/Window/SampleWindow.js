import * as React from "react";
import "react-tile-pane/theme/left-tab/styles.css";
import { styles } from "../theme";

export const SampleWindow = () => {
  return (
    <div style={styles.pane}>
      <div>
        <p style={{ buttom: "0" }}>
          <button onClick={button_a}>aaaa</button>
          <button onClick={button_b}>bbbb</button>
          <button onClick={button_c}>cccc</button>
        </p>
        <object
          id="dummy_obj"
          type="text/html"
          data="/dummy.html"
          width="100%"
          height="100%"
          zoom="150%"
        >
          <p>Note: It seems that your browser doesn't support Object tag.</p>
        </object>
      </div>
    </div>
  );
};

function button_a() {
  var obj = document.getElementById("dummy_obj");
  obj_data_non_query = obj.data.split("?")[0];
  obj.data = obj_data_non_query + "?edgeIP=Button_A is Pressed";
}
function button_b() {
  var obj = document.getElementById("dummy_obj");
  obj_data_non_query = obj.data.split("?")[0];
  obj.data = obj.data + "?edgeIP=Button_B is Pressed";
}
function button_c() {
  var obj = document.getElementById("dummy_obj");
  obj_data_non_query = obj.data.split("?")[0];
  obj.data = obj.data + "?edgeIP=Button_C is Pressed";
}
