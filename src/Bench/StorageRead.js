import * as utils from "../utils";

export const StorageRead = () => {
  return (
    <>
      <h2>StorageRead by dd command</h2>
      <br />
      <div id="Splitter" style={{ display: "none" }}>
        {"="}
      </div>
      <form id="bench_dd_read_form">
        <input
          type="text"
          name="sudo"
          value="sudo"
          defaultValue="sudo"
          style={{ display: "none" }}
        />
        <input
          type="text"
          name="dd"
          value="dd"
          defaultValue="dd"
          style={{ display: "none" }}
        />
        <input
          type="text"
          name="if"
          value="/dev/mmcblk0"
          defaultValue="/dev/mmcblk0"
          style={{ display: "none" }}
        />
        <input
          type="text"
          name="of"
          value="/dev/null"
          defaultValue="/dev/null"
          style={{ display: "none" }}
        />
        <p>
          bs=
          <select
            name="bs"
            size="1"
            onChange={(e) => utils.UpdateExpectedCommand()}
          >
            <option value="512">512</option>
            <option value="1K">1K</option>
            <option value="2K">2K</option>
            <option value="4K">4K</option>
            <option value="8K">8K</option>
            <option value="16K">16K</option>
            <option value="32K">32K</option>
            <option value="64K">64K</option>
            <option value="128K">128K</option>
            <option value="256K">256K</option>
            <option value="512K">512K</option>
            <option value="1M">1M</option>
            <option value="2M">2M</option>
            <option value="4M">4M</option>
            <option value="8M">8M</option>
            <option value="16M">16M</option>
          </select>
        </p>
        <p>
          count=
          <input
            type="number"
            name="count"
            defaultValue="512"
            onChange={(e) => utils.UpdateExpectedCommand()}
          />
        </p>
        <input
          type="text"
          name="iflag"
          value="direct"
          defaultValue="direct"
          style={{ display: "none" }}
        />
        <input
          type="text"
          name="_dummy"
          value=""
          defaultValue=""
          style={{ display: "none" }}
        />
        <button type="button" onClick={RunBenchDDRead}>
          Run
        </button>
      </form>
      <div id="ExpectedCommand"></div>
    </>
  );
};

const RunBenchDDRead = () => {
  const hostname = window.location.hostname;
  const _form_elements = document.forms["bench_dd_read_form"].elements;
  const query = utils.convertFormElementsToURL(_form_elements);
  console.log(query);
  const url = "http://" + hostname + ":8000/command?" + query;
  utils.get_req(url);
};
