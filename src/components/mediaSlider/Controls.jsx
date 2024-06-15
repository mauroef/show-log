import {
  IoPlayCircleOutline,
  IoPauseCircleOutline,
  IoVolumeMuteOutline,
  IoVolumeHighOutline,
} from 'react-icons/io5';
import styles from './media.module.css';

const Controls = ({ isPlaying, isMuted, togglePlayPause, toggleMute }) => (
  <div className={styles['video__controls']}>
    <button onClick={togglePlayPause}>
      {isPlaying ? <IoPauseCircleOutline /> : <IoPlayCircleOutline />}
    </button>
    <button onClick={toggleMute}>
      {isMuted ? <IoVolumeMuteOutline /> : <IoVolumeHighOutline />}
    </button>
  </div>
);

export default Controls;
