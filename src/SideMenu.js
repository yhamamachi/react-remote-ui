/**
 * 参考文献
 * https://mebee.info/2020/12/25/post-23284/
 * https://szhsin.github.io/react-menu
 * https://renesasjp.udemy.com/course/modern_javascipt_react_beginner/learn/lecture/21899868#content
 */

import React from "react";
import { useState } from "react";
import "@szhsin/react-menu/dist/index.css";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "./styles.css";

/** import items */
import { Demo1 } from "./Demo/Demo1.js";
import { Demo2 } from "./Demo/Demo2.js";
import { Demo3 } from "./Demo/Demo3.js";
import { Debug } from "./Debug/Debug.js";
import { StorageRead } from "./Bench/StorageRead.js";
import { Bonnie } from "./Bench/Bonnie.js";

//let menu_num = 0;
export function SideMenu(props) {
  const Demos = ["Demo1", "Demo2", "Demo3"];
  const Benchmarks = ["StorageRead", "Bonnie"];
  const Debugs = ["Debug"];

  const [menu_name, setMenuName] = useState(0);
  const [isVisible, setIsVisible] = useState(1);
  const toggleVisible = () => setIsVisible(1 - isVisible);

  /** Make menulist function */
  const MakeSubMenu = ({ MenuListName, MenuList }) => {
    return (
      <SubMenu label={MenuListName}>
        {MenuList.map((item, index) => {
          return (
            <MenuItem key={item} onClick={() => setMenuName(item)}>
              {index + 1} : {item}
            </MenuItem>
          );
        })}
      </SubMenu>
    );
  };

  /** each item's menu */
  let item = "dummy";
  switch (menu_name) {
    case "Demo1":
      item = Demo1();
      break;
    case "Demo2":
      item = Demo2();
      break;
    case "Demo3":
      item = Demo3();
      break;
    case "Debug":
      item = Debug();
      break;
    case "StorageRead":
      item = StorageRead();
      break;
    case "Bonnie":
      item = Bonnie();
      break;
    default:
      // item = "Please select Demo/Benchmark";
      item = "dummy";
  }

  const _width = 30;
  const sidemenu_style = {
    minWidth: _width + isVisible * (300 - _width) + "px"
  };
  // minimize Menubar
  if (isVisible == 0) {
    return (
      <div className="SideMenu" style={sidemenu_style}>
        <p>
          <button onClick={toggleVisible}>&gt;&gt;</button>
        </p>
      </div>
    );
  }

  /** Menu and SubMenu part */
  return (
    <>
      <div className="SideMenu" style={sidemenu_style}>
        <p>
          Side menu module
          <button onClick={toggleVisible} style={{ float: "right" }}>
            &lt;&lt;
          </button>
        </p>
        <Menu menuButton={<MenuButton>Demo/Benchmark Select</MenuButton>}>
          <MakeSubMenu MenuListName="Demo" MenuList={Demos} />
          <MakeSubMenu MenuListName="Bechmark" MenuList={Benchmarks} />
          <MakeSubMenu MenuListName="Debug" MenuList={Debugs} />
        </Menu>

        <div>{item}</div>
      </div>
    </>
  );
}

/**^------------------------------------------------------------------------------ */
/** backup
        <SubMenu label="Benchmark">
          {Benchmarks.map((bench, index) => {
            return (
              <MenuItem key={bench} onClick={() => setMenuName(bench)}>
                {index} : {bench}
              </MenuItem>
            );
          })}
        </SubMenu>
 */
