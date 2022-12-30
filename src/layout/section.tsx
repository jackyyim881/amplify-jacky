import React, { useEffect, useState } from "react";
import Video from "./video";
import shop2 from "../images/shop2.png";
export interface SectionProps {}

const Section: React.FunctionComponent<SectionProps> = (props) => {
  // const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  // const showButton = () => {};
  // useEffect(() => {
  //   window.addEventListener();
  // });
  return (
    <section id="hero" className="">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-10">
        {/* left */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl  font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
          </p>
          <div className="flex justify-content md:justify-start">
            <a
              href="#"
              className="p-3 px-6 pt-2  bg-brightRed	 text-white rounded-full baseline hover:bg-brightRed"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={shop2} alt="pic" />
        </div>
      </div>
    </section>
  );
};

export default Section;
