import {
  IoPlayCircleOutline,
  IoPauseCircleOutline,
  IoVolumeMuteOutline,
  IoVolumeHighOutline,
} from 'react-icons/io5';

const Controls = ({ isPlaying, isMuted, togglePlayPause, toggleMute }) => (
  <div className='absolute bottom-12 md:bottom-16 right-8 md:right-8 md:left-auto md:transform-none md:text-left left-1/2 transform -translate-x-1/2 text-center'>
    <button
      className='border-none text-white p-2 cursor-pointer'
      onClick={togglePlayPause}
    >
      {isPlaying ? (
        <IoPauseCircleOutline size={30} />
      ) : (
        <IoPlayCircleOutline size={30} />
      )}
    </button>
    <button
      className='border-none text-white p-2 cursor-pointer'
      onClick={toggleMute}
    >
      {isMuted ? (
        <IoVolumeMuteOutline size={30} />
      ) : (
        <IoVolumeHighOutline size={30} />
      )}
    </button>
  </div>
);

export default Controls;
