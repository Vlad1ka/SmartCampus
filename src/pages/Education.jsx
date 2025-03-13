import React from 'react';
import EducationCard from '../components/EducationCard';
import classes from '../scss/Education.module.scss';



const Education = () => {
  const [cards, setCards]=React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {

    fetch(`https://67d349eb8bca322cc269bf17.mockapi.io/Cards`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setCards(json);
      setIsLoading(false);
    });
  window.scrollTo(0, 0);
  }, []);

  if (isLoading){
    return(
      <div>Loading...</div>
    )
  }


  return (
    <div className={classes.education}>
      <p className={classes.education__title}>Обучение</p>
      <div className={classes.education__cards}>
        <div className={classes.education__cards__wrapper}>
          {Array.isArray(cards) && cards.map((obj) => <EducationCard key={obj.id} {...obj}/>)}
        </div>
        <div className={classes.education__cards__wrapper}>
          {Array.isArray(cards) && cards.map((obj) => <EducationCard key={obj.id} {...obj}/>)}
        </div>
        <div className={classes.education__cards__wrapper}>
          {Array.isArray(cards) && cards.map((obj) => <EducationCard key={obj.id} {...obj}/>)}
        </div>
      </div>
    </div>
  )
}

export default Education