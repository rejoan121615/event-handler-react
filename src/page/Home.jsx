import React from 'react';
import HeaderBar from '../component/HeaderBar';
import BottomNavigation from '../component/BottomNavigation';
import MainPageIntro from '../component/MainPageIntro';

const Home = (props) => {
  return (
    <React.Fragment>
      <HeaderBar />
      <MainPageIntro />
      <BottomNavigation />
    </React.Fragment>
  )
}


export default Home;