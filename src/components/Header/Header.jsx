import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <NavLink to='/'><img class={classes.logo_img} src='logo.jpg' alt='Логотип'/></NavLink>
        <div className={classes.sales}>Новогодние скидки до -50%!</div>
        <div className={classes.phone_number}>+7(999) 123-22-33</div>
    </header>
}
export default Header;