/* global VoidFunction */
import { ReactNode, useState } from 'react';
import { AuthStatus } from '~/components/auth/AuthProvider';
import Logo from '~/components/shared/Logo/Logo';
import NavItem from '~/components/shared/Nav/NavItem';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Example', href: '/example' },
  { name: 'Protected', href: '/protected' },
];

function navItems(isMobile = false) {
  return navigation.map((item) => (
    <NavItem key={item.name} href={item.href} isMobile={isMobile}>
      {item.name}
    </NavItem>
  ));
}

function PrimaryNavbar() {
  return (
    <div className="flex">
      <NavItem href="#">
        <Logo />
      </NavItem>
      <div className="hidden md:flex items-center space-x-1">{navItems()}</div>
    </div>
  );
}

function SecondaryNavbar() {
  return (
    <div className="hidden md:flex items-center space-x-3">
      <AuthStatus />
    </div>
  );
}

type MobileMenuButtonProps = {
  onClick: VoidFunction;
};

function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <div className="md:hidden flex items-center">
      <button className="outline-none mobile-menu-button" onClick={onClick}>
        <svg
          className=" w-6 h-6 text-gray-500 hover:text-green-500 "
          x-show="!showMenu"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}

type MobileMenuProps = {
  isOpen: boolean;
};

function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <div className={isOpen ? 'mobile-menu' : 'hidden mobile-menu'}>
      <ul>{navItems(true)}</ul>
    </div>
  );
}

type NavContainerProps = {
  children: ReactNode;
  isMenuOpen: boolean;
};

function NavContainer({ children, isMenuOpen }: NavContainerProps) {
  return (
    <nav className="shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">{children}</div>
      </div>

      <MobileMenu isOpen={isMenuOpen} />
    </nav>
  );
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <NavContainer isMenuOpen={isMenuOpen}>
      <PrimaryNavbar />
      <SecondaryNavbar />
      <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
    </NavContainer>
  );
}
