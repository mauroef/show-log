import { motion } from 'framer-motion';
import Image from 'next/image';
import { IMAGE_URLS } from '@/utils/constants';
import VideoPlayer from './VideoPlayer';
import styles from './slider.module.css';

const Slide = ({
  item,
  isMobile,
  isCurrent,
  playTrailer,
  isPlaying,
  isMuted,
  onVideoEnd,
  togglePlayPause,
  toggleMute,
}) => (
  <motion.div className={`${styles['player-wrapper']} 2xl:rounded-b-2xl`}>
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{
        opacity: playTrailer && isCurrent ? 0 : 1,
        scale: playTrailer && isCurrent ? 1.3 : 1,
      }}
      transition={{ duration: 0.5 }}
      className={`${styles['image-wrapper']} 2xl:rounded-b-2xl`}
    >
      <Image
        alt={item.title}
        className={styles['player-image']}
        fill
        src={`${IMAGE_URLS.BASE_LEAD}${
          isMobile ? item.image.portrait : item.image.landscape
        }`}
      />
      {!isMobile && (
        <div className='absolute bottom-10 left-12 leading-normal max-w-2xl'>
          <h2 className='text-white text-6xl'>{item.title || ''}</h2>
        </div>
      )}
    </motion.div>
    {playTrailer && isCurrent && (
      <VideoPlayer
        item={item}
        isPlaying={isPlaying}
        isMuted={isMuted}
        onVideoEnd={onVideoEnd}
        togglePlayPause={togglePlayPause}
        toggleMute={toggleMute}
      />
    )}
  </motion.div>
);

export default Slide;
