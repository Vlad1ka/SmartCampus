import React from 'react';
import classes from '../scss/Library.module.scss';

const Library = () => {
  return (
    <div className={classes.library}>
        <p className={classes.library__title}>Категории книг</p>
        <div className={classes.library__cards}>
            <div className={classes.library__cards__wrapper}>
                <div className={classes.library__cards__wrapper__card}>
                    <img src="/img/library1.png" alt="library" />
                    <p>Научные и учебные пособия</p>
                    <p>Книги по различным дисциплинам, включая математику, физику, химию, биологию и другие.</p>
                    <p>Авторы: Исаак Ньютон, Альберт Эйнштейн, Ричард Фейнман</p>
                </div>
                <div className={classes.library__cards__wrapper__card}>
                    <img src="/img/library2.png" alt="library" />
                    <p>Литература</p>
                    <p>Художественные произведения, включая романы, поэзию, драму и прозу.</p>
                    <p>Авторы: Лев Толстой, Фёдор Достоевский, Уильям Шекспир</p>
                </div>
                <div className={classes.library__cards__wrapper__card}>
                    <img src="/img/library3.png" alt="library" />
                    <p>История</p>
                    <p>Книги по мировой и национальной истории, биографии исторических личностей.</p>
                    <p>Авторы: Тит Ливий, Геродот, Эдвард Гиббон, Уинстон Черчилль</p>
                </div>
            </div>


            <div className={classes.library__cards__wrapper}>
                <div className={classes.library__cards__wrapper__card}>
                    <img src="/img/library4.png" alt="library" />
                    <p>Социология и психология</p>
                    <p>Исследования и теории о человеческом поведении и обществе.</p>
                    <p>Авторы: Эмиль Дюркгейм, Талкотт Парсонс, Зигмунд Фрейд</p>
                </div>
                <div className={classes.library__cards__wrapper__card}>
                    <img src="/img/library5.png" alt="library" />
                    <p>Экономика и бизнес</p>
                    <p>Литература по экономическим теориям, управлению и предпринимательству.</p>
                    <p>Авторы: Адам Смит, Кейнс, Джон Мейнард, Джозеф Штиглиц</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Library