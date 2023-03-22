import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn,signUp } = useUserAuth();
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

  const Login = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <input
          type="email"
          className="bg-green-500"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          className="bg-green-500"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={Login}>Login</button>
        <br />
        <button className="bg-red-600 " onClick={handleGoogleSignIn}>
          sign in{" "}
        </button>
      </div>
    </>
  );
};

export default Login;
