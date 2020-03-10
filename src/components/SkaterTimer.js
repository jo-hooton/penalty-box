import React, { useState, useEffect } from "react";
import useCounter from "../hooks/useCounter";
import useInterval from "../hooks/useInterval.js";

const SkaterTimer = props => {
  // const { count, setCount, up, down, reset, startCount } = useCounter(30);

  // const [extraSeconds, setExtraSeconds] = useState(false);

  // const alterPenaltyTime = () => {
  //   extraSeconds ? down(30) : up(30);
  //   setExtraSeconds(!extraSeconds);
  // };

  // useEffect(() => {
  //   let interval = null;
  //   if (active) {
  //     props.jammer && props.setCurrentJammer(props.jammer);
  //     interval = setInterval(() => {
  //       down();
  //     }, 1000);
  //   } else if (!active) {
  //     clearInterval(interval);
  //   }
  //   if (count <= 0 && active) {
  //     reset();
  //     setActive(false);
  //   }
  //   return () => clearInterval(interval);
  // }, [active, count]);

  // const switchToOtherJammer = () => {
  //   extraSeconds
  //     ? props.setJammerSwitchTime(count - 30)
  //     : props.setJammerSwitchTime(count);
  //   props.switchJammers();
  // };

  // useEffect(() => {
  //   if (props.jammer && props.currentJammer === props.jammer) {
  //     if (active) {
  //       switchToOtherJammer();
  //       resetTimer();
  //     } else {
  //       setActive(true);
  //     }
  //   }
  // }, [props.currentJammer]);

  // useEffect(() => {
  //   if (props.currentJammer === props.jammer) {
  //     resetTimer();
  //   } else {
  //   }
  // }, [props.currentJammer]);
  const {
    key,
    type,
    active,
    toggleActive,
    resetTimer,
    addPenalty,
    subtractPenalty,
    time,
    teamId,
    changeTime
  } = props;

  useInterval(() => {
    if (active && time > 0) changeTime(key);
    if (time <= 0) resetTimer();
  }, 1000);

  // const { count, setCount, up, down, reset, startCount } = useCounter(30);
  return (
    <>
      <div class="skater-timer">
        <p>Team {teamId}</p>
        <p>{type}</p>
        <time class="remaining-time">{time}</time>
        <div class="start-pause-button" onClick={toggleActive}>
          {active ? `Pause` : `Start`}
        </div>
        {/* <button onClick={subtractPenalty}>- 30</button>
        <button onClick={addPenalty}>+ 30</button> */}
        <div class="reset-button" onClick={resetTimer}>
          Reset
        </div>
      </div>
    </>
  );
};

export default SkaterTimer;
