import { ReactNode } from 'react';

type NavBarProps = {
  children: ReactNode;
};

export default function NavBar({ children }: NavBarProps) {
  return (
    <nav className="shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex items-center space-x-1">{children}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
