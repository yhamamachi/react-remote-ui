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
