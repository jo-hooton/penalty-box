import React, { useState, useEffect } from "react";
import useCounter from "../hooks/useCounter";

const SkaterTimer = props => {
  const { count, up, down, reset, startCount } = useCounter(30);
  const [active, setActive] = useState(false);
  const [extraSeconds, setExtraSeconds] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  const resetTimer = () => {
    setActive(false);
    reset();
  };

  const alterPenaltyTime = () => {
    extraSeconds ? down(30) : up(30);
    setExtraSeconds(!extraSeconds);
  };

  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        down();
      }, 1000);
    } else if (!active) {
      clearInterval(interval);
    }
    if (count <= 0 && active) {
      reset();
      setActive(false);
    }
    return () => clearInterval(interval);
  }, [active, count]);

  const switchToOtherJammer = () => {
    props.switchToOtherJammer(count, extraSeconds);
  };

  useEffect(() => {
    if (!props.jammerSwitch) {
      switchToOtherJammer();
      resetTimer();
    }
  }, [props.jammerSwitch]);

  return (
    <>
      <p>Timer</p>
      <time>{count}</time>
      <button onClick={toggleActive}>{active ? `Pause` : `Start`}</button>
      <button onClick={alterPenaltyTime}>
        {extraSeconds ? `- 30` : `+ 30`}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};

export default SkaterTimer;
