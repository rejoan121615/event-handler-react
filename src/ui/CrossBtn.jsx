import React from 'react'
import CrossBtnImg from '../assets/img/icons/cross-btn.png'

const CrossBtn = (props) => {
  return (
    <button className="
           bg-[#657175] w-10 h-10 flex justify-center items-center rounded-xl">
          <img src={CrossBtnImg} alt="cross btn img" className=' w-4 md:w-5' />
      </button>
  );
}

export default CrossBtn