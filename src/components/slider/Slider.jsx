'use client';

import { useEffect, useRef, useState } from 'react';
import { default as SlickSlider } from 'react-slick';
import { motion } from 'framer-motion';
import useIsMobile from '@/hooks/useIsMobile';
import { SLIDER } from '@/utils/constants';
import SliderItem from './SliderItem';

const Skeleton = ({ className }) => (
  <div
    className={`animate-pulse bg-neutral-600 w-full aspect-[2/3] md:aspect-[16/9] 2xl:rounded-b-2xl ${className}`}
  ></div>
);

const Slider = ({ mediaItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playTrailer, setPlayTrailer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlayTrailer(true);
      setIsPlaying(true);
    }, SLIDER.SWITCH_TO_VIDEO_DURATION);

    return () => {
      clearTimeout(timer);
      setPlayTrailer(false);
      setIsPlaying(false);
    };
  }, [currentSlide]);

  const handleVideoEnd = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    onInit: () => {
      setIsLoaded(true);
    },
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
      setPlayTrailer(false);
      setIsPlaying(false);
      setIsMuted(true);
    },
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: currentSlide === i ? 1.5 : 1,
          opacity: currentSlide === i ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
        className='bg-white rounded-full block h-[10px] w-[10px] opacity-50'
      />
    ),
  };

  return (
    <>
      {!isLoaded && <Skeleton />}
      <SlickSlider
        ref={sliderRef}
        {...settings}
        className={`aspect-[2/3] md:aspect-[16/9] ${
          isLoaded ? 'block' : 'hidden'
        } `}
      >
        {mediaItems.map((item, index) => (
          <SliderItem
            isCurrent={currentSlide === index}
            isMobile={isMobile}
            isMuted={isMuted}
            isPlaying={isPlaying}
            item={item}
            index={index}
            key={item.id}
            onVideoEnd={handleVideoEnd}
            playTrailer={playTrailer}
            toggleMute={() => setIsMuted((prev) => !prev)}
            togglePlayPause={() => setIsPlaying((prev) => !prev)}
          />
        ))}
      </SlickSlider>
    </>
  );
};

export default Slider;
