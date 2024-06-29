import { motion } from 'framer-motion';
import Image from 'next/image';
import { IMAGE_URLS } from '@/utils/constants';
import VideoPlayer from './VideoPlayer';

const SliderItem = ({
  index,
  isCurrent,
  isMobile,
  isMuted,
  isPlaying,
  item,
  onVideoEnd,
  playTrailer,
  toggleMute,
  togglePlayPause,
}) => (
  <motion.div>
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{
        opacity: playTrailer && isCurrent ? 0 : 1,
        scale: playTrailer && isCurrent ? 1.3 : 1,
      }}
      transition={{ duration: 0.5 }}
      className={`relative ${playTrailer && isCurrent ? 'hidden' : 'block'} ${
        isMobile ? 'aspect-[1280/1920]' : 'aspect-[1280/720]'
      }`}
    >
      <Image
        alt={item.title}
        className={`mask-gradient absolute w-full h-auto ${
          isMobile ? 'aspect-[1280/1920]' : 'aspect-[1280/720]'
        }`}
        height={isMobile ? 1920 : 720}
        priority={index === 0}
        src={`${IMAGE_URLS.BASE_LEAD}${
          isMobile ? item.image.portrait : item.image.landscape
        }`}
        width={1280}
      />
      {!isMobile && (
        <div>
          <div className='absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent '></div>
          <div className='absolute bottom-14 left-12 leading-normal max-w-2xl '>
            <h2 className='text-white text-6xl'>{item.title}</h2>
          </div>
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

export default SliderItem;
