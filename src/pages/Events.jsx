import React from 'react';
import classes from '../scss/Events.module.scss';

const Events = () => {
  return (
    <div className={classes.events}>
        <p className={classes.events__title}>Мероприятия</p>
        <div className={classes.events__cards}>
            <div className={classes.events__cards__card}>
                <img src="/img/events1.png" alt="events" />
                <p>Научная конференция</p>
                <p>Научная конференция университета SmartCampus предоставляет платформу для обмена знаниями и идеями между студентами, преподавателями и исследователями. Участники имеют возможность представить свои исследования, обсудить актуальные темы и наладить сотрудничество с коллегами из разных областей науки.</p>
                <button>Архив</button>
            </div>
            <div className={classes.events__cards__card}>
                <img src="/img/events2.png" alt="events" />
                <p>Фестиваль в честь 30-летия</p>
                <p>Университет SmartCampus с гордостью отмечает 30-летие своего существования, организуя грандиозный фестиваль, который объединит студентов, преподавателей и выпускников.</p>
                <button>Архив</button>
            </div>
            <div className={classes.events__cards__card}>
                <img src="/img/events3.png" alt="events" />
                <p>Фестиваль “Мы-едины”</p>
                <p>Фестиваль "Мы-едины" — это яркое событие, посвященное единству и культурному разнообразию. На фестивале проходят концерты, мастер-классы и выставки, где участники могут познакомиться с традициями разных народов, обменяться опытом и укрепить дружеские связи.</p>
                <button>Архив</button>
            </div>
        </div>
    </div>
  )
}

export default Events