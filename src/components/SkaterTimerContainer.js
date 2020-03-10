import React from "react";
import { useState } from "react";
import useInterval from "../hooks/useInterval.js";
import SkaterTimer from "./SkaterTimer";
import Jammers from "./Jammers";

const SkaterTimerContainer = () => {
  const [jammerSwitch, setJammerSwitch] = useState(true);
  const [currentJammer, setCurrentJammer] = useState(null);
  const [jammerSwitchTime, setJammerSwitchTime] = useState(0);

  const [skaters, setSkaters] = useState([
    {
      id: 3,
      teamId: 1,
      type: "BLOCKER",
      time: 30,
      active: false
    },
    {
      id: 4,
      teamId: 1,
      type: "BLOCKER",
      time: 30,
      active: false
    },
    {
      id: 1,
      teamId: 1,
      type: "JAMMER",
      time: 30,
      active: false
    },
    {
      id: 2,
      teamId: 2,
      type: "JAMMER",
      time: 30,
      active: false
    },
    {
      id: 5,
      teamId: 2,
      type: "BLOCKER",
      time: 30,
      active: false
    },
    {
      id: 6,
      teamId: 2,
      type: "BLOCKER",
      time: 30,
      active: false
    }
  ]);

  const switchJammers = () => {
    currentJammer == 1 ? setCurrentJammer(2) : setCurrentJammer(1);
  };

  const toggleSkaterActive = skaterId => {
    let otherActiveJammer;
    let penaltyTime = 30;

    let newSkaters = skaters.map(s => {
      if (s.id !== skaterId) return s;

      if (s.type === "JAMMER") {
        otherActiveJammer = skaters.find(
          s => s.type === "JAMMER" && s.active && s.id !== skaterId
        );
        console.log(otherActiveJammer);
        // penaltyTime = otherActiveJammer.time;
      }

      return {
        ...s,
        active: !s.active,
        time: penaltyTime
      };
    });

    if (otherActiveJammer) {
      newSkaters = newSkaters.map(s => {
        if (s.id === skaterId)
          return {
            ...s,
            time: 30 - otherActiveJammer.time
          };
        if (s.id !== otherActiveJammer.id) return s;

        return {
          ...s,
          active: !s.active,
          time: 30
        };
      });
    }

    setSkaters(newSkaters);
  };

  const changeSkaterTime = skaterId => {
    setSkaters(
      skaters.map(s => {
        if (s.id !== skaterId) return s;

        return {
          ...s,
          time: s.time - 1
        };
      })
    );
  };

  const toggleSkaterTimer = skaterId => {
    const skater = skaters.find(s => s.id === skaterId);
    let interval = null;

    if (skater.active) {
      interval = setInterval(() => {
        console.log(skater.time - 1);
        changeSkaterTime(skater.time - 1);
      }, 1000);
    } else if (skater.time <= 0 && skater.active) {
      resetSkaterTimer(skaterId);
    } else {
      clearInterval(interval);
      resetSkaterTimer(skaterId);
    }
  };

  //   return () => clearInterval(interval);

  const resetSkaterTimer = skaterId => {
    setSkaters(
      skaters.map(s => {
        if (s.id !== skaterId) return s;

        return {
          ...s,
          active: false,
          time: 30
        };
      })
    );
  };

  const alterSkaterPenaltyTime = (skaterId, increment) => {
    setSkaters(
      skaters.map(s => {
        if (s.id !== skaterId) return s;

        return {
          ...s,
          time: s.time + increment
        };
      })
    );
  };

  const addSkaterPenalty = skaterId => alterSkaterPenaltyTime(skaterId, 30);
  const subtractSkaterPenalty = skaterId =>
    alterSkaterPenaltyTime(skaterId, -30);

  return (
    <>
      <h1>Penalty Box Manager</h1>
      <button onClick={switchJammers}>Jammer Switch</button>
      {skaters.map(skater => (
        <SkaterTimer
          key={skater.id}
          {...skater}
          toggleActive={() => toggleSkaterActive(skater.id)}
          changeTime={() => changeSkaterTime(skater.id)}
          resetTimer={() => resetSkaterTimer(skater.id)}
          addPenalty={() => addSkaterPenalty(skater.id)}
          subtractPenalty={() => subtractSkaterPenalty(skater.id)}
        />
      ))}
    </>
  );
};

export default SkaterTimerContainer;
