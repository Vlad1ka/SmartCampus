import React from 'react';
import classes from './MissionHome.module.scss';

const MissionHome = () => {
  return (
    <div className={classes.mission}>
        <p className={classes.mission__title}>Миссии университета</p>
        <div className={classes.mission__cards}>
          <div className={classes.mission__cards__card}>
            <img src="/img/mission1.png" alt="mission" />
            <p>Образование</p>
            <p>Предоставление высококачественного образования, основанного на современных научных исследованиях и практическом опыте.</p>
          </div>
          <div className={classes.mission__cards__card}>
            <img src="/img/mission2.png" alt="mission" />
            <p>Исследования</p>
            <p>Поддержка междисциплинарных исследований, направленных на решение актуальных проблем.</p>
          </div>
          <div className={classes.mission__cards__card}>
            <img src="/img/mission3.png" alt="mission" />
            <p>Сообщество</p>
            <p>Формирование активного и ответственного гражданского общества через вовлечение студентов в социальные проекты и инициативы.</p>
          </div>
        </div>
    </div>
  )
}

export default MissionHome