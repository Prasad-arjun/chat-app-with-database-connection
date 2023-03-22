import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import  "../App.css";


function Customer() {
    const { googleSignIn } = useUserAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
          await googleSignIn();
          navigate("/home");
        } catch (error) {
          console.log(error.message);
        }
      };
  return (
    <>
      <div className="w-[100%] h-[100vh]  flex justify-center items-start interFont" id="customer">
        <div className="flex flex-col justify-center items-center mt-14">
          <div className="w-[100%] h-[40vh] bg-[#03C988] flex flex-col justify-center items-center mt-8 ">
            <div>
              <h1 className="text-[1.9vw] font-medium abhayaFont">
                How do our users perceive our product ?
              </h1>
            </div>
            <Carousel
              autoPlay={true}
              showThumbs={false}
              infiniteLoop={true}
              swipeable={true}
              stopOnHover={false}
              showStatus={false}
              showIndicators={false}
              className="w-[100%] h-[50%] flex  justify-center items-center"
            >
              <div className="text-xl text-white">
                <p>Sameer</p>
                <p className="font-bold text-lg">
                  Great product it save a lot time of mine
                </p>
              </div>
              <div className="text-xl text-white">
                <p>Mohit</p>
                <p className="font-bold text-lg">
                  "It help me to chat direct to my freinds all together with
                  leeting any app to download"
                </p>
              </div>
              <div className="text-xl text-white">
                <p>Ajit</p>
                <p className="font-bold text-lg">
                  " It is great product it elimiantes all the middle process and
                  direct focus on delivering the service"
                </p>
              </div>

              <div className="text-xl text-white">
                <p>Abhijit</p>
                <p className="font-bold text-lg">
                  "Great product it save a lot time of mine"
                </p>
              </div>
              <div className="text-xl text-white">
                <p>Shreya</p>
                <p>
                  "It help me to chat direct to my freinds all together with
                  leeting any app to download"
                </p>
              </div>
              <div className="text-xl text-white">
                <p>Priya</p>
                <p className="font-bold text-lg">
                  " It is great product it elimiantes all the middle process and
                  direct focus on delivering the service"
                </p>
              </div>
            </Carousel>
          </div>
          <div className="w-[80%] h-[35vh]  mt-6" data-aos="zoom-in">
            <div className="mt-8 flex flex-col justify-around items-center h-[80%]">
              <h1 className="w-[35%] text-center text-3xl font-semibold abhayaFont">
                "Stay in the loop with Gossip Hub - Your go-to chat app for
                juicy updates and lively conversations!"
              </h1>
              <button className=" bg-[#03C988]  w-[15%] h-[20%] p-2 rounded-lg text-white" onClick={handleGoogleSignIn}>Start Chatting Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Customer;
