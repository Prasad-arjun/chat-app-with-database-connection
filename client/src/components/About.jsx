import React from "react";
import ChattingGirl from "../resources/chatting.png";
import InBrowserChatting from "../resources/inBrowserChat.svg";
import LinkShare from "../resources/linkShare.png";
import Customer from "./Customer";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import "../App.css";


function About() {
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
      <div
        className="w-[100%] h-[160vh]  flex justify-center items-start interFont"
        id="about"
      >
        <div className="w-[100%]  h-[100%] flex  flex-col justify-around items-center">
          <div className=" flex justify-center items-center  w-[100%] mt-6 bg-[#fafafa]">
            <div>
              <img
                src={ChattingGirl}
                atl="Girl chatting"
                className="h-[50vh]"
                draggable={false}
                data-aos="zoom-in"
              />
            </div>
            <div className="w-[45%] h-[60%]">
              <h1 className="font-bold text-4xl mb-6 abhayaFont">
                Easily connect with your group in just one click, without the
                need for intermediaries or lengthy processes.
              </h1>
              <p className="mb-3 text-[1.1vw]">
                The software allows you to connect with your group anytime,
                anywhere, without intermediaries.
              </p>
              <p className="text-[1.1vw]">
                It saves time and ensures a seamless experience, with secure
                conversations and data. You can focus on staying connected with
                your group and achieving your goals together.{" "}
              </p>
            </div>
          </div>
          <div className=" flex justify-evenly items-center w-[80%] mt-8">
            <div className="w-[45%] h-[60%]">
              <h1 className="font-bold text-4xl mb-6 abhayaFont">
                Initiate a chat directly within your web browser without having
                to navigate away from it
              </h1>
              <p className="mb-3 text-[1.1vw]">
                Easily join our browser-based chat without having to leave your
                current browser.
              </p>
              <p className=" text-[1.1vw]">
                Our site offers a fast and secure connection, eliminating the
                need to download external apps to your device for chatting. This
                allows you to save storage space on your device for other
                important applications.
              </p>
              <button
                className=" bg-[#03C988] mt-6 w-[30%] h-[18%] p-2 rounded-lg text-white"
                onClick={handleGoogleSignIn}
              >
                Start Chatting Now
              </button>
             
            </div>
            <div>
              <img
                src={InBrowserChatting}
                atl="indox notification"
                className="h-[50vh]"
                draggable={false}
                data-aos="zoom-in"
              />
            </div>
          </div>
          <div className=" flex justify-evenly items-center w-[80%] mt-20">
            <div>
              <img
                src={LinkShare}
                atl="Link "
                className="h-[50vh]"
                draggable={false}
                data-aos="zoom-in"
              />
            </div>
            <div className="w-[45%] h-[60%]">
              <h1 className="font-bold text-4xl mb-6 abhayaFont">
                Duplicate the link and distribute it among your associates to
                participate in the group chat.
              </h1>
              <p className="mb-3 text-[1.1vw]">
                With our browser-based chat app, you can effortlessly copy and
                share the link among your contacts.
              </p>
              <p className=" text-[1.1vw]">
                They can join the chat room with just one click, without any
                intermediaries or complex processes, ensuring a seamless
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Customer />
    </>
  );
}

export default About;
