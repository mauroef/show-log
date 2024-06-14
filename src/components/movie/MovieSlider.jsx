'use client';

import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  IoPlayCircleOutline,
  IoPauseCircleOutline,
  IoVolumeMuteOutline,
  IoVolumeHighOutline,
} from 'react-icons/io5';
import { IMAGE_URLS, VIDEO_URLS } from '@/utils/constants';
import useIsMobile from '@/hooks/useIsMobile';
import styles from './movie.module.css';

const MovieSlider = ({ movies }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playTrailer, setPlayTrailer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // cambiar despues a true
  const [isMuted, setIsMuted] = useState(true);
  const isMobile = useIsMobile();
  const sliderRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlayTrailer(true);
      setIsPlaying(true);
    }, 5000);

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

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {movies.map((movie, index) => (
        <motion.div
          key={movie.id}
          className={styles['player-wrapper']}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              opacity: playTrailer && currentSlide === index ? 0 : 1,
              scale: playTrailer && currentSlide === index ? 1.3 : 1,
            }}
            transition={{ duration: 0.5 }}
            className={styles['image-wrapper']}
          >
            <Image
              alt={movie.title}
              className={styles['player-image']}
              fill
              src={`${IMAGE_URLS.BASE_LEAD}${
                isMobile ? movie.image.portrait : movie.image.landscape
              }`}
            />
          </motion.div>
          {playTrailer && currentSlide === index && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={styles['video-wrapper']}
            >
              {console.log('video intace', movie.title)}
              <ReactPlayer
                ref={playerRef}
                className={styles['react-player']}
                controls={false}
                height='100%'
                muted={isMuted}
                onEnded={handleVideoEnd}
                playing={isPlaying}
                playsInline
                url={`${VIDEO_URLS.YOUTUBE}${movie.video.key}?controls=0&modestbranding=1&rel=0&iv_load_policy=3`}
                width='100%'
              />
              <div className={styles['controls']}>
                <button onClick={togglePlayPause}>
                  {isPlaying ? (
                    <IoPauseCircleOutline />
                  ) : (
                    <IoPlayCircleOutline />
                  )}
                </button>
                <button onClick={toggleMute}>
                  {isMuted ? <IoVolumeMuteOutline /> : <IoVolumeHighOutline />}
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </Slider>
  );
};

export default MovieSlider;
