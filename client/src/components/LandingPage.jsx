import Navbar from "./Navbar";
import HeroImg from "../resources/lady-heroImg.svg";
import attachMentIcon from "../resources/attach-icon.svg";
import smileyIcon from "../resources/smile-icon.svg";
import sendIcon from "../resources/icon-send.svg";
import messageIcon from "../resources/messageIcon.svg";
import link from "../resources/link-icon.svg";
import Person1 from "../resources/person-1.svg";
import Person2 from "../resources/person-2.svg";
import SettingIcon from "../resources/setting-icon.svg";
import SearchIcon from "../resources/search-icon.svg";
import Features from "./features";
import "../App.css";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="w-full h-[88vh] flex justify-center items-center overflow-hidden interFont"
        id="home"
      >
        <div className="w-[90%] h-[90vh]  flex justify-center items-start">
          <div className=" w-[100%] mt-4">
            <div
              className="flex flex-col justify-center items-center mb-4"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <p className="text-5xl font-semibold mb-2 abhayaFont">
                <span className="text-[#03C988]">One Click. </span>Zero
                Firction.
              </p>
              <p className="w-[35%] text-center text-sm space-y-2 ">
                Gossip Hub streamlines group communication with just three easy
                steps, bypassing unnecessary processes found in other web apps
              </p>
            </div>
            <div className="flex justify-evenly items-center mt-8">
              <div className="flex flex-col justify-around items-center w-auto h-[70vh]">
                {/* left section */}

                <div className="bg-white w-[28vh] h-[22vh] flex flex-col justify-center items-center rounded-xl shadow-2xl">
                  <div>
                    <img
                      src={messageIcon}
                      alt="messageIcon"
                      className="relative top-1"
                      draggable={false}
                    />
                  </div>
                  <div className="relative top-2">
                    <h1 className="text-lg text-center">Onboard clients</h1>
                    <p className="text-center text-xs w-[90%]">
                      Share the link with prospects and discuss all the stuff
                    </p>
                  </div>
                  <div className="relative top-5">
                    <button className=" text-sm h-[6vh] w-[20vh] rounded-lg text-white bg-[#03C988] flex justify-center items-center">
                      Copy Link
                      <img
                        src={link}
                        className=" relative top-1 m-2 rotate-45 "
                        alt="message icon"
                        draggable={false}
                      />
                    </button>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="">
                      <div className="flex ">
                        <p className="h-12 w-12 rounded-full bg-[#03C988] text-center relative top-1 shadow-2xl">
                          <span className="relative top-3 text-white">SB</span>
                        </p>
                        <p className="h-10 w-42 text-sm text-center bg-white rounded-xl relative m-2 shadow-2xl">
                          <span className="text-center relative top-2 p-4">
                            Hey Anjali nice to meet you!
                          </span>
                        </p>
                      </div>
                      <div className="h-10 w-44 text-sm text-center bg-white  rounded-xl relative left-14 shadow-2xl">
                        <p className="text-center relative top-2 p-1 w-[100%] ">
                          Hope you're doing well.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                {/* center section */}

                <img
                  src={HeroImg}
                  className="h-[65vh] "
                  draggable={false}
                  data-aos="zoom-in"
                />

                <div className="flex items-center justify-between h-12 w-[75vh] bg-white rounded-md shadow-2xl">
                  <div className="flex items-center justify-center">
                    <img
                      src={attachMentIcon}
                      alt="attachment icon"
                      className="h-8"
                      draggable={false}
                    />
                    <p className="p-4 text-[#00000059]">Enter your message</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={smileyIcon}
                      alt="smiley_icon"
                      className="pr-5 h-5"
                      draggable={false}
                    />
                    <img
                      src={sendIcon}
                      alt="send_icon"
                      className="h-8 pr-3 rotate-45 relative top-1"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>

              <div>
                {/* right section */}
                <div className="h-[35vh] w-[32vh] flex flex-col justify-center items-center relative bottom-16 shadow-2xl rounded-xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <img
                        src={Person1}
                        alt="profilePic"
                        className="h-12"
                        draggable={false}
                      />
                    </div>
                    <div className=" relative left-2 w-[20vh]">
                      <p className="font-semibold text-sm">Arjun Prasad</p>
                      <p className="w-16 h-2 bg-slate-200 m-1 rounded-lg"></p>
                      <p className="w-12 h-2 bg-slate-200 m-1 rounded-lg"></p>
                    </div>
                    <div>
                      <img
                        src={SettingIcon}
                        alt="settingIcon"
                        className="h-4"
                        draggable={false}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-3 relative right-2">
                    <img
                      src={SearchIcon}
                      alt="search"
                      className="relative left-8 h-4 "
                      draggable={false}
                    />
                    <input
                      type="search"
                      className="hover:outline-none outline-none rounded-xl h-8 w-[28vh] p-4"
                    />
                  </div>
                  <div>
                    <div className="mt-2">
                      <p>Active Groups</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center w-[26vh]">
                        <div className="flex justify-center items-center mt-2">
                          <p className="h-10 w-10 rounded-full bg-yellow-400 text-center">
                            <span className="relative top-2">OF</span>
                          </p>
                          <p className="font-semibold relative left-2">
                            Office
                          </p>
                        </div>

                        <p className="text-red-600 font-semibold relative top-2">
                          100
                        </p>
                      </div>
                      <div>
                        <div>
                          <div className="flex justify-between items-center w-[26vh]">
                            <div className="flex justify-center items-center mt-2">
                              <p className="h-10 w-10 rounded-full bg-[#03C988] text-center">
                                <span className="relative top-2">GT</span>
                              </p>
                              <p className="font-semibold relative left-2">
                                Goa Trip
                              </p>
                            </div>

                            <p className="text-red-600 font-semibold relative top-2">
                              2
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="">
                    <div className="flex relative left-28">
                      <p className="h-10 w-42 text-sm text-center bg-blue-500 rounded-xl relative m-2 shadow-2xl">
                        <span className="text-center relative top-2 p-4 text-white">
                          Hey Sameer!
                        </span>
                      </p>
                      <p className="h-12 w-12 rounded-full text-center relative  shadow-2xl">
                        <img
                          src={Person2}
                          alt="person-1"
                          className="relative top-2 text-white h-12"
                          draggable={false}
                        />
                      </p>
                    </div>
                    <p className="h-10 w-44  text-sm text-center bg-blue-500 rounded-xl relative left-14 shadow-2xl">
                      <span className="text-center relative top-2 p-1 text-white">
                        Yes I'am what about you.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
};

export default LandingPage;
