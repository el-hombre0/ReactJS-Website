import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Navbar = () => {
  return (
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">Главная</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/catalogue">Каталог</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/monthlysub">Ежемесячная подписка</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/bonusprogram">Бонусная программа</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">О нас</a>
      </li>
    </ul>
  );
}
export default Navbar;