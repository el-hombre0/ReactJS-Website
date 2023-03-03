import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <Link to='/'><img class={s.logo_img} src='logo.jpg' alt='Логотип'/></Link>
        <div className={s.sales}>Новогодние скидки до -50%!</div>
        <div className={s.phone_number}>+7(999) 123-22-33</div>
        <div className='user_number'>Сейчас на сайте: {props.user_number}</div>
    </header>
}
export default Header;