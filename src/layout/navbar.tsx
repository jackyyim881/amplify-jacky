import React, { useEffect, useState } from "react";
import img from "../images/Logo.png";
import { Link } from "react-router-dom";
export interface navbarProps {}

const Navbar: React.FunctionComponent<navbarProps> = (props) => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <>
      <nav className={navbar ? "navbar active " : "navbar"}>
        <div className="relative container mx-auto p-6">
          <div className="flex items-center  justify-between">
            <div className="pt-2">
              <img src={img} alt="logo" className="object-contain h-20 w-40" />
            </div>
            <div className="hidden lg:flex space-x-4 ml-20 content-between  ">
              <Link to="/Price" className="	hover:text-darkGrayishBlue ">
                Price
              </Link>
              <Link to="/About" className=" mr-1.5hover:text-darkGrayishBlue">
                About
              </Link>
              <Link to="/About" className="hover:text-darkGrayishBlue">
                About
              </Link>
              <Link to="/About" className="hover:text-darkGrayishBlue ">
                Content
              </Link>
                         
            </div>
            <a
              href="#"
              className=" hidden md:block p-3 px-6 pt-2  bg-brightRed	 text-black rounded-full baseline hover:bg-brightRed"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
