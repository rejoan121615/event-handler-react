import React from 'react';
import SessionsIntro from './SessionsIntro';
import AllEventsPage from './AllEventsPage';
import HighlightCard from '../ui/HighlightCard';
import UpcomingEvents from './UpcomingEvents';
import CountDown from '../ui/CountDown.jsx'
import TitleCard from '../ui/TitleCard';

const MainPageIntro = (props) => {
  return (
    <section className='mt-24 md:mt-0'>
        {/* intro container  */}
      <div className="container">
        {/* <SessionsIntro /> */}
      </div>
      {/* event container  */}
      <div className="container">
        {/* left side  */}
        <div className="left grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-6">
          <HighlightCard className='lg:col-span-1'/>
          <CountDown className="" />
          <TitleCard className="lg:col-start-2 lg:row-start-2" />
          <UpcomingEvents className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:flex lg:flex-col lg:justify-start" />
          {/* <EventTimer /> */}
          {/* <EventTitle /> */}
        </div>
      </div>
    </section>
  )
}

export default MainPageIntro;