import React from 'react'
import User from '../User'

const Asked = () => {
  return <span className=' font-medium text-sec'>asked</span>
}

const Answer = () => {
  return <span className=" font-medium text-[#65fdbd]">Answered</span>;
}

const QusAnsVideo = () => {
  return (
    <div className=' flex flex-wrap justify-between items-center gap-y-2'>
      {/* qus  */}
      <User status={<Asked />} />
      {/* ans  */}
      <User status={<Answer />} />
      {/* button  */}
      <a href="#" className=' 
      text-sec px-4 py-1 bg-sec-100 rounded-full font-medium capitalize
      '>see video</a>
    </div>
  )
}

export default QusAnsVideo