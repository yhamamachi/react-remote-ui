import * as utils from "../utils";

export const CviiDemo = () => {
    return (
      <>
        <h2>CviiDemo</h2>
        <p>
          <button onClick={powerOn}>Power ON</button>
          <button onClick={powerOff}>Power OFF</button>
        </p>
        <br />
        <button onClick={startCviiDemo}>Start Demo</button>
        <br />
        <br />
        <button onClick={stopCviiDemo}>Stop Demo</button>
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

const startCviiDemo = () => {
// Change Window Layout
document.getElementById("SetCviiDemoPane").click();
// Run command
const hostname = window.location.hostname;
const cmd = "0=~/run_DrivingSimulatorPlayer.sh&1=start"
const url = "http://" + hostname + ":8000/command?" + cmd;
utils.get_req(url);
}

const stopCviiDemo = () => {
  const hostname = window.location.hostname;
  const cmd = "0=~/run_DrivingSimulatorPlayer.sh&1=stop"
  const url = "http://" + hostname + ":8000/command?" + cmd;
  utils.get_req(url);
}
