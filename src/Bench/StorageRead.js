import * as utils from "../utils";

export const StorageRead = () => {
  return (
    <>
      StorageRead by dd command
      <br />
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
          <input type="text" name="bs" defaultValue="" list="bsList" />
          <datalist id="bsList">
            <option value="512"></option>
            <option value="1K"></option>
            <option value="2K"></option>
            <option value="4K"></option>
            <option value="8K"></option>
            <option value="16K"></option>
            <option value="32K"></option>
            <option value="64K"></option>
            <option value="128K"></option>
            <option value="256K"></option>
            <option value="512K"></option>
            <option value="1M"></option>
            <option value="2M"></option>
            <option value="4M"></option>
            <option value="8M"></option>
            <option value="16M"></option>
          </datalist>
        </p>
        <p>
          count=
          <input type="number" name="count" defaultValue="512" />
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
    </>
  );
};

const RunBenchDDRead = () => {
  const hostname = window.location.hostname;
  const _form_elements = document.forms["bench_dd_read_form"].elements;
  const query = convertFormElementsToURL(_form_elements);
  console.log(query);
  const url = "http://" + hostname + ":8000/command?" + query;
  utils.get_req(url);
};

const convertFormElementsToURL = (formElements) => {
  const tmp_array = formElements;
  let ret_str = "";
  for (let i = 0; i < tmp_array.length; i++) {
    console.log(tmp_array[i]);
    const name = tmp_array[i].name;
    let value = tmp_array[i].value;
    // Skip if value is empty
    if (value === "") {
      continue;
    }

    // value != name => name=value is passed
    // value == name => value is passed
    if (value !== name) {
      value = name + "=" + value;
    }
    ret_str += i + "=" + value + "&";
  }
  return ret_str;
};
