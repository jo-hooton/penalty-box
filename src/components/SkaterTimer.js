import React from "react";
import useInterval from "../hooks/useInterval.js";

const SkaterTimer = props => {
  const {
    type,
    active,
    toggleActive,
    resetTimer,
    time,
    teamId,
    changeTime
  } = props;

  useInterval(() => {
    if (active && time > 0) changeTime();
    if (time <= 0) resetTimer();
  }, 1000);

  return (
    <>
      <div className="skater-timer">
        <p>Team {teamId}</p>
        <p>{type}</p>
        <time className="remaining-time">{time}</time>
        <div className="start-pause-button" onClick={toggleActive}>
          {active ? `Pause` : `Start`}
        </div>
        <div className="reset-button" onClick={resetTimer}>
          Reset
        </div>
      </div>
    </>
  );
};

export default SkaterTimer;
