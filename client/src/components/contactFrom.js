import React, { useState } from "react";
import Popup from "reactjs-popup";

function ContactFrom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Popup
        trigger={<button className="button">Contact </button>}
        modal
        nested
      >
        {(close) => (
          <div
            className="w-[50vw] h-[70vh] flex justify-center items-center"
            data-aos="zoom-in-up"
            data-aos-duration="500"
          >
            <div className="w-[100%] h-[100%] flex flex-col  justify-start items-center">
              <div className="w-[60%] h-[15%] p-2 text-white flex bg-[#03C988] justify-between items-center">
                <div className="w-[100%] h-[100%] flex flex-col justify-center items-center text-xl">
                  <h1>Love to hear from you</h1>
                  <h1>Get in touch</h1>
                </div>
                <div>
                  <button onClick={close} className="bg-red-500 w-6 rounded">
                    &times;
                  </button>
                </div>
              </div>
              <div className="w-[100%] h-[100%] flex justify-center items-start">
                <div className="w-[60%] h-[100%] bg-slate-100 rounded-md  flex flex-col justify-center items-center">
                  <div className="mb-4">
                    <h1 className="text-xl text-[#03C988]">Enquiry form</h1>
                  </div>
                  <div>
                    <form method="POST">
                      <div className="flex flex-col justify-center items-center">
                        <input
                          className="outline-none bg-slate-200 h-[100%] w-[90%] p-2 m-1    rounded-lg"
                          type="text"
                          placeholder="Enter your name"
                          name="userName"
                          onChange={(e) => setName(e.target.value)}
                        />

                        <input
                          className="outline-none bg-slate-200 h-[100%] w-[90%] p-2 m-1   rounded-lg"
                          type="email"
                          placeholder="Enter your email id"
                          name="emailId"
                          onChange={(e) => setEmail(e.target.value)}
                        />

                        <div>
                          <label htmlFor="">Choose your gender:</label>
                          <input
                            className="outline-none bg-slate-200 h-[100%] p-2 m-2   rounded-lg"
                            type="radio"
                            name="Gender"
                            value="Male"
                          />
                          <label htmlFor="">Male</label>
                          <input
                            className="outline-none bg-slate-200 h-[100%]  p-2 m-2   rounded-lg"
                            type="radio"
                            name="Gender"
                            value="Female"
                          />
                          <label htmlFor="">Female</label>
                        </div>

                        <input
                          type="text"
                          className="outline-none bg-slate-200 h-[100%] w-[90%] p-2 m-1    rounded-lg"
                          placeholder="Subject"
                          name="subject"
                          onChange={(e) => setSubject(e.target.value)}
                        />

                        <textarea
                          className="outline-none bg-slate-200 h-[100%] w-[90%] p-2 m-2 resize-none rounded-lg"
                          placeholder="Enter your message"
                          cols="40"
                          rows="4"
                          name="message"
                          onChange={(e) => setMessage(e.target.value)}
                        />

                        <button
                          className="bg-[#03C988] h-[50%] w-[30%] p-1 mt-2 rounded-lg text-white"
                          onClick={handleSubmit}
                        >
                          SUBMIT
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default ContactFrom;
