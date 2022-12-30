import React from "react";
import img from "../images/shop1.png";
export interface featureProps {}

const featuresec: React.FunctionComponent<featureProps> = (props) => {
  return (
    <>
      <section id="features" className="bg-green ">
        <div className="  container flex flex-col px-2 mx-auto  items-center space-y-12 md:space-y-4 md:flex-row">
          <div className=" flex ml-4 flex-col space-y-4 mt-10 md:w-1/2 ">
            <h2 className="max-w-md text-5xl font-bold text-center  md:text-left">
              Everything you need to sell online
            </h2>
            <p className="max-w-md text-center text-xs	leading-0	 text-black md:text-left">
              Ecwid gives you the power to easily sell anywhere, to anyone —
              across the internet and around the world. Control everything from
              a single platform with centralized inventory, order management,
              and pricing. It doesn’t get any simpler than this.
            </p>
          </div>

          <div className="md:w-1/2">
            <img src={img} alt="pic" className="w-full h-auto max-w-full" />
          </div>
        </div>
      </section>
    </>
  );
};
export default featuresec;
