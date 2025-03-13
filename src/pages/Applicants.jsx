import React from 'react';
import classes from '../scss/Applicants.module.scss'

const Applicants = () => {
  return (
    <div className={classes.applicants}>
        <p className={classes.applicants__title}>Информация о поступлении</p>
        <div className={classes.applicants__banner}>
            <img src="/img/applicants1.png" alt="applicants" />
            <p>Порядок регистрации на подтверждающие экзамены <br /><br />После подачи заявления, кандидаты получают доступ к личному кабинету, где могут зарегистрироваться на подтверждающие экзамены. Регистрация открыта в течение двух недель, и абитуриенты должны выбрать удобные для них даты и время экзаменов.</p>
        </div>
        <div className={classes.applicants__banner}>
            <p>Прохождение вступительных испытаний <br /><br />Вступительные испытания проводятся в формате тестирования и собеседования. Кандидаты должны подготовиться к экзаменам, основываясь на рекомендованных материалах, которые доступны на сайте университета. Результаты вступительных испытаний будут опубликованы через две недели после их завершения.</p>
            <img src="/img/applicants2.png" alt="applicants" />
        </div>
    </div>
  )
}

export default Applicants