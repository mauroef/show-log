'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PROJECT_NAME } from '@/utils/constants';

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${path.startsWith(href) ? 'text-white/60 active' : ''} hover:text-white/60 transition duration-300`}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <header className='bg-black text-white/90 h-13 py-3.5 px-6 md:px-12 sticky text-center top-0 z-40'>
      <nav className='flex justify-between 2xl:container 2xl:mx-auto 2xl:px-12'>
        <div className='flex space-x-2'>
          <Link href='/' className='font-bold uppercase'>
            {PROJECT_NAME}
          </Link>
          <NavLink href='/movies'>Movies</NavLink>
          <NavLink href='/shows'>Shows</NavLink>
        </div>
        <div>Login</div>
      </nav>
    </header>
  );
};

export default Header;
