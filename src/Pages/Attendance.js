import flower from "../assets/give_flowers.png";
import React from "react";
import Header from "../Components/Header";

const Attendance = () => {
  return (
    <div className="h-[100%] bg-[#fff7e4]">
      <Header />

      <div className="flex flex-col h-[92%]">
        <div className="h-44">
          <img src={flower} className="h-44 w-auto"></img>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
