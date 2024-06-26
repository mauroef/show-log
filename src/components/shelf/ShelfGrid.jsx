'use client';

import { useRef, useState, useEffect } from 'react';
import { SHELF } from '@/utils/constants';
import ShelfItem from '@/components/shelf/ShelfItem';
import Navigation from '@/components/shelf/Navigation';

const ShelfGrid = ({ headline, media, settings }) => {
  const sliderRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const updateArrowsVisibility = () => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
      }
    };

    updateArrowsVisibility();
    window.addEventListener('resize', updateArrowsVisibility);

    if (sliderRef.current) {
      sliderRef.current.addEventListener('scroll', updateArrowsVisibility);
    }

    return () => {
      window.removeEventListener('resize', updateArrowsVisibility);
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('scroll', updateArrowsVisibility);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -SHELF.SCROLL_AMOUNT,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: SHELF.SCROLL_AMOUNT,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className='md:px-6 relative'>
      <h2 className='text-2xl font-bold px-6 py-3 text-white/90'>{headline}</h2>
      <div className='w-full overflow-hidden md:px-6'>
        <ul
          className='grid gap-3 auto-cols-[200px] grid-flow-col overflow-x-auto snap-x px-6 pb-3 md:px-0 md:gap-5 md:auto-cols-three lg:auto-cols-four 2xl:auto-cols-five'
          ref={sliderRef}
        >
          {media.map((mediaItem) => (
            <li className='md:snap-start' key={mediaItem.id}>
              <ShelfItem item={mediaItem} settings={settings} />
            </li>
          ))}
        </ul>
      </div>
      <Navigation
        onLeftClick={scrollLeft}
        onRightClick={scrollRight}
        showLeftArrow={showLeftArrow}
        showRightArrow={showRightArrow}
      />
    </section>
  );
};

export default ShelfGrid;
