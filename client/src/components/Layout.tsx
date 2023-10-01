import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import '../css/layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div >
      <header>
        <div >
          <h1 >Fakelandia Justice Department</h1>
          <nav >
            <Link to="/">Home</Link>
            <Link to="/misdemeanour">Misdemeanours</Link>
            <Link to="/confession">Confess to Us</Link>
          </nav>
          </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

