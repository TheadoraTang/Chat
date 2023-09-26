import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
const PageLayout=()=>{
  return (
    <div className="bg-[#fff7e4] min-h-screen flex flex-col ">
      <Header/>
      <Outlet/>
    </div>
  )
}

export default PageLayout;