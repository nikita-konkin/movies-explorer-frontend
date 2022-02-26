import React, {
  useContext
} from 'react';
import {
  Link,
  NavLink,
} from "react-router-dom";
// import profileImage from '../images/profile_main.svg';

export default function Navigation() {

  return (
    // <div>
      <nav className="navigation">
        <NavLink className={({ isActive }) => (isActive ? 'navigation__link_active' : 'navigation__link')} to="/movies">Фильмы</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'navigation__link_active' : 'navigation__link')} to="/saved-movies">Сохранённые фильмы</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'navigation__link_active' : 'navigation__link')} to="/profile"></NavLink>
      </nav>
    // </div>
  )

}
