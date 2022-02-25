import React from 'react'
import UpEventCards from './UpEventCards'


const UpcomingEvents = () => {
  return (
    <div className=''>
      <h1 className='display-2 text-white capitalize'>upcoming events</h1>
      <div className="wrap flex flex-col items-center">
        <UpEventCards />
        <UpEventCards />
        <UpEventCards />
      </div>
    </div>
  )
}

export default UpcomingEvents