import React from 'react'
import RightImg from '../../assets/img/directory/right-direction.png'

const CareerTrans = (props) => {
  return (
      <div
          className={`flex items-center mt-6 ${props.className}`}
      >
          {/* left  */}
          <img src={RightImg} alt="right side" className=" w-10" />
          {/* img wrap  */}
          <div className=" bg-careerTrans bg-no-repeat w-40 h-40 bg-full-100 p-5 ml-4">
              <h6 className=" text-white font-medium capitalize text-xl">
                  career transitions
              </h6>
          </div>
      </div>
  );
}

export default CareerTrans