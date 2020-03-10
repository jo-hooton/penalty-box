import React, { useState, useEffect } from "react";
import useCounter from "../hooks/useCounter";
import useInterval from "../hooks/useInterval.js";

const SkaterTimer = props => {
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

  return (
    <>
      <div class="skater-timer">
        <p>Team {teamId}</p>
        <p>{type}</p>
        <time class="remaining-time">{time}</time>
        <div class="start-pause-button" onClick={toggleActive}>
          {active ? `Pause` : `Start`}
        </div>
        <div class="reset-button" onClick={resetTimer}>
          Reset
        </div>
      </div>
    </>
  );
};

export default SkaterTimer;
