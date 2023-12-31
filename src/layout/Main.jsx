import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../../src/App.css";
import Footer from "../components/Footer";
import { AuthContext } from "../contexts/AuthProvider";

const Main = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div className="bg-primaryBG">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Navbar />
          <Outlet />

          <Footer />
        </div>
      )}
    </div>
  );
};

export default Main;
