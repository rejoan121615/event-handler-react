import React from "react";
import IntroCard from "../../ui/Directory/IntroCard";
import GetRightAns from "../../ui/Directory/GetRightAns";
import CareerTrans from '../../ui/Directory/CareerTrans';

const DirectoryIntro = () => {
    return (
        <section>
            <div className="container sm:grid sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-4
                lg:gap-x-6">
                {/* left section  */}
                <IntroCard />
                {/* center img  */}
                <GetRightAns className="mt-4 sm:col-span-2 sm:mt-0 lg:col-start-2" />
                {/* right img  */}
                <CareerTrans className=" sm:col-start-2 sm:row-start-1 sm:mt-0 sm:justify-self-end
                 lg:col-start-4 lg:self-start" />
            </div>
        </section>
    );
};

export default DirectoryIntro;
