import React from 'react'
import ConfApp from '../../ui/ConfApp'
import ZoomIcon from '../../assets/img/icons/zoom.png'
import GoogleMeetIcon from '../../assets/img/icons/google-meet.png'

const EventConferApps = () => {
  return (
      <div className=" mt-6">
          <h6 className="text-xl text-white font-medium capitalize">
              event's conferencing app:
          </h6>
          {/* apps  */}
          <div className=" grid grid-cols-2 gap-x-3 mt-4">
              <ConfApp img={ZoomIcon} alt="zoom icon" appName="zoom" />
              <ConfApp
                  active={true}
                  img={GoogleMeetIcon}
                  alt="google icon"
                  appName="google meet"
                  actBg="bg-[#437060]"
              />
          </div>
      </div>
  );
}

export default EventConferApps