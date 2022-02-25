import React from 'react'
import UpEventCards from './UpEventCards'


const UpcomingEvents = (props) => {
  return (
    <div className="
      lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:flex lg:flex-col lg:justify-start
      2xl:col-start-3 2xl:row-end-3
      ">
          <h1 className="display-2 text-white capitalize xl:mt-4 2xl:mt-0">
              upcoming events
          </h1>
          <div className="wrap flex flex-col items-center gap-y-8 mt-6 lg:mt-12 2xl:mt-6 2xl:gap-y-8">
              <UpEventCards />
              <UpEventCards />
              <UpEventCards />
          </div>
      </div>
  );
}

export default UpcomingEvents