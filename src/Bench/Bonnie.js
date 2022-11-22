import * as utils from "../utils";
import React, { useEffect } from "react";

export const Bonnie = () => {
  return (
    <>
      <h2>Bonnie++ benchmark</h2>
      <br />
      <div id="Splitter" style={{ display: "none" }}>
        {" "}
      </div>
      <form id="bench_bonnie_form">
        <input
          type="text"
          name="bonnie"
          value="bonnie"
          defaultValue="bonnie"
          style={{ display: "none" }}
        />
        <input
          type="text"
          name="-d"
          value="~"
          defaultValue="~"
          style={{ display: "none" }}
        />
        <p>
          -n
          <input
            type="text"
            name="-n"
            defaultValue="256:1024:1024:16"
            onChange={(e) => utils.UpdateExpectedCommand()}
          />
        </p>
        <button type="button" onClick={RunBenchBonnie}>
          Run
        </button>
      </form>
      <div id="ExpectedCommand"></div>
    </>
  );
};

const RunBenchBonnie = () => {
  const hostname = window.location.hostname;
  const _form_elements = document.forms["bench_bonnie_form"].elements;
  const query = utils.convertFormElementsToURL(_form_elements);
  console.log(query);
  const url = "http://" + hostname + ":8000/command?" + query;
  utils.get_req(url);
};
