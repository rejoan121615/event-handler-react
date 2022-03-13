import React from "react";
import One from "../assets/img/about/one.jpg";
import Two from "../assets/img/about/two.jpg";
import Three from "../assets/img/about/three.jpg";
import Four from "../assets/img/about/four.jpg";
import Five from "../assets/img/about/five.jpg";
import Six from "../assets/img/about/six.jpg";
import Tag from "../ui/Tag";
import ThumbnailLists from "../ui/ThumbnailLists";

const useAboutPageCard = (PassedComponent, name) => {
    return class NewComponent extends React.Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            console.log(this.props);
        }
        // render
        render() {
            const { tag, title, titleDis } = this.props;
            return (
                <React.Fragment>
                    <section>
                        <div className="container flex flex-col gap-y-6 sm:flex-row sm:items-center ">
                            {/* right avatar  */}
                            <div className=" w-6/6 sm:w-3/6 sm:order-1">
                                <PassedComponent {...this.props} />
                            </div>
                            {/* left side texts  */}
                            <div className=" w-6/6 sm:w-3/6">
                                <h2
                                    className=" text-third font-bold text-4xl
                    md:text-5xl
                    lg:text-6xl"
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
                                        {titleDis && titleDis.map((text, index) => {
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
                                {/* tag list  */}
                                {tag && (
                                    <div className=" flex gap-x-4 flex-wrap">
                                        {tag.map((item, index) => {
                                            return (
                                                <Tag
                                                    tag={item}
                                                    key={` tag${index}`}
                                                    className=" text-third bg-[#45605f]"
                                                />
                                            );
                                        })}
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
