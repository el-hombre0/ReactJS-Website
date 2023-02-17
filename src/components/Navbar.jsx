import React from 'react'

const Navbar = () => {
    return <ul class="nav justify-content-end">
    <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/catalogue">Каталог</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#">Ежемесячная подписка</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#">Бонусная программа</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#">О нас</a>
    </li>
  </ul>
}
export default Navbar;