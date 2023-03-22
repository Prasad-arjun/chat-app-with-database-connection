import React, { useState } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import girlSittingRegistrationPage from "../resources/girlSittingRegisterPage.svg";
import "../App.css";
import Logo from "../resources/logo.svg";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill all the fields");
      return;
    }
    Axios.post("http://localhost:3002/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        console.log("yha pea ayga login ");
        navigate("/home");
        console.log(response.data);
        setLoginStatus(response.data[0].email);
      }
    });
  };
  return (
    <>
      <div className="w-[100vw] h-[100vh]  flex flex-col justify-center items-center bg-green-100 interFont overflow-hidden">
        <div className="flex justify-between  items-center w-[95%] h-[10%] relative bottom-20">
          <div>
            <Link to="/">
              <img src={Logo} className="h-20 ml-3" alt="logo" />
            </Link>
          </div>
          <div>
            <Link to="/">
              <button className="h-[4.5vh] w-[15vh] rounded-lg text-black bg-slate-200 mr-6 relative">
                Home
              </button>
            </Link>
            <Link to="/register">
              <button className="h-[4.5vh] w-[15vh] rounded-lg text-white bg-[#03C988] relative ">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[55vw] h-[65vh] bg-white  flex flex-row-reverse  justify-between items-center shadow-xl">
          <div className="h-[100%] w-[45%]  bg-white flex justify-center items-center ">
            <div>
              <img
                src={girlSittingRegistrationPage}
                className="h-[90vh] relative right-6"
              />
            </div>
          </div>
          <div className=" h-[100%] w-[50%]  bg-[#03C988]  flex justify-center items-center">
            <form className=" h-[90%] w-[90%] flex flex-col  justify-center items-center w-100%">
              <div className=" flex-col justify-center items-center w-[80%] h-[15%] text-center">
                <h4 className="text-3xl font-medium text-white abhayaFont">
                  Login
                </h4>
              </div>

              <input
                className="w-[75%] h-[8%] p-2 bg-slate-100 text-green-500 font-medium rounded focus:outline-none m-2"
                type="text"
                name="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Enter your Username"
                required
              />

              <input
                className="w-[75%] h-[8%] p-2 bg-slate-100 text-green-500 font-medium rounded focus:outline-none m-2"
                type="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter your Password"
                required
              />
              <div className="m-2 mb-6">
                <input type="checkbox" className=" mr-4" />
                <span>
                  I agree to<span className="text-white"> Terms </span>and{" "}
                  <span className="text-white">Privacy Policy</span>{" "}
                </span>
              </div>

              <button
                className="h-[9%] w-[70%] rounded-lg text-[#03C988] font-bold bg-white"
                type="submit"
                onClick={login}
                value="Login"
              >
                login{" "}
              </button>

              <h1 className="text-md text-red-700 font-bold mt-8 underline">
                {loginStatus}
              </h1>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
