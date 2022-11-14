export const Bonnie = () => {
  return (
    <>
      Bonnie++ benchmark
      <br />
      <form id="test_form">
        <input
          type="text"
          name="bonnie++"
          defaultValue="bonnie++"
          style={{ display: "none" }}
        />
        <input
          type="text"
          name="-d"
          defaultValue="~"
          style={{ display: "none" }}
        />
        <p>
          -n
          <input type="text" name="-n" defaultValue="256:1024:1024:16" />
        </p>
        <button type="button" onClick={RunCommand}>
          Run
        </button>
      </form>
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

const RunCommand = () => {
  const hostname = window.location.hostname;
  const _form_elements = document.forms["test_form"].elements;
  const query = convertFormElementsToURL(_form_elements);
  console.log(query);
  const url = "http://" + hostname + ":8000/command?" + query;
  get_req(url);
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

    // value != name => name value is passed
    // value == name => value is passed
    if (value !== name) {
      value = name + " " + value;
    }
    ret_str += i + "=" + value + "&";
  }
  return ret_str;
};
