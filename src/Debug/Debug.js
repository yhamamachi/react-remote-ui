export const Debug = () => {
  return (
    <>
      Debug
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
      <p id="display"></p>
    </>
  );
};

function get_req(url) {
  fetch(url, {
    method: "GET"
  })
    .then((response) => response.text())
    .then((text) => {});
}

const powerControl = (state) => {
  const hostname = window.location.hostname;
  const url = "http://" + hostname + ":8000/POWER?a=" + state;
  get_req(url);
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
  const displayElm = document.getElementById("display");
  get_req(url);
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
