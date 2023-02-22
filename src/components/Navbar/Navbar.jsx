import React from 'react'
import {
  NavLink
} from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <NavLink class="nav-link active" aria-current="page" to="/">Главная</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/catalogue">Каталог</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/monthlysub">Ежемесячная подписка</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/bonusprogram">Бонусная программа</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/about">О нас</NavLink>
      </li>
    </ul>
  );
}
export default Navbar;