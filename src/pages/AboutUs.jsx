import React from 'react';
import classes from '../scss/AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={classes.aboutUs}>
        <p className={classes.aboutUs__title}>О нас</p>
        <div className={classes.aboutUs__banner}>
            <p>Университет SmartCampus был основан в 1995 году с целью предоставления качественного образования и содействия научным исследованиям в различных областях знаний. С момента своего основания университет стремился создать уникальную образовательную среду, где студенты могли бы развивать свои навыки и таланты.
            В первые годы своего существования университет сосредоточился на формировании сильного преподавательского состава и создании современных учебных программ. С течением времени SmartCampus стал известен своими инновациями в области науки и технологий, а также активным участием в международных научных проектах.
            С 2005 года университет начал активно развивать сотрудничество с зарубежными учебными заведениями, что позволило студентам и преподавателям обмениваться опытом и знаниями. В 2010 году был открыт новый кампус, оснащенный современными лабораториями и библиотеками, что значительно улучшило условия для учебы и исследований.
            Сегодня университет SmartCampus гордится своими достижениями в области образования и науки, а также разнообразием программ, предлагаемых студентам. Он продолжает привлекать талантливых студентов и преподавателей со всего мира, оставаясь одним из ведущих учебных заведений в регионе.</p>
        </div>
        <p className={classes.aboutUs__title}>Принципы работы</p>
        <div className={classes.aboutUs__principles}>
            <div className={classes.aboutUs__principles__principl}>
                <img src="/img/aboutUs1.png" alt="principl" />
                <p>Инновации и исследования</p>
            </div>
            <div className={classes.aboutUs__principles__principl}>
                <img src="/img/aboutUs2.png" alt="principl" />
                <p>Поддержка студентов</p>
            </div>
            <div className={classes.aboutUs__principles__principl}>
                <img src="/img/aboutUs3.png" alt="principl" />
                <p>Сотрудничество</p>
            </div>
            <div className={classes.aboutUs__principles__principl}>
                <img src="/img/aboutUs4.png" alt="principl" />
                <p>Качество образования</p>
            </div>
        </div>
        <p className={classes.aboutUs__title}>Обратная связь</p>
        <div className={classes.aboutUs__form}>
            <input type="text" placeholder='Имя'/>
            <input type="email" placeholder='Email'/>
            <input type="text" placeholder='Cообщение'/>
            <div className={classes.aboutUs__form__approval}>
                <p>Я даю согласие на обработку персональных данных</p>
                <input type="checkbox"/>
            </div>
            <button type='submit'>Отправить</button>
        </div>
    </div>
  )
}

export default AboutUs