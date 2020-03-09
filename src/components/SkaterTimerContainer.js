import React from "react";
import SkaterTimer from "./SkaterTimer";
import Jammers from "./Jammers";

const SkaterTimerContainer = () => {
  return (
    <>
      <h1>Skater Timer Container</h1>
      <SkaterTimer
        jammerSwitch={true}
        setJammerSwitch={null}
        switchToOtherJammer={null}
      />
      <SkaterTimer
        jammerSwitch={true}
        setJammerSwitch={null}
        switchToOtherJammer={null}
      />
      <div>
        <Jammers />
      </div>
      <SkaterTimer
        jammerSwitch={true}
        setJammerSwitch={null}
        switchToOtherJammer={null}
      />
      <SkaterTimer
        jammerSwitch={true}
        setJammerSwitch={null}
        switchToOtherJammer={null}
      />
    </>
  );
};

export default SkaterTimerContainer;
