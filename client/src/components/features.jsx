import React from "react";
import SafeIcon from "../resources/secureIcon.svg";
import FreeIcon from "../resources/freeIcon.svg";
import SaveTimeIcon from "../resources/stopwatch.svg";
import About from "./About";

function Features() {
  return (
    <>
      <div
        className="w-[100%] h-[40vh] bg-[#fafafa] flex justify-center items-center mt-8 interFont"
        id="features"
      >
        <div className="flex flex-col justify-evenly items-center  w-[90%] h-[90%] p-4 relative top-8">
          <div>
            <p className="text-[2.1vw] abhayaFont">
              Features for a better experience
            </p>
          </div>
          <div className="flex justify-center items-center w-[100%]">
            <div
              className="bg-white w-[25%] h-[20vh] rounded-lg shadow-2xl flex flex-col justify-evenly  items-start p-5"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="flex justify-center items-center ">
                <img
                  src={FreeIcon}
                  alt="freeIcon"
                  className="h-10"
                  draggable={false}
                />
                <p className="text-xl font-medium top-1 relative ml-2">
                  No charge for usage
                </p>
              </div>
              <div>
                <p className="mt-2">
                  No fee or cost required for the utilization or access of the
                  product service.
                </p>
              </div>
            </div>
            <div
              className="bg-white w-[25%] h-[20vh] rounded-lg shadow-2xl flex flex-col justify-evenly  items-start p-5 m-12"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="flex justify-center items-center relative right-2">
                <img src={SafeIcon} alt="SafeIcon" className="h-12" />
                <p className="text-xl font-medium top-1 relative ml-2">
                  Keep safe & private
                </p>
              </div>
              <div>
                <p className="mt-1">
                  Ensure safety and privacy through appropriate measures and
                  protocols and provide better performance .
                </p>
              </div>
            </div>
            <div
              className="bg-white w-[25%] h-[20vh] rounded-lg shadow-2xl flex flex-col justify-evenly  items-start p-5"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="flex justify-center items-center  relative right-2">
                <img src={SaveTimeIcon} alt="SaveTimeIcon" draggable={false} />
                <p className="text-xl font-medium top-1 relative ml-2">
                  Save your time
                </p>
              </div>
              <div>
                <p>
                  Simplify the sign-up process and enter the chat room to begin
                  group chatting without any delays
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
}

export default Features;
