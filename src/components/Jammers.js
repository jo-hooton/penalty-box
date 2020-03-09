import React, { useState, useEffect } from "react";
import SkaterTimer from "./SkaterTimer";

const Jammers = () => {
  const [jammerSwitch, setJammerSwitch] = useState(false);
  const [jammerSwitchTime, setJammerSwitchTime] = useState(0);
  //   const [jammerSwitchTime, setJammerSwitchTime] = useState(0);

  const jammerSwitching = () => {
    setJammerSwitch(!jammerSwitch);
  };

  const switchToOtherJammer = (count, extraSeconds) => {
    if (!extraSeconds) {
      setJammerSwitchTime(count);
    } else {
      setJammerSwitchTime(count - 30);
    }
    setJammerSwitch(true);
  };

  return (
    <>
      <button onClick={jammerSwitching}>Jammer Switch</button>
      <SkaterTimer
        jammer={true}
        jammerSwitch={jammerSwitch}
        setJammerSwitch={setJammerSwitch}
        switchToOtherJammer={switchToOtherJammer}
      />
      <SkaterTimer
        jammer={true}
        jammerSwitch={jammerSwitch}
        setJammerSwitch={setJammerSwitch}
        switchToOtherJammer={switchToOtherJammer}
      />
    </>
  );
};

export default Jammers;
