import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from 'react-icons/io5';

const Navigation = ({
  onRightClick,
  onLeftClick,
  showLeftArrow,
  showRightArrow,
}) => (
  <nav>
    <button
      className={`hidden h-48 md:block absolute left-0 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white/90 p-2 rounded-full transition-opacity duration-300 ${
        showLeftArrow ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onLeftClick}
    >
      <IoArrowBackCircleOutline
        size={30}
        className='transition-text duration-300'
      />
    </button>
    <button
      className={`hidden h-48 md:block absolute right-0 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white/90 p-2 rounded-full transition-opacity duration-300 ${
        showRightArrow ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onRightClick}
    >
      <IoArrowForwardCircleOutline
        size={30}
        className='transition-text duration-300'
      />
    </button>
  </nav>
);

export default Navigation;
