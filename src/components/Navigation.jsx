import React, { useState, useEffect} from 'react';
import {
  NavLink,
} from "react-router-dom";
import hamburgerBtn from '../images/hamburger_menu.svg'

export default function Navigation() {

  const [menuState, setMenuState] = useState(false)
  const [windoWidth, setWindoWidth] = useState(window.innerWidth)
  const hamburgerBtnStyle = menuState ? `navigation__hamburger_disable` : `navigation__hamburger`
  const navLinkStyle = menuState ? `navigation__link-side` : `navigation__link`
  const navLinkStyleActive = menuState ? `navigation__link-side navigation__link-side_active` : `navigation__link navigation__link_active`
  const navStyle = menuState ? `navigation_side` : `navigation`

  useEffect(() => {
    window.addEventListener("resize", () => setWindoWidth(window.innerWidth));
  }, []);

  const addLink = <NavLink className={({ isActive }) => (isActive ? `${navLinkStyleActive}` : `${navLinkStyle}`)} to="/">Главная</NavLink>

  function menu(additionalLink){
    return(
      <nav className={navStyle}>
        {additionalLink}
        <NavLink className={({ isActive }) => (isActive ? `${navLinkStyleActive}` : `${navLinkStyle}`)} to="/movies">Фильмы</NavLink>
        <NavLink className={({ isActive }) => (isActive ? `${navLinkStyleActive}` : `${navLinkStyle}`)} to="/saved-movies">Сохранённые фильмы</NavLink>
        <NavLink className={({ isActive }) => (isActive ? `${navLinkStyleActive}` : `${navLinkStyle}`)} to="/profile"></NavLink>
      </nav>
    )
  }

  function returnMenu(){

    function openMenu(){
      menuState ? setMenuState(false) : setMenuState(true)
    }





    if(windoWidth <= 768){
      return(
        <input type="button" src={hamburgerBtn} onClick={openMenu}
        className={hamburgerBtnStyle} alt="Кнопка меню" />
        )
    } else {
      return(
          menu()
        )
    }

  }

  function sideMenu(){
    return(
      menu(addLink)
    )
  }

  return (
    <>
    {returnMenu()}
    {menuState ? sideMenu() : ''}
    </>
  )

}
