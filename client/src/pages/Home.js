import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="text-2xl">
        Hello Welcome <br />
        {user.displayName}
      </div>
      <div className="bg-red-600">
        <button  onClick={handleLogout}>
          Log out
        </button>
      </div>
    </>
  );
};

export default Home;
