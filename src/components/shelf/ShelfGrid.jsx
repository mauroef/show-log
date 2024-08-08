'use client';

import { useRef, useState, useEffect } from 'react';
import { SHELF } from '@/utils/constants';
import ShelfCast from '@/components/shelf/ShelfCast';
import ShelfItem from '@/components/shelf/ShelfItem';
import ShelfPoster from '@/components/shelf/ShelfPoster';
import Navigation from '@/components/shelf/Navigation';

const ShelfGrid = ({
  headline,
  isCast = false,
  isPoster = false,
  media,
  settings,
}) => {
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

  let gridClasses =
    'auto-cols-[200px] md:auto-cols-three lg:auto-cols-four 2xl:auto-cols-five';

  if (isCast) {
    gridClasses =
      'auto-cols-[150px] md:auto-cols-[200px] md:auto-cols-five lg:auto-cols-six xl:auto-cols-seven 2xl:auto-cols-eight';
  }

  if (isPoster) {
    gridClasses = 'auto-cols-[150px] md:auto-cols-six lg:auto-cols-seven 2xl:auto-cols-eight';
  }

  return (
    <section className='md:px-6 relative'>
      <h3 className='text-2xl font-bold px-6 py-3 text-white/90'>{headline}</h3>
      <div className='w-full overflow-hidden md:px-6'>
        <ul
          className={`grid gap-3 grid-flow-col md:px-0 md:gap-5 overflow-x-auto snap-x px-6 pb-3 ${gridClasses}`}
          ref={sliderRef}
        >
          {media.map((mediaItem) => (
            <li className='md:snap-start' key={mediaItem.id}>
              {isPoster && <ShelfPoster showId={settings.showId || 0} item={mediaItem} />}
              {isCast && <ShelfCast item={mediaItem} />}
              {!isPoster && !isCast && (
                <ShelfItem item={mediaItem} settings={settings} />
              )}
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
