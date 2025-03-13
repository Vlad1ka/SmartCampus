import React from 'react';
import classes from '../scss/Students.module.scss';

const Students = () => {
  return (
    <div className={classes.students}>
        <p className={classes.students__title}>Полезные ресурсы для самообразования</p>
        <div className={classes.students__banner}>
            <img src="/img/students.png" alt="students" />
            <p>Цифровая библиотека "Знания без границ" — этот ресурс предоставляет доступ к обширной коллекции учебных материалов, научных статей и электронных книг по всем дисциплинам, что позволяет студентам углубить свои знания и исследовать новые темы.
            Платформа онлайн-курсов "Университет возможностей" — здесь студенты могут найти курсы по программированию, искусственному интеллекту, бизнесу и многим другим направлениям, проводимые ведущими преподавателями и экспертами отрасли.
            Форум "Идеи и инновации" — это сообщество студентов и преподавателей, где можно обсуждать актуальные темы, делиться идеями и получать обратную связь по проектам, что способствует развитию критического мышления и креативности.</p>
        </div>
        <p className={classes.students__title}>Студентам</p>
        <div className={classes.students__qualification}>
            <div className={classes.students__qualification__title}>
                <p>Магистратура</p>
            </div>
            <div className={classes.students__qualification__table}>
                <div className={classes.students__qualification__table__name}>
                    <p>КОД И НАИМЕНОВАНИЕ НАПРАВЛЕНИЯ ПОДГОТОВКИ/ СПЕЦИАЛЬНОСТИ</p>
                    <p>Форма обучения</p>
                    <p>Срок обучения</p>
                    <p>Вступительные испытания</p>
                    <p>Факультет</p>
                </div>
                <hr />
                <div className={classes.students__qualification__table__specialties}>
                    <p>01.04.02 Прикладная математика и информатика</p>
                    <p>Очная</p>
                    <p>2 года</p>
                    <p>Математика, информатика и информационные технологии (устно-письменно)</p>
                    <p>Факультет математики и информационных технологий</p>
                </div>
                <hr />
                <div className={classes.students__qualification__table__specialties}>
                    <p>03.04.02 Физика</p>
                    <p>Очная</p>
                    <p>2 года</p>
                    <p>Физика (устно-письменно)</p>
                    <p>Естественнонаучный факультет</p>
                </div>
                <hr />
                <div className={classes.students__qualification__table__specialties}>
                    <p>04.04.01 Химия</p>
                    <p>Очная</p>
                    <p>2 года</p>
                    <p>Органическая и неорганическая химия (устно-письменно)</p>
                    <p>Естественнонаучный факультет</p>
                </div>
            </div>


            <div className={classes.students__qualification__title}>
                <p>Аспирантура</p>
            </div>
            <div className={classes.students__qualification__table}>
                <div className={classes.students__qualification__table__name}>
                    <p>КОД И НАИМЕНОВАНИЕ НАПРАВЛЕНИЯ ПОДГОТОВКИ/ СПЕЦИАЛЬНОСТИ</p>
                    <p>Форма обучения</p>
                    <p>Срок обучения</p>
                    <p>Вступительные испытания</p>
                    <p>Факультет</p>
                </div>
                <hr />
                <div className={classes.students__qualification__table__specialties}>
                    <p>1.2.2 Математическое моделирование, численные методы и комплексы программ</p>
                    <p>Очная</p>
                    <p>3 года</p>
                    <p>Математическое моделирование, численные методы и комплексы программ (устно-письменно)</p>
                    <p>Факультет математики и информационных технологий</p>
                </div>
                <hr />
                <div className={classes.students__qualification__table__specialties}>
                    <p>1.3.14 Теплофизика и теоретическая теплотехника</p>
                    <p>Очная</p>
                    <p>4 года</p>
                    <p>Теплофизика и теоретическая теплотехника (устно-письменно)</p>
                    <p>Естественнонаучный факультет</p>
                </div>
                <hr />
                <div className={classes.students__qualification__table__specialties}>
                    <p>5.9.1 Русская литература и литературы народов Российской Федерации</p>
                    <p>Очная</p>
                    <p>3 года</p>
                    <p>Литература народов РФ (русская литература) (устно-письменно)</p>
                    <p>Филологический факультет</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Students