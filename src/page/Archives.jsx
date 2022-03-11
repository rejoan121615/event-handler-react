import React, { useState } from "react";
import Calender from "../component/Archives/Calender";
import Week from '../component/Archives/Week';

const Archives = () => {


  const [weeks, setWeeks] = useState(
    [
      {
        name: 'wednesday',
        date: 'Jan 7th, 2022',
        tag: '#UX Design',
        background: ''
      }
    ]
  );


    // generate months
  return (
    <React.Fragment>
      {/* <Calender /> */}
      <Week />

    </React.Fragment>
  )
  
};

export default Archives;
