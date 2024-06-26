'use client';

import { useRef, useState, useEffect } from 'react';
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from 'react-icons/io5';
import ShelfItem from '@/components/shelf/ShelfItem';

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
      sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
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
      <nav>
        <button
          className={`hidden h-48 md:block absolute left-0 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white/90 p-2 rounded-full transition-opacity duration-300 ${
            showLeftArrow ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={scrollLeft}
        >
          <IoArrowBackCircleOutline size={30} className='transition-text duration-300'/>
        </button>
        <button
          className={`hidden h-48 md:block absolute right-0 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white/90 p-2 rounded-full transition-opacity duration-300 ${
            showRightArrow ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={scrollRight}
        >
          <IoArrowForwardCircleOutline size={30} className='transition-text duration-300'/>
        </button>
      </nav>
    </section>
  );
};

export default ShelfGrid;
