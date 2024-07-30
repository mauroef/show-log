import { PROJECT_NAME } from '@/utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-black text-white/90 p-6 md:px-12 z-10 mt-8'>
      <div className='mx-auto flex flex-col md:flex-row justify-between items-center 2xl:container 2xl:mx-auto 2xl:px-12'>
        <p className='text-2xl font-bold uppercase'>{PROJECT_NAME}</p>
        <p className='mt-2'>
          © {currentYear} Mauro Ezequiel Frete. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
