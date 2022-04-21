import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type NavItemProps = {
  children: ReactNode;
  href: string;
};

const navLinkClasses = 'py-4 px-2 font-semibold hover:text-green-500 transition duration-300';

export default function NavItem({ children, href }: NavItemProps) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => `${isActive ? 'text-green-500' : 'text-gray-500'} ${navLinkClasses}`}
    >
      {children}
    </NavLink>
  );
}
