import { useState } from "react";

function ToggleForm({ left, right }) {
  const [signal, setSignal] = useState(true);
  const onClickSwitch = () => {
    setSignal(!signal);
  };
  return (
    <div className="form">
      <div className="switch_name">
        <span>{left}</span>
        <span>{right}</span>
      </div>
      <div
        className={"switch_box " + (signal ? "on" : "off")}
        onClick={onClickSwitch}
      >
        <div className="switch"></div>
      </div>
    </div>
  );
}

export default ToggleForm;
