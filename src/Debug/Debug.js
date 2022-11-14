export const Debug = () => {
  return (
    <>
      Debug
      <form id="poweron_form">
        <button onClick={powerOn}>Power ON</button>
      </form>
      <form id="poweron_of">
        <button onClick={powerOff}>Power OFF</button>
      </form>
      <form id="test_form">
        <input type="text" name="test_data" />
      </form>
      <button onClick={displayFormData}>Send Command</button>
      <p id="display"></p>
    </>
  );
};

const func1 = (page) => {
  document.form1.action = `${page}.html`;
  document.form1.submit();
  console.log(page);
};

const powerControl = (state) => {
  const hostname = window.location.hostname;
  const url = "http://" + hostname + ":8000/POWER?a=" + state;
  fetch(url);
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
  fetch(url);
  displayElm.innerHTML = url;
}

const convertFormDataToURL = (formData) => {
  const tmp_array = formData.split(" ");
  let ret_str = "";
  for (i = 0; i < tmp_array.length; i++) {
    console.log(tmp_array[i]);
    ret_str += i + "=" + tmp_array[i] + "&";
  }
  return ret_str;
};
