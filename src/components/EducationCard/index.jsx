import React from 'react';
import classes from './EducationCard.module.scss'

const EducationCard = () => {
  return (
    <div className={classes.card}>
        <div className={classes.card__info}>
          <div className={classes.card__info__time}>
            <img src="/img/calendar.png" alt="photo3" />
            <p>От 9 месяцев</p>
          </div>
          <div className={classes.card__info__people}>
            <img src="/img/people.png" alt="photo2" />
            <p>Осталось 10 мест</p>
          </div>
        </div>
        <img src="/img/card1.png" alt="photo5" />
        <p className={classes.card__title}>iOS-разработчик с 0 до middle</p>
        <p className={classes.card__price}>от <span>12000</span> руб/мес</p>
        <div className={classes.card__percent}>
            <img src="/img/percent.png" alt="photo1" />
            <p>Рассрочка на 24 месяца</p>
        </div>
    </div>
  )
}

export default EducationCard