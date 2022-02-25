import React from 'react'
import UpEventCards from './UpEventCards'


const UpcomingEvents = (props) => {
  return (
    <div className={`${props.className}`}>
      <h1 className='display-2 text-white capitalize'>upcoming events</h1>
      <div className="wrap flex flex-col items-center gap-y-8 mt-6 lg:mt-12">
        <UpEventCards />
        <UpEventCards />
        <UpEventCards />
      </div>
    </div>
  )
}

export default UpcomingEvents