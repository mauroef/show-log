import { Footer, Header } from '@/components';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={`2xl:container 2xl:mx-auto`}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
