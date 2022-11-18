import * as React from "react";
import "react-tile-pane/theme/left-tab/styles.css";
import { styles } from "../theme";

export const FullscreenWindow = (URL: string) => {
  return (
    <div style={styles.pane}>
      <object type="text/html" data={URL} width="100%" height="100%">
        <p>Note: It seems that your browser doesn't support Object tag.</p>
      </object>
    </div>
  );
};
