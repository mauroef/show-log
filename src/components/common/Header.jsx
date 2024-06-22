import Link from 'next/link';
import { PROJECT_NAME } from '@/utils/constants';
import styles from './common.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>{PROJECT_NAME}</Link>
    </header>
  );
};

export default Header;
