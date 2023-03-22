import React from "react";
import  "../App.css";

function Footer() {
  return (
    <>
      <div className="w-[100%] h-[10vh] flex flex-col  justify-center items-center interFont">
      <div className="w-[100%] bg-black h-[0.1vh]"></div>
        <div className="w-[90%] flex justify-between items-center">
          <div>
            <p>Copyright 2023, all right reserved to @arjun</p>
          </div>
          <div>
            <button className="m-4">Privacy</button>
            <button>Terms & condition</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
