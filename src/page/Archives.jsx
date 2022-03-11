import React, { useState } from "react";
import Calender from "../component/Archives/Calender";
import Week from '../component/Archives/Week';
import OneImg from '../assets/img/archives/one.jpg'

const Archives = () => {


  const [weeks, setWeeks] = useState(
    [
      {
        name: 'wednesday',
        date: 'Jan 7th, 2022',
        tag: '#UX Design',
        background: OneImg
      },
      {
        name: 'wednesday',
        date: 'Jan 7th, 2022',
        tag: '#UX Design',
        background: OneImg
      },
      {
        name: 'wednesday',
        date: 'Jan 7th, 2022',
        tag: '#UX Design',
        background: OneImg
      },
      {
        name: 'wednesday',
        date: 'Jan 7th, 2022',
        tag: '#UX Design',
        background: OneImg
      },
      {
        name: 'wednesday',
        date: 'Jan 7th, 2022',
        tag: '#UX Design',
        background: OneImg
      },
      {
        name: 'wednesday',
        date: 'Jan 7th, 2022',
        tag: '#UX Design',
        background: OneImg
      },
      {
        name: 'wednesday',
        date: 'Jan 7th, 2022',
        tag: '#UX Design',
        background: OneImg
      },
    ]
  );


    // generate months
  return (
    <React.Fragment>
      {/* <Calender /> */}
      {/* <Week weekData={weeks} /> */}

    </React.Fragment>
  )
  
};

export default Archives;
