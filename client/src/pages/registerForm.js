import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import GoogleIcon from "../resources/googleIcon.svg";
import girlSittingRegistrationPage from "../resources/girlSittingRegisterPage.svg";
import Logo from "../resources/logo.svg";
import { useUserAuth } from "../context/UserAuthContext";

function App2() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { googleSignIn } = useUserAuth();

  const [registerStatus, setRegisterStatus] = useState("");

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

  const register = (e) => {
    e.preventDefault();
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    Axios.post("http://localhost:3002/register", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        console.log("yha pea ayga register ");

        navigate("/login");
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    });
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh]  flex flex-col justify-center items-center bg-green-100 interFont overflow-hidden">
        <div className="flex justify-between  items-center w-[95%] h-[10%]  relative bottom-20">
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
            <Link to="/login">
              <button className="h-[4.5vh] w-[15vh] rounded-lg text-white bg-[#03C988] relative ">
                Login
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
            <form className=" h-[95%] w-[90%] flex flex-col  justify-center items-center w-100% ">
              <div className=" flex-col justify-center items-center w-[80%] h-[25%] text-center">
                <h4 className="text-3xl font-medium text-white abhayaFont relative bottom-6">
                  Create an Account
                </h4>
                <button onClick={handleGoogleSignIn} className="bg-blue-500 w-[65%] h-10 rounded-md hover:bg-white">
                  <div className="flex justify-center items-center">
                    <span className="">Sign in with google</span>
                    <img src={GoogleIcon} className="h-8 m-1" />
                  </div>
                </button>
                <div className="mb-6">
                <span className="text-white">OR</span>
                <p className="text-sm"> use your email for registration</p>
                </div>
              
              </div>

              <input
                className="w-[75%] h-[8%] p-2 bg-slate-100 text-green-500 font-medium rounded focus:outline-none m-2 mt-6"
                type="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your Email Address"
                required
              />

              <input
                className="w-[75%] h-[8%] p-2 bg-slate-100 text-green-500 font-medium rounded focus:outline-none m-2"
                type="text"
                name="username"
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Enter your Username"
              />

              <input
                className="w-[75%] h-[8%] p-2 bg-slate-100 text-green-500 font-medium rounded focus:outline-none m-2 mb-2"
                type="password"
                name="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter your Password"
              />
              <div className="m-2 mb-6">
                <input type="checkbox" className=" mr-4" required />
                <span>
                  I agree to<span className="text-white"> Terms </span>and{" "}
                  <span className="text-white">Privacy Policy</span>{" "}
                </span>
              </div>

              <button
                className="h-[9%] w-[70%] rounded-lg text-[#03C988] font-bold bg-white"
                type="submit"
                onClick={register}
              >
                Sign Up
              </button>

              <h1>{registerStatus}</h1>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App2;
