import { motion } from 'framer-motion';
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from 'react-icons/io5';
import styles from './carousel.module.css';

export const PrevArrow = ({ onClick, disabled }) => (
  <motion.button
    onClick={onClick}
    className={`${styles['custom-arrow']} ${styles['custom-arrow__prev']}`}
    disabled={disabled}
    style={{ pointerEvents: disabled ? 'none' : 'auto' }}
    initial={{ opacity: 1, x: 0 }}
    animate={{ opacity: disabled ? 0 : 1 }}
    transition={{ duration: 0.5 }}
  >
    <IoArrowBackCircleOutline size={30} />
  </motion.button>
);

export const NextArrow = ({ onClick, disabled }) => (
  <motion.button
    onClick={onClick}
    className={`${styles['custom-arrow']} ${styles['custom-arrow__next']}`}
    disabled={disabled}
    style={{ pointerEvents: disabled ? 'none' : 'auto' }}
    initial={{ opacity: 1, x: 0 }}
    animate={{ opacity: disabled ? 0 : 1 }}
    transition={{ duration: 0.5 }}
  >
    <IoArrowForwardCircleOutline size={30} />
  </motion.button>
);
