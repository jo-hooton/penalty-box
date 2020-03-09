import React, { useState, useEffect } from "react";
import SkaterTimer from "./SkaterTimer";

const Jammers = () => {
  const [jammerSwitch, setJammerSwitch] = useState(false);
  const [jammerSwitchTime, setJammerSwitchTime] = useState(0);
  //   const [jammerSwitchTime, setJammerSwitchTime] = useState(0);

  const jammerSwitching = () => {
    setJammerSwitch(!jammerSwitch);
  };

  const switchJammers = (count, extraSeconds) => {
    if (!extraSeconds) {
      setJammerSwitchTime(count);
    } else {
      setJammerSwitchTime(count - 30);
    }
    setJammerSwitch(true);
  };

  return (
    <>
      <SkaterTimer
        jammer={true}
        jammerSwitch={jammerSwitch}
        setJammerSwitch={setJammerSwitch}
        switchJammers={switchJammers}
      />
      <div> ----------------- </div>
      <div> ----------------- </div>
      <button onClick={jammerSwitching}>Jammer Switch</button>
      <div> ----------------- </div>
      <div> ----------------- </div>
      <SkaterTimer
        jammer={true}
        jammerSwitch={jammerSwitch}
        setJammerSwitch={setJammerSwitch}
        switchJammers={switchJammers}
      />
    </>
  );
};

export default Jammers;
