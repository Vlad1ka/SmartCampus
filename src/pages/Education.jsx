import React from 'react';
import EducationCard from '../components/EducationCard';
import classes from '../scss/Education.module.scss';



const Education = () => {
  return (
    <div className={classes.education}>
      <p className={classes.education__title}>Обучение</p>
      <div className={classes.education__cards}>
        <div className={classes.education__cards__wrapper}>
          <EducationCard/>
          <EducationCard/>
          <EducationCard/>
          <EducationCard/>
        </div>
        <div className={classes.education__cards__wrapper}>
          <EducationCard/>
          <EducationCard/>
          <EducationCard/>
          <EducationCard/>
        </div>
        <div className={classes.education__cards__wrapper}>
          <EducationCard/>
          <EducationCard/>
          <EducationCard/>
          <EducationCard/>
        </div>
      </div>
    </div>
  )
}

export default Education