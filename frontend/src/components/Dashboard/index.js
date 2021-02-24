import React from "react";
import { useSelector } from "react-redux";
// import ProfileButton from "./ProfileButton";
import Navigation from "../Navigation";

function Dashboard({ isLoaded }) {
  return (
    <div>
      <Navigation isLoaded={isLoaded} />
    </div>
  );
}

export default Dashboard;
