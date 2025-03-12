import React from 'react';
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
        <img src="/img/logo.png" alt="logo" />
        <div className={classes.header__calling}>
            <img src="/img/calling.png" alt="phone" />
            <p>+7 (000) 000 00 00</p>
        </div>
        <div className={classes.header__location}>
            <img src="/img/location.png" alt="location" />
            <p>ул. Пушкина, д. 10</p>
        </div>
    </header>
  )
}

export default Header