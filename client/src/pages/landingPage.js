import { useState } from "react";
import io from "socket.io-client";
import Chat from "./chat";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../resources/logo.svg";
import LeadImg from "../resources/ChatRoomLandingPage.svg";
import BgForChat_1 from "../resources/bgForChat-1.svg";
import BgForChat_2 from "../resources/bgForChat-2.svg";

const socket = io.connect("http://localhost:3001");

function LandingPage() {
  const [userName, setUserName] = useState("");
  const [roomId, setRoomId] = useState();
  const [roomName, setRoomName] = useState();
  const [showChat, setShowChat] = useState(false);
  const [togglebtJoin, setToggleBtJoin] = useState(false);
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const joinRoom = () => {
    if (userName !== "" && roomId !== "") {
      socket.emit("join_room", roomId);
      setShowChat(true);
    }
    setToggleBtJoin(false);
  };
  const Toggele = () => {
    setToggleBtJoin(true);
  };

  const ToggeleShowChat = () => {
    setShowChat(false);
  };

  function enterEvent(e) {
    if (e.keyCode === 13) {
      joinRoom();
    }
  }

  return (
    <div className=" flex flex-col  justify-center items-center h-[100vh] w-full overflow-hidden bg-green-50 interFont ">
      <img
        src={BgForChat_1}
        className="absolute h-full w-full z-0 right-44"
        alt="bg-forchat-1"
      />
      <img
        src={BgForChat_2}
        className="absolute h-full w-full z-0 "
        alt="bg-forchat-2"
      />

      <div className="flex justify-between items-center w-[90%] mt-5">
        <div>
          <Link to="/">
            <img src={Logo} className="h-20 ml-3" alt="logo" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <button className="h-[4.5vh] w-[15vh] rounded-lg text-white bg-[#03C988]  mr-6 relative">
              Home
            </button>
          </Link>
          <Link to="/home" onClick={ToggeleShowChat}>
            <button className="h-[4.5vh] w-[15vh] rounded-lg text-black bg-slate-200  mr-6 relative">
              Chat Option
            </button>
          </Link>
        </div>
      </div>

      {!showChat ? (
        <div className="h-[100vh] w-[100%] flex justify-center items-center ">
          <div className="h-full w-[90%] flex justify-around items-center">
            {/* left section start */}
            <div>
              <div>
                <img
                  src={LeadImg}
                  className="h-[65vh] relative"
                  alt="LeadImg"
                />
              </div>
            </div>
            {/* left section end right start */}

            <div className=" h-[65%] w-[30%] flex flex-col justify-around items-center shadow-md rounded-xl relative">
              <div className="text-center m-1 relative">
                <header className="text-2xl font-medium abhayaFont">
                  Welcome to Gossip Hub{" "}
                  <span className="text-[#03C988]  underline">
                    {/*  {user.displayName}  */}
                  </span>
                </header>
                <div className="w-[100%] text-xs mt-4">
                  <p>
                    To join a room, please enter your nickname and the room ID
                  </p>
                  <p className="text-[#03C988] font-bold">OR</p>
                  <p>
                    Alternatively, if you want to create a room for your
                    friends, simply click on the "Create Room" button.
                  </p>
                </div>
              </div>
              {!togglebtJoin ? (
                <div className="m-3 flex flex-col justify-center items-center">
                  <input
                    className="h-10 w-62  text-lg p-3 focus:outline-none border border-b-[#03C988]  m-2"
                    type="text"
                    placeholder="Enter your nickname"
                    onChange={(event) => {
                      setUserName(event.target.value);
                    }}
                  />
                  <div>
                    <input
                      className="h-10 w-62  text-lg p-3 focus:outline-none border border-b-[#03C988] "
                      type="number"
                      placeholder="Enter Room id"
                      onChange={(event) => {
                        setRoomId(event.target.value);
                      }}
                      onKeyDown={enterEvent}
                    />
                  </div>
                  <button
                    onClick={joinRoom}
                    className=" text-white  rounded-lg h-10 w-[62vw] text-lg  border-2  bg-[#03C988] lg:w-[16vw] m-1"
                  >
                    Join a room
                  </button>
                  <button
                    onClick={Toggele}
                    className=" text-white  rounded-lg h-10 w-[62vw] text-lg  border-2  bg-[#03C988] lg:w-[16vw]"
                  >
                    Create room
                  </button>
                </div>
              ) : (
                <div className="m-3 flex flex-col justify-center items-center">
                  <input
                    className="h-10 w-62 w-62 text-lg p-3 focus:outline-none border border-b-[#03C988] "
                    type="text"
                    placeholder="Enter the room name"
                    onChange={(event) => {
                      setRoomName(event.target.value);
                    }}
                    onKeyDown={enterEvent}
                  />
                  <div>
                    <input
                      className="h-10 w-62 text-lg p-3 focus:outline-none border border-b-[#03C988]  m-2"
                      type="text"
                      placeholder="Enter your nickname"
                      onChange={(event) => {
                        setUserName(event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <input
                      className="h-10 w-62 text-lg p-3 focus:outline-none border border-b-[#03C988] "
                      type="number"
                      placeholder="Enter Room id"
                      onChange={(event) => {
                        setRoomId(event.target.value);
                      }}
                      onKeyDown={enterEvent}
                    />
                  </div>
                  <button
                    onClick={joinRoom}
                    className=" text-white  rounded-lg h-10 w-[62vw] text-lg   bg-[#03C988] lg:w-[16vw] m-2"
                  >
                    Join a room
                  </button>
                  <button
                    onClick={Toggele && joinRoom}
                    className=" text-white  rounded-lg h-10 w-[62vw] text-lg  border-2  bg-[#03C988] lg:w-[16vw]"
                  >
                    Create room
                  </button>
                </div>
              )}
            </div>

            {/* right section end  */}
          </div>
        </div>
      ) : (
        <div className="w-[90vw] h-[90vh]">
          <Chat
            roomName={roomName}
            socket={socket}
            userName={userName}
            room={roomId}
          />
        </div>
      )}
    </div>
  );
}

export default LandingPage;
