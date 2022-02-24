import React, { useState } from "react";

const HeaderBar = (props) => {
    // nav state
    const [navShow, setNavShow] = useState(false);
    // nav click handler
    const navClickHandler = () => {
        return setNavShow(!navShow);
    };

    return (
        <section>
            <div className="container mx-auto flex flex-wrap justify-between">
                {/* logo  */}
                <a href="" id="logo" className="text-center text-black order-1">
                    <h1 className="font-black uppercase font-sans text-2xl">
                        <span className="text-orange-600">md</span>
                        <span className="text-black">.</span>
                        <span className="text-red-500">rej</span>
                    </h1>
                </a>
                {/* page links  */}
                
                    <div className={`${navShow? 'flex': 'hidden'} flex-col justify-between w-full order-3 bg-stone-500 mt-4 rounded-lg py-4 sm:flex`}>
                        <a
                            href=""
                            className="text-white text-sm font-medium px-12 flex items-center rounded-md mb-2 transition-all hover:bg-[#AEAFFF]"
                        >
                            About
                        </a>
                        <a
                            href=""
                            className="text-white text-sm font-medium px-12 flex items-center rounded-md mb-2 transition-all hover:bg-[#AEAFFF]"
                        >
                            FAQs
                        </a>
                        <a
                            href=""
                            className="text-white text-sm font-medium px-12 flex items-center rounded-md transition-all hover:bg-[#AEAFFF]"
                        >
                            Contact Us
                        </a>
                    </div>
                

                {/* resp navbar  */}
                <button onClick={navClickHandler} className=" w-[30px] order-2 sm:hidden">
                    <span className="a w-full h-1 block rounded-sm bg-white mb-[5px]"></span>
                    <span className="a w-full h-1 block rounded-sm bg-white mb-[5px]"></span>
                    <span className="a w-full h-1 block rounded-sm bg-white"></span>
                </button>
            </div>
        </section>
    );
};

export default HeaderBar;
