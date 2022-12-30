import React from "react";
import Navbar from "../layout/navbar";
import Section from "../layout/section";
import Feature from "../layout/feature";
import { useEffect } from "react";
import Featuresec from "../layout/featuresec";
export interface IHomeProps {}

const HomePage: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <div className="  ">
        <Navbar />
        <Section />
        <Feature />
        <Featuresec />
      </div>
    </>
  );
};

export default HomePage;
