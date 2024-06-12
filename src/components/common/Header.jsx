import { PROJECT_NAME } from '@/utils/constants';
import styles from './common.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>{PROJECT_NAME}</h1>
    </header>
  );
};

export default Header;
