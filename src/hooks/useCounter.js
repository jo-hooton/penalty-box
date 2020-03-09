import { useState } from "react";

const useCounter = (startCountEntry = 0) => {
  const [count, setCount] = useState(startCountEntry);
  const up = (amount = 1) => setCount(count => count + amount);
  const down = (amount = 1) => setCount(count => count - amount);
  const reset = () => setCount(startCountEntry);
  const startCount = startCountEntry;

  return { count, setCount, up, down, reset, startCount };
};

export default useCounter;
