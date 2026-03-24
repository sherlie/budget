import type { FC } from 'react';
import { Link, useLocation } from 'react-router';
import { activeNavLink, nav, navLink, navList } from './Navbar.css.ts';

const Navbar: FC = () => {
  return (
   <nav className={nav}>
      <ul className={navList}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;

const NavLink: FC<{to: string, children: string }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  console.log(isActive);
  return (
    <li>
      <Link to={to} className={isActive ? activeNavLink : navLink}>
        {children}
      </Link>
    </li>
  );
};
