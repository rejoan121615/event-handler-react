import React from 'react'
import Input from '../ui/Input';
import SearchIcon from '../assets/icons/search.png'

const Question = (props) => {
  return (
      <section>
          <div className="container">
              <div className=" mt-10 xl:w-5/6">
                  <Input
                      type="text"
                      placeholder="Search for anything"
                      icon={SearchIcon}
                      imgBg="bg-transparent"
                      {...props}
                  />
              </div>
          </div>
      </section>
  );
}

export default Question