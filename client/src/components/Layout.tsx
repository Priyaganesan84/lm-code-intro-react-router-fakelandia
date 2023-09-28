import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import './Header.css'; // Import the CSS file

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <div className="App-header">
          <h1>Fakelandia Justice Department</h1>
      
          <Link to="/">Home</Link>
          <Link to="/misdemeanour">Misdemeanours</Link>
          <Link to="/confession">Confess to Us</Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

