import { useState, useEffect } from 'react';

const useParallax = (initialY = 0, factor = 0.5) => {
  const [offsetY, setOffsetY] = useState(initialY);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * factor);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [factor]);

  return offsetY;
};

export default useParallax;
