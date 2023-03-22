import React, { useEffect, useState } from "react";
import sendMessageIcon from "../resources/icon-send.svg";
import ScrollToBottom from "react-scroll-to-bottom";
import "../App.css";


function Chat({ socket, userName, room, roomName }) {
  const [currentMessgae, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const SendMessage = async () => {
    if (currentMessgae !== " ") {
      const messageData = {
        room: room,
        author: userName,
        message: currentMessgae,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage(" ");
    }
  };


  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  function enterEvent(e) {
    if (e.keyCode === 13) {
      SendMessage();
    }
  }

  

  return (
    <>
      <div className=" flex flex-col justify-center items-center   h-full w-full">
        <div className="h-[100%] w-[100%]  rounded-md  flex justify-center flex-col  items-center">
        <div className="w-[15%] text-center">
      <p className="text-lg outline-dashed outline-green-400 w-[100%]">{roomName + " Room"}</p>  
        </div>
         
          <div className="w-[40%] h-[80%] bg-green-100  flex flex-col justify-end items-center rounded-md shadow-xl border border-green-400 m-2">
            <ScrollToBottom className="rounded-md  fixed h-[80%] w-[95%]">
              <div>
                {messageList.map((messageContent, key) => {
                  return (
                    <div
                      className="flex flex-col message "
                      id={userName === messageContent.author ? "you" : "other"}
                    >
                      <div className="w-[40%]  bg-green-300  m-1 p-2 message-content rounded-lg">
                        <p className="w-[100%] break-words text-md font-normal message-content1">
                          {messageContent.message}
                        </p>
                        <div className="flex mr-1 message-meta">
                          <p className=" text-xs">{messageContent.author}</p>
                          <p className="ml-1 text-xs">{messageContent.time}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollToBottom>
            <div className=" w-[100%] flex h-auto mt-4 items-center justify-center ">
              <div className="w-[100%] flex justify-center items-center relative bottom-2 left-4">
                <input
                  type="text"
                  className=" w-[90%] h-11  text-lg p-3 focus:outline-none  border-2 border-t-white border-r-white border-l-white border-b-green-400 fon"
                  value={currentMessgae}
                  placeholder="write a message"
                  onChange={(event) => {
                    setCurrentMessage(event.target.value);
                  }}
                  onKeyDown={enterEvent}
                />
                <button
                  onClick={SendMessage}
                  className="flex justify-center item-center rounded-full relative right-12"
                >
                  <img src={sendMessageIcon} className="h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* right section ends  */}
      </div>
    </>
  );
}
export default Chat;
