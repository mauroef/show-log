'use client';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IMAGE_URLS, VIDEO_URLS } from '@/utils/constants';
import styles from './movie.module.css';

const MovieSlider = ({ movies }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playTrailer, setPlayTrailer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlayTrailer(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      setPlayTrailer(false);
    };
  }, [currentSlide]);

  const settings = {
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
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
    <Slider {...settings}>
      {movies.map((movie, index) => (
        <div key={movie.id} className={styles['player-wrapper']}>
          {!playTrailer || currentSlide !== index ? (
            <Image
              alt={movie.title}
              className={styles['player-image']}
              fill
              src={`${IMAGE_URLS.BASE_LEAD}${movie.poster}`}
            />
          ) : (
            <ReactPlayer
              className={styles['react-player']}
              controls={false}
              height='100%'
              muted={true}
              playing={true}
              url={`${VIDEO_URLS.YOUTUBE}${movie.video.key}`}
              width='100%'
            />
          )}
        </div>
      ))}
    </Slider>
  );
};

export default MovieSlider;
