import React, { useEffect, useState } from "react";
import Logo from "../resources/logo.svg";
import "../App.css";
import { Link as RouterLink } from "react-router-dom";
import { Button, Link as ScrollLink } from "react-scroll";
import ContactFrom from "./contactFrom";
const Navbar = () => {

  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  return (

    <>
      <nav
     className={`w-full h-16 flex justify-center items-center mt-3 overflow-hidden interFont ${
          isScrolling ? "bg-gray-100" : ""
        }`}
        style={{ position: "sticky", top: 0, zIndex: 100 }}
      >
        <div className=" h-14 w-[95%] flex justify-between items-center">
          <div className="flex w-auto items-center justify-evenly">
            <img
              src={Logo}
              alt="logo"
              className="h-20 ml-3"
              draggable={false}
            />
            <header>Gossip Hub</header>
          </div>
          <div className="w-[40%]">
            <ul className="flex items-center justify-evenly relative left-8">
              <button>
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Home
                </ScrollLink>
              </button>
              <button>
                <ScrollLink
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={35}
                  duration={500}
                >
                  Features
                </ScrollLink>
              </button>
              <button>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  Why Gossip Hub?
                </ScrollLink>
              </button>
              <button>
                <ScrollLink
                  to="customer"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={500}
                >
                  Testimonial
                </ScrollLink>
              </button>
              <ContactFrom />
            </ul>
          </div>
          <div className="flex justify-evenly item-center">
            <RouterLink to="/login">
              <button className="mr-5 h-[4.5vh] w-[15vh] bg-slate-200 rounded-lg hover:bg-[#03C988] transition-all hover:text-white">
                Log in
              </button>
            </RouterLink>
            <RouterLink to="/register">
              <button className="h-[4.5vh] w-[15vh] rounded-lg text-white bg-[#03C988] hover:bg-slate-200 transition-all hover:text-black">
                Register
              </button>
            </RouterLink>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
