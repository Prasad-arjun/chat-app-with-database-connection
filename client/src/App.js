import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import ChatlandingPage from "./pages/landingPage";
import HomelandingPage from "./components/LandingPage";

import { UserAuthContextProvider } from "./context/UserAuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import RegisterPage from "./pages/registerForm";
import LoginForm from "./pages/loginForm";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2500 }, { offset: 50 });
    AOS.refresh();
  }, []);
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<HomelandingPage />} />
        <Route path="/home" element={<ChatlandingPage />} />
        <Route path="/SignUp" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
