import React from 'react';
import classes from '../scss/Cooperation.module.scss';

const Сooperation = () => {
  return (
    <div className={classes.cooperation}>
        <p className={classes.cooperation__title}>Возможности сотрудничества</p>
        <div className={classes.cooperation__cards}>
            <div className={classes.cooperation__cards__wrapper}>
                <div className={classes.cooperation__cards__wrapper__card}>
                    <img src="/img/cooperation1.png" alt="cooperation" />
                    <p>Научные исследования</p>
                    <p>Мы приглашаем компании и исследовательские организации участвовать в разработке инновационных технологий и решений.</p>
                </div>
                <div className={classes.cooperation__cards__wrapper__card}>
                    <img src="/img/cooperation2.png" alt="cooperation" />
                    <p>Спонсорские программы</p>
                    <p>Мы предлагаем различные уровни спонсорства для поддержки мероприятий, научных исследований и образовательных программ. Спонсоры могут получить доступ к уникальным возможностям для продвижения своих брендов и услуг среди студентов и преподавателей.</p>
                </div>
                <div className={classes.cooperation__cards__wrapper__card}>
                    <img src="/img/cooperation3.png" alt="cooperation" />
                    <p>Стажировки и практики</p>
                    <p>Университет SmartCampusсотрудничает с предприятиями для организации стажировок и практик для студентов. Это позволяет студентам получить практический опыт, а компаниям — подготовить квалифицированные кадры.</p>
                </div>
            </div>


            <div className={classes.cooperation__cards__wrapper}>
                <div className={classes.cooperation__cards__wrapper__card}>
                    <img src="/img/cooperation4.png" alt="cooperation" />
                    <p>Обмен знаниями</p>
                    <p>Мы открыты для организации семинаров, мастер-классов и лекций, где представители бизнеса могут делиться своим опытом и знаниями с нашими студентами и преподавателями.</p>
                </div>
                <div className={classes.cooperation__cards__wrapper__card}>
                    <img src="/img/cooperation5.png" alt="cooperation" />
                    <p>Совместные образовательные программы</p>
                    <p>Университет готов рассмотреть возможность создания совместных образовательных программ с другими учебными заведениями и организациями, что позволит расширить горизонты обучения и повысить качество образования.</p>
                </div>
                <div className={classes.cooperation__cards__wrapper__card}>
                    <img src="/img/cooperation3.png" alt="cooperation" />
                    <p>Стажировки и практики</p>
                    <p>Университет SmartCampusсотрудничает с предприятиями для организации стажировок и практик для студентов. Это позволяет студентам получить практический опыт, а компаниям — подготовить квалифицированные кадры.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Сooperation