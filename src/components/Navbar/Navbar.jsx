import React from 'react'
import {
  NavLink
} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light" aria-label="Navbar">
      <div className="container-fluid">
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarsExample01" >
          {/* <div className="navbar-collapse collapse" id="navbarsExample01" style=""> */}
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/catalogue">Каталог</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/account">Личный кабинет</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bonusprogram">Бонусная программа</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/support">Поддержка</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">О нас</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Дополнительно</NavLink>
              <ul className="dropdown-menu" aria-labelledby="dropdown01">
                <li><NavLink className="dropdown-item" to="/delivery">Доставка</NavLink></li>
                <li><NavLink className="dropdown-item" to="/return">Условия возврата</NavLink></li>
                <li><NavLink className="dropdown-item" to="/contacts">Контакты</NavLink></li>
              </ul>
            </li>
          </ul>
          <form>
            <input className="form-control" type="text" placeholder="Поиск" aria-label="Search" />
          </form>
        </div>
      </div>
    </nav>
  )
};
export default Navbar;