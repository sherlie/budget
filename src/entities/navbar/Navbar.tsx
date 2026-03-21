import type { FC } from 'react';
import { Link } from 'react-router';

const Navbar: FC = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;