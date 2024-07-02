import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import Controls from './Controls';
import { VIDEO_URLS } from '@/utils/constants';

const VideoPlayer = ({
  item,
  isPlaying,
  isMuted,
  onVideoEnd,
  togglePlayPause,
  toggleMute,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className={`bg-black relative top-0 left-0 2xl:rounded-b-2xl aspect-[2/3] md:aspect-[1280/720]`}
  >
    <ReactPlayer
      className='pointer-events-none'
      controls={false}
      height='100%'
      muted={isMuted}
      onEnded={onVideoEnd}
      playing={isPlaying}
      playsInline
      url={`${VIDEO_URLS.YOUTUBE}${item.video.key}?controls=0&modestbranding=1&rel=0&iv_load_policy=3`}
      width='100%'
    />
    <Controls
      isPlaying={isPlaying}
      isMuted={isMuted}
      togglePlayPause={togglePlayPause}
      toggleMute={toggleMute}
    />
  </motion.div>
);

export default VideoPlayer;
