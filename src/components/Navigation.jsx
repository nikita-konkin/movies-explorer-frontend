import React, {
  useContext
} from 'react';
import {
  Link,
  NavLink,
} from "react-router-dom";

export default function Navigation() {

  return (
      <nav className="navigation">
        <NavLink className={({ isActive }) => (isActive ? 'navigation__link_active' : 'navigation__link')} to="/movies">Фильмы</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'navigation__link_active' : 'navigation__link')} to="/saved-movies">Сохранённые фильмы</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'navigation__link_active' : 'navigation__link')} to="/profile"></NavLink>
      </nav>
  )

}
