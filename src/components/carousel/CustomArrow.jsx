import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from 'react-icons/io5';
import styles from './carousel.module.css';

export const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className={`${styles['custom-arrow']} ${styles['custom-arrow__prev']}`}>
    <IoArrowBackCircleOutline size={30} />
  </div>
);

export const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className={`${styles['custom-arrow']} ${styles['custom-arrow__next']}`}>
    <IoArrowForwardCircleOutline size={30} />
  </div>
);
