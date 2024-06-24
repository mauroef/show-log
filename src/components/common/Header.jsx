'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PROJECT_NAME } from '@/utils/constants';

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${path.startsWith(href) ? 'text-white/60' : ''} text-white/90 hover:text-white/60 transition duration-300`}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <header className='bg-black text-white/90 text-base h-13 py-3.5 px-5 sticky text-center top-0 z-10'>
      <nav className='2xl:container 2xl:mx-auto px-12 flex justify-between'>
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
