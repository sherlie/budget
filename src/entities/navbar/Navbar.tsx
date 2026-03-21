import type { FC } from 'react';
import { Link } from 'react-router';
import { nav, navLink, navList } from './Navbar.css.ts';

const Navbar: FC = () => {
  return (
   <nav className={nav}>
      <ul className={navList}>
        <li>
          <Link to="/" className={navLink}>Home</Link>
        </li>
        <li>
          <Link to="/categories" className={navLink}>Categories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;