import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { MainWindow2 } from "./MainWindow2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="MainWindow">
      <MainWindow2 />
    </div>
  </StrictMode>
);
// <App />

/** react-reflect
root.render(
  <StrictMode>
    <div className="flex">
      <div className="SideMenu">
        <SideMenu />
      </div>
      <div className="MainWindow">
        <MainWindow />
      </div>
    </div>
  </StrictMode>
);
// <App />
*/
