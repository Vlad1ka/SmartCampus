import React from 'react';
import classes from './EducationCard.module.scss'

const EducationCard = ({img, time, people, title, price, percent}) => {
  return (
    <div className={classes.card}>
        <div className={classes.card__info}>
          <div className={classes.card__info__time}>
            <img src="/img/calendar.png" alt="photo3" />
            <p>От {time} месяцев</p>
          </div>
          <div className={classes.card__info__people}>
            <img src="/img/people.png" alt="photo2" />
            <p>Осталось {people} мест</p>
          </div>
        </div>
        <img src={img} alt="photo5" />
        <p className={classes.card__title}>{title}</p>
        <p className={classes.card__price}>от <span>{price}</span> руб/мес</p>
        <div className={classes.card__percent}>
            <img src="/img/percent.png" alt="photo1" />
            <p>Рассрочка на {percent} месяца</p>
        </div>
    </div>
  )
}

export default EducationCard