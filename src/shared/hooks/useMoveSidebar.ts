import { useState } from "react";

export function useMoveSidebar() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleHideSidebar = () => {
    if (isActive) setIsActive(false);
    else setIsActive(true);
  };

  return { isActive, handleHideSidebar };
}
