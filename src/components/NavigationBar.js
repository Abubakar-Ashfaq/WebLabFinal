import './NavigationBar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/book" activeClassName="active">Books</NavLink>
        </li>
        <li>
          <NavLink to="/category" activeClassName="active">Category</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
