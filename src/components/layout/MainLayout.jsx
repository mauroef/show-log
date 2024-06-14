import { Header } from '@/components';
import styles from './layout.module.css';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
