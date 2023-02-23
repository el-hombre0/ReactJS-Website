import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <NavLink to='/'><img class={s.logo_img} src='logo.jpg' alt='Логотип'/></NavLink>
        <div className={s.sales}>Новогодние скидки до -50%!</div>
        <div className={s.phone_number}>+7(999) 123-22-33</div>
    </header>
}
export default Header;