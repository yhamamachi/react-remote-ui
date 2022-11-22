import * as utils from "../utils";

export const Debug = () => {
  return (
    <>
      <h2>Debug</h2>
      <p>
        <button onClick={powerOn}>Power ON</button>
        <button onClick={powerOff}>Power OFF</button>
      </p>
      <br />
      <form id="test_form">
        <input type="text" name="test_data" />
        <input type="text" name="dummy" style={{ display: "none" }} />
        <button type="button" onClick={displayFormData}>
          Send Command
        </button>
      </form>
      <p id="DebugDisplay"></p>
    </>
  );
};

const powerControl = (state) => {
  const hostname = window.location.hostname;
  const url = "http://" + hostname + ":8000/POWER?a=" + state;
  utils.get_req(url);
};

const powerOn = () => {
  powerControl("on");
};

const powerOff = () => {
  powerControl("off");
};

function displayFormData() {
  const hostname = window.location.hostname;
  const formElm = document.getElementById("test_form");
  const formElmKai = formElm.test_data.value;
  const query = convertFormDataToURL(formElmKai);
  const url = "http://" + hostname + ":8000/command?" + query;
  const displayElm = document.getElementById("DebugDisplay");
  utils.get_req(url);
  displayElm.innerHTML = url;
}

const convertFormDataToURL = (formData) => {
  const tmp_array = formData.split(" ");
  let ret_str = "";
  for (let i = 0; i < tmp_array.length; i++) {
    console.log(tmp_array[i]);
    ret_str += i + "=" + tmp_array[i] + "&";
  }
  return ret_str;
};
