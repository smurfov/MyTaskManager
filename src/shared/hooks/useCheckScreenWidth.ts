import { useState, useEffect } from 'react';

const TABLET_BREAKPOINT = 768;

export function useCheckScreenWidth() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= TABLET_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= TABLET_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}
