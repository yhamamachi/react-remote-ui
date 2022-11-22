import * as utils from "../utils";

export const Bonnie = () => {
  return (
    <>
      <h2>Bonnie++ benchmark</h2>
      <br />
      <form id="bench_bonnie_form">
        <input
          type="text"
          name="bonnie"
          value="bonnie"
          defaultValue="bonnie"
          style={{ display: "none" }}
          onChange={(e) => utils.UpdateExpectedCommand()}
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
          <input type="text" name="-n" defaultValue="256:1024:1024:16" />
        </p>
        <button type="button" onClick={RunBenchBonnie}>
          Run
        </button>
      </form>
    </>
  );
};

const RunBenchBonnie = () => {
  const hostname = window.location.hostname;
  const _form_elements = document.forms["bench_bonnie_form"].elements;
  const query = utils.convertFormElementsToURL(_form_elements, " ");
  console.log(query);
  const url = "http://" + hostname + ":8000/command?" + query;
  utils.get_req(url);
};
