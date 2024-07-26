'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PROJECT_NAME } from '@/utils/constants';
import { Navigation } from '@/components/';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import HamburgerButton from './HamburgerButton';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className='bg-black text-white/90 h-13 py-3.5 px-6 md:px-12 sticky text-center top-0 z-40'>
        <nav className='flex justify-between 2xl:container 2xl:mx-auto 2xl:px-12'>
          <div className='flex space-x-2'>
            <Link href='/' className='font-bold uppercase'>
              {PROJECT_NAME}
            </Link>
            <Navigation className={'hidden md:block'}/>
          </div>
          <div className='flex space-x-2'>
            <SearchButton onClick={handleMenu} isOpen={isMenuOpen} />
            <HamburgerButton onClick={handleMenu} isOpen={isMenuOpen} />
          </div>
        </nav>
      </header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`hover:cursor-pointer backdrop-blur-sm bg-neutral-700/70 fixed h-dvh w-full overflow-hidden ${
          isMenuOpen ? 'z-40' : 'z-0'
        }`}
        onClick={handleMenu}
      />
      <motion.div
        initial={{ maxHeight: 0 }}
        animate={{ maxHeight: isMenuOpen ? '100dvh' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`bg-black fixed h-dvh md:h-64 w-full overflow-hidden z-40`}
      >
        <SearchBar/>
        <Navigation className={'block md:hidden'}/>
      </motion.div>
    </>
  );
};

export default Header;
