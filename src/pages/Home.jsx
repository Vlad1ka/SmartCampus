import React from 'react'
import BannerHome from '../components/Banner/BannerHome';
import MissionHome from '../components/MissionHome/MissionHome';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
        <BannerHome/>
        <MissionHome/>
        <Footer/>
    </div>
  )
}

export default Home