import React from 'react';
import classes from '../scss/Science.module.scss';

const Science = () => {
  return (
    <div className={classes.science}>
        <p className={classes.science__title}>Актуальные кафедры</p>
        <div className={classes.science__cards}>
            <div className={classes.science__cards__card}>
                <img src="/img/science1.png" alt="science" />
                <p>Кафедра биологических наук</p>
                <p>Исследования в области экологии, генетики и биотехнологий.</p>
            </div>
            <div className={classes.science__cards__card}>
                <img src="/img/science2.png" alt="science" />
                <p>Кафедра информационных технологий</p>
                <p>Разработка новых алгоритмов и программного обеспечения, а также исследования в области искусственного интеллекта.</p>
            </div>
            <div className={classes.science__cards__card}>
                <img src="/img/science3.png" alt="science" />
                <p>Кафедра социальных наук</p>
                <p>Изучение социальных процессов и культурных изменений в современном обществе.</p>
            </div>
        </div>
        <p className={classes.science__title}>Научные открытия</p>
        <div className={classes.science__cards}>
            <div className={classes.science__cards__card}>
                <img src="/img/science4.png" alt="science" />
                <p>Разработка устойчивых биопластиков</p>
                <p>Исследователи создали новый вид биопластика, который разлагается в естественных условиях за рекордно короткий срок. </p>
            </div>
            <div className={classes.science__cards__card}>
                <img src="/img/science5.png" alt="science" />
                <p>Повышения эффективности солнечных панелей</p>
                <p>Ученые колледжа разработали инновационные технологии, которые увеличивают эффективность солнечных панелей на 30%.</p>
            </div>
            <div className={classes.science__cards__card}>
                <img src="/img/science6.png" alt="science" />
                <p>Лечение <br />заболеваний</p>
                <p>Команда исследователей колледжа сделала прорыв в лечении болезней Альцгеймера и Паркинсона, разработав новый метод, который замедляет прогрессирование этих заболеваний на клеточном уровне.</p>
            </div>
        </div>
    </div>
  )
}

export default Science