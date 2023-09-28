// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/confession">Confession</Link>
        </li>
        <li>
          <Link to="/misdemeanour">Misdemeanour</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
