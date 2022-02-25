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
        <SessionsIntro />
      </div>
      {/* event container  */}
      <div className="container">
        {/* left side  */}
        <div className="left">
          <HighlightCard />
          <CountDown />
          <UpcomingEvents />
          <TitleCard />
          {/* <EventTimer /> */}
          {/* <EventTitle /> */}
        </div>
      </div>
    </section>
  )
}

export default MainPageIntro;