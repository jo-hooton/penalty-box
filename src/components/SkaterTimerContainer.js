import React, { useState } from "react";
import SkaterTimer from "./SkaterTimer";

const SkaterTimerContainer = () => {
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

  const toggleSkaterActive = skaterId => {
    let otherActiveJammer;

    let newSkaters = skaters.map(s => {
      if (s.id !== skaterId) return s;

      if (s.type === "JAMMER") {
        otherActiveJammer = skaters.find(
          s => s.type === "JAMMER" && s.active && s.id !== skaterId
        );
      }

      return {
        ...s,
        active: !s.active
      };
    });

    if (otherActiveJammer) {
      newSkaters = newSkaters.map(s => {
        console.log(otherActiveJammer.time);
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
    setSkaters(skaters =>
      skaters.map(s => {
        if (s.id !== skaterId) return s;

        return {
          ...s,
          time: s.time - 1
        };
      })
    );
  };

  const resetSkaterTimer = skaterId => {
    setSkaters(skaters =>
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

  const resetTimers = () => {
    setSkaters(skaters =>
      skaters.map(s => {
        return {
          ...s,
          active: false,
          time: 30
        };
      })
    );
  };

  // const alterSkaterPenaltyTime = (skaterId, increment) => {
  //   setSkaters(
  //     skaters.map(s => {
  //       if (s.id !== skaterId) return s;

  //       return {
  //         ...s,
  //         time: s.time + increment
  //       };
  //     })
  //   );
  // };

  // const addSkaterPenalty = skaterId => alterSkaterPenaltyTime(skaterId, 30);
  // const subtractSkaterPenalty = skaterId =>
  //   alterSkaterPenaltyTime(skaterId, -30);

  return (
    <>
      <div className="skater-timers">
        {skaters.map(skater => (
          <SkaterTimer
            key={skater.id}
            {...skater}
            toggleActive={() => toggleSkaterActive(skater.id)}
            changeTime={() => changeSkaterTime(skater.id)}
            resetTimer={() => resetSkaterTimer(skater.id)}
          />
        ))}
      </div>
      <div className="reset-all-button" onClick={resetTimers}>
        Reset All
      </div>
    </>
  );
};

export default SkaterTimerContainer;
