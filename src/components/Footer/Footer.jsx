import React from 'react';
import classes from './Footer.module.scss';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

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
                <p onClick={() => navigate('/')}>Главная</p>
                <p onClick={() => navigate('/education')}>Обучение</p>
                <p onClick={() => navigate('/life')}>Жизнь студента</p>
                <p onClick={() => navigate('/science')}>Наука и исследования</p>
            </div>
            <div className={classes.footer__text__column}>
                <p onClick={() => navigate('/applicants')}>Абитуриентам</p>
                <p onClick={() => navigate('/students')}>Студентам</p>
                <p onClick={() => navigate('/cooperation')}>Сотрудничество</p>
                <p onClick={() => navigate('/library')}>Библиотека</p>
            </div>
            <div className={classes.footer__text__column}>
                <p onClick={() => navigate('/aboutUs')}>О нас</p>
                <p onClick={() => navigate('/events')}>Новости и мероприятия</p>
                <p>+7 (999) 999 99 99</p>
                <p>smartcampus@mail.ru</p>
            </div>
        </div>
    </div>
  )
}

export default Footer