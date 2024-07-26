'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ children, className, href }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${
        path.startsWith(href) ? 'text-white/60 active' : ''
      } ${className} hover:text-white/60 transition duration-300`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
