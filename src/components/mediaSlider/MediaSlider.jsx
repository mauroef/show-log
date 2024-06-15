'use client';

import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import useIsMobile from '@/hooks/useIsMobile';
import { SLIDER } from '@/utils/constants';
import Slide from './Slide';
import styles from './media.module.css';

const MediaSlider = ({ mediaItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playTrailer, setPlayTrailer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
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
        className={styles['custom-dot']}
      />
    ),
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {mediaItems.map((item, index) => (
        <Slide
          key={item.id}
          item={item}
          isMobile={isMobile}
          isCurrent={currentSlide === index}
          playTrailer={playTrailer}
          isPlaying={isPlaying}
          isMuted={isMuted}
          onVideoEnd={handleVideoEnd}
          togglePlayPause={() => setIsPlaying((prev) => !prev)}
          toggleMute={() => setIsMuted((prev) => !prev)}
        />
      ))}
    </Slider>
  );
};

export default MediaSlider;