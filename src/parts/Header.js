import React from 'react';
import { NavLink } from 'react-router-dom';

import storeSVG from '../img/store.svg';
import librarySVG from '../img/library.svg';
import cartSVG from '../img/cart.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="container-li">
            <NavLink to="/store">
              <img src={storeSVG} alt="store icon" />
              Store
            </NavLink>
            <NavLink to="/library">
              <img src={librarySVG} alt="library icon" />
              Library
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <img src={cartSVG} alt="Cart icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
