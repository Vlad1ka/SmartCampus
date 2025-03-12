import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.footer}>
        <div className={classes.footer__social_media}>
            <img src="/img/logo.png" alt="logo" />
            <div className={classes.footer__social_media__icons}>
                <img src="/img/twitter.png" alt="icon" />
                <img src="/img/facebook.png" alt="icon" />
                <img src="/img/instagram.png" alt="icon" />
                <img src="/img/github.png" alt="icon" />
            </div>
        </div>
        <div className={classes.footer__text}>
            <div className={classes.footer__text__column}>
                <p>Главная</p>
                <p>Обучение</p>
                <p>Жизнь студента</p>
                <p>Наука и исследования</p>
            </div>
            <div className={classes.footer__text__column}>
                <p>Абитуриентам</p>
                <p>Студентам</p>
                <p>Сотрудничество</p>
                <p>Библиотека</p>
            </div>
            <div className={classes.footer__text__column}>
                <p>О нас</p>
                <p>Новости и мероприятия</p>
                <p>+7 (999) 999 99 99</p>
                <p>smartcampus@mail.ru</p>
            </div>
        </div>
    </div>
  )
}

export default Footer