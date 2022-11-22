export const get_req = (url) => {
  const hostname = window.location.hostname;
  if (hostname !== "localhost") {
    console.log("Get: " + url);
    return;
  } else {
    fetch(url, {
      method: "GET"
    })
      .then((response) => response.text())
      .then((text) => {});
  }
};

export const convertFormElementsToURL = (formElements) => {
  let splitter = " ";
  if (document.getElementById("Splitter") !== null) {
    splitter = document.getElementById("Splitter").textContent;
  }

  const tmp_array = formElements;
  let ret_str = "";
  for (let i = 0; i < tmp_array.length; i++) {
    // console.log(tmp_array[i]);
    const name = tmp_array[i].name;
    let value = tmp_array[i].value;
    // Skip if value is empty
    if (value === "") {
      continue;
    }

    // value != name => "name + splitter + value" is passed
    // value == name => "value" is passed
    if (value !== name) {
      value = name + splitter + value;
    }
    ret_str += i + "=" + value + "&";
  }
  return ret_str;
};

export const UpdateExpectedCommand = () => {
  if (document.forms[0] === undefined) {
    return;
  }
  const _form_elements = document.forms[0].elements;
  const query = convertFormElementsToURL(_form_elements);
  const displayElm = document.getElementById("ExpectedCommand");
  if (displayElm === null) {
    return;
  }
  // Generate displayed content
  const cmd_tmp = ("&" + query).replace(/&[0-9]=/g, " ");
  const cmd = cmd_tmp.replace(/(.+)&$/, "$1"); // remove last '&'
  const header = "<h4>Command to be executed</h4>";
  const content = "<p>" + cmd + "</p>";
  displayElm.innerHTML = header + content;
};
