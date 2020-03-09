import { useState } from "react";

const useActive = () => {
  const [active, setActive] = useState(false);

  return { count, up, down, reset, startCount };
};

export default useActive;
