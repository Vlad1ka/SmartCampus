import React from 'react';
import classes from '../scss/Life.module.scss'

const Life = () => {
  return (
    <div className={classes.life}>
        <p className={classes.life__title}>Жизнь студента</p>
        <div className={classes.life__banners}>
        <div className={classes.life__banners__banner}>
            <img src="/img/banner1.png" alt="banner" />
            <p>Студенческая жизнь в университете SmartCampus — это уникальное сочетание академических достижений, культурного разнообразия и активного досуга. Расположенный в живописном уголке страны, университет привлекает студентов со всех концов мира, создавая атмосферу дружбы и сотрудничества.</p>
        </div>
        <div className={classes.life__banners__banner_reverse}>
            <p>Общежитие университета SmartCampus предлагает студентам уникальную атмосферу, способствующую как учебе, так и отдыху. Комфортные условия проживания создают идеальную среду для сосредоточенной работы и общения с единомышленниками.</p>
            <img src="/img/banner2.png" alt="banner" />
        </div>
        <div className={classes.life__banners__banner}>
            <img src="/img/banner3.png" alt="banner" />
            <p>Каждый семестр в университете проводятся спортивные турниры по различным видам спорта, включая футбол, баскетбол, волейбол и легкую атлетику. Эти соревнования собирают студентов из разных факультетов, создавая атмосферу здоровой конкуренции и веселья.</p>
        </div>
        </div>
    </div>
  )
}

export default Life