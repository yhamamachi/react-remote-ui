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

export const convertFormElementsToURL = (formElements, splitter = "=") => {
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

    // value != name => "name + splitter + value" is passed
    // value == name => "value" is passed
    if (value !== name) {
      value = name + splitter + value;
    }
    ret_str += i + "=" + value + "&";
  }
  return ret_str;
};
