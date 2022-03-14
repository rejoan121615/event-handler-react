import React from "react";
import Tag from "../ui/Tag";
import Input from "../ui/Input";
import SearchIcon from "../assets/icons/search.png";

const useAboutPageCard = (PassedComponent, name) => {
    return class NewComponent extends React.Component {
        constructor(props) {
            super(props);
        }

        // render
        render() {
            const { tag, title, titleClass, titleDis, para, tagClass, search } =
                this.props;
            return (
                <React.Fragment>
                    <section>
                        <div className="container flex flex-col gap-y-6 py-36 sm:flex-row sm:items-center xl:py-0 ">
                            {/* right avatar  */}
                            <div className=" w-6/6 sm:w-3/6 sm:order-1">
                                <PassedComponent {...this.props} />
                            </div>
                            {/* left side texts  */}
                            <div className=" w-6/6 sm:w-3/6">
                                <h2
                                    className={` font-bold text-4xl md:text-5xl lg:text-6xl ${
                                        titleClass ? titleClass : "text-third"
                                    }`}
                                >
                                    {title}
                                </h2>
                                <div className=" mt-4 lg:mt-8">
                                    <h4
                                        className=" text-white font-bold text-2xl 
                        sm:text-[20px]
                        md:text-[25px]
                        lg:text-[30px] lg:leading-[38px]
                        xl:leading-[45px] xl:text-[35px]"
                                    >
                                        {titleDis &&
                                            titleDis.map((text, index) => {
                                                return (
                                                    <span
                                                        key={index + "span"}
                                                        className={
                                                            index === 1
                                                                ? "block text-[#9d9fa1]"
                                                                : null
                                                        }
                                                    >
                                                        {text}
                                                    </span>
                                                );
                                            })}
                                    </h4>
                                </div>
                                {/* para  */}
                                {para && (
                                    <p
                                        className=" 
                                        text-base text-[#CCCCCC] mt-2 w-5/6
                                        md:mt-4 2xl:mt-6
                                        "
                                    >
                                        {para}
                                    </p>
                                )}
                                {/* tag list  */}
                                {tag && (
                                    <div className=" flex gap-x-4 flex-wrap">
                                        {tag.map((item, index) => {
                                            return (
                                                <Tag
                                                    tag={item}
                                                    key={` tag${index}`}
                                                    className={
                                                        tagClass
                                                            ? tagClass
                                                            : "text-third bg-[#45605f]"
                                                    }
                                                />
                                            );
                                        })}
                                    </div>
                                )}
                                {/* search bar  */}
                                {search && (
                                    <div className=" mt-10 xl:w-5/6">
                                        <Input
                                            type="text"
                                            placeholder="Search for anything"
                                            icon={SearchIcon}
                                            imgBg="bg-transparent"
                                            {...this.props}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            );
        }
    };
};

export default useAboutPageCard;
