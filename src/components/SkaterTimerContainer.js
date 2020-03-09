import React from "react";
import { useState } from "react";
import SkaterTimer from "./SkaterTimer";
import Jammers from "./Jammers";

const SkaterTimerContainer = () => {
  const [jammerSwitch, setJammerSwitch] = useState(false);
  const [jammerSwitchTime, setJammerSwitchTime] = useState(0);

  const jammerSwitching = () => {
    setJammerSwitch(!jammerSwitch);
  };

  const switchJammers = (count, extraSeconds, jammer) => {
    if (!extraSeconds) {
      setJammerSwitchTime(count);
    } else {
      setJammerSwitchTime(count - 30);
    }
    setJammerSwitch(true);
  };
  return (
    <>
      <h1>Skater Timer Container</h1>
      <SkaterTimer jammer={false} />
      <SkaterTimer jammer={false} />
      <SkaterTimer
        jammer={1}
        jammerSwitchTime={jammerSwitchTime}
        jammerSwitch={jammerSwitch}
        setJammerSwitch={setJammerSwitch}
        switchJammers={switchJammers}
      />
      <button onClick={jammerSwitching}>Jammer Switch</button>
      <SkaterTimer
        jammer={2}
        jammerSwitchTime={jammerSwitchTime}
        jammerSwitch={jammerSwitch}
        setJammerSwitch={setJammerSwitch}
        switchJammers={switchJammers}
      />
      <SkaterTimer jammer={false} />
      <SkaterTimer jammer={false} />
    </>
  );
};

export default SkaterTimerContainer;
