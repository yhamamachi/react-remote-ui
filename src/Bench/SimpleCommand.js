import * as utils from "../utils";
import React, { useEffect } from "react";

export const SimpleCommand = (title, command) => {
  return (
    <>
      <h2>{title}</h2>
      <br />
      <div id="Splitter" style={{ display: "none" }}>
        {" "}
      </div>
      <form id="bench_command_form">
        <input
          type="text"
          name={command}
          value={command}
          defaultValue={command}
          style={{ display: "none" }}
        />
        <button type="button" onClick={RunBenchCommand}>
          Run
        </button>
      </form>
      <div id="ExpectedCommand"></div>
    </>
  );
};

const RunBenchCommand = () => {
  const hostname = window.location.hostname;
  const _form_elements = document.forms["bench_command_form"].elements;
  const query = utils.convertFormElementsToURL(_form_elements);
  console.log(query);
  const url = "http://" + hostname + ":8000/command?" + query;
  utils.get_req(url);
};
