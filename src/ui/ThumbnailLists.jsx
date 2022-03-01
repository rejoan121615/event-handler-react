import React, { useState } from "react";

const ThumbnailLists = (props) => {
    return (
        <div className={`flex items-center ml-3 ${props.className}`}>
            {/* all item container  */}
            <div className="flex">
                {/* all items  */}
                {props.items
                    ? props.items.map((item, index) => {
                          return (
                              <div
                                  className={` rounded-full ${
                                      !props.big
                                          ? "w-10 h-10 -ml-3 first:ml-0"
                                          : " w-10 h-10 -ml-3 xl:w-12 xl:h-12 xl:-ml-5"
                                  }`}
                              >
                                  <img
                                      className=" w-full h-full"
                                      src={item}
                                      key={index + "a"}
                                      alt=""
                                  />
                              </div>
                          );
                      })
                    : null}
            </div>
            <p
                className={`text-white font-medium ml-3 capitalize ${
                    props.big ? "text-base xl:text-lg xl:ml-4" : "text-base"
                } ${props.textStyle}`}
            >
                {props.text}
            </p>
        </div>
    );
};

export default ThumbnailLists;
