import { useEffect, useState } from 'react';

const useHoverSupported = (): boolean => {
  const [isHoverSupported, setIsHoverSupported] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');

    const updateHoverSupport = () => {
      setIsHoverSupported(mediaQuery.matches);
    };

    // Initial check
    updateHoverSupport();

    // Listen for changes
    mediaQuery.addEventListener('change', updateHoverSupport);

    // Clean up
    return () => {
      mediaQuery.removeEventListener('change', updateHoverSupport);
    };
  }, []);

  return isHoverSupported;
};

export default useHoverSupported;
