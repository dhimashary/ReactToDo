import React from 'react';
import './Header.css';
import { Route, NavLink, Switch } from 'react-router-dom';

const header = (props) => (
  <header>
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' exact>
            Add ToDo
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default header;