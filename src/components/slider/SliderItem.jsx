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
        isMobile ? 'aspect-[2/3]' : 'aspect-[16/9]'
      }`}
    >
      <Image
        alt={item.title}
        className={`mask-gradient absolute w-full h-auto ${
          isMobile ? 'aspect-[2/3]' : 'aspect-[16/9]'
        }`}
        height={isMobile ? 1920 : 720}
        priority={index === 0}
        src={`${IMAGE_URLS.BASE_LEAD}${
          isMobile ? item.image.portrait : item.image.landscape
        }`}
        width={1280}
      />
      {!isMobile && (
        <div className='w-full h-full'>
          <div className='absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent '></div>
          <motion.h2
            className='text-white/90 text-6xl absolute left-12 bottom-14'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ minWidth: 'calc(100% - 96px)' }}
          >
            <a href={item.url} className='hover:underline'>
              {item.title}
            </a>
          </motion.h2>
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
