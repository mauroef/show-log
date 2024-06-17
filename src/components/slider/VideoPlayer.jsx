import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import Controls from './Controls';
import { VIDEO_URLS } from '@/utils/constants';
import styles from './slider.module.css';

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
    className={styles['video-wrapper']}
  >
    <ReactPlayer
      className={styles['react-player']}
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
