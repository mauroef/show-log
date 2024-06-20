import {
  IoPlayCircleOutline,
  IoPauseCircleOutline,
  IoVolumeMuteOutline,
  IoVolumeHighOutline,
} from 'react-icons/io5';
import styles from './slider.module.css';

const Controls = ({ isPlaying, isMuted, togglePlayPause, toggleMute }) => (
  <div className={styles['video__controls']}>
    <button onClick={togglePlayPause}>
      {isPlaying ? (
        <IoPauseCircleOutline size={30} />
      ) : (
        <IoPlayCircleOutline size={30} />
      )}
    </button>
    <button onClick={toggleMute}>
      {isMuted ? (
        <IoVolumeMuteOutline size={30} />
      ) : (
        <IoVolumeHighOutline size={30} />
      )}
    </button>
  </div>
);

export default Controls;
