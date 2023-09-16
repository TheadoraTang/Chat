import logo from "../assets/logo.png";
import React, { useState } from "react";



const Footer=()=>{
  return(
    <div className="h-32 w-[100%%] bg-black flex flex-row text-white items-center font-medium">
    <img src={logo} className="h-32 w-auto ml-2"></img>
    <div className="ml-20" > 关于我们</div>
    <div className="ml-20" > 企业微信</div>
    <div className="ml-20" > 资讯 </div>

   
   
  </div>

  )
}
export default Footer;
