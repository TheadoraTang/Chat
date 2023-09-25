import Header from "../Components/Header";
import listening from "../assets/listening.png"
import { useNavigate } from "react-router-dom";
const Listen = () => {
  const nagivate = useNavigate()
  const  levelFour= [{time:"2021-6", link:"/"},{time:"2021-12",link:"/"},{time:"2022-6",link:"/"},{time:"2022-12",link:"/"},{time:"2023-6",link:"/"}]
  const  levelSix= [{time:"2021-6", link:"/"},{time:"2021-12",link:"/"},{time:"2022-6",link:"/"},{time:"2022-12",link:"/"},{time:"2023-6",link:"/"}]

  return (
    <div className="bg-[#fff7e4]">
      <Header />
      <div className="flex flex-col text-center">
        <div className="mt-20">
        <p className="font-medium text-3xl text-gray-500">四级听力</p>
        <div className="grid grid-cols-3 gap-10 w-[60%] mx-auto autorow mt-10">
          {levelFour.map((item,index)=>{
            return(
              
              <div className="flex items-center justify-center border-2 font-medium text-lg" onClick={()=>nagivate(item.link)}>
                {item.time}
              </div>
            )
          })}
        </div>
        
        </div>

        <div className="mt-20">
        <p className="font-medium text-3xl text-gray-500">六级听力</p>
        <div className="grid grid-cols-3 gap-10 w-[60%] mx-auto autorow mt-10">
          {levelSix.map((item,index)=>{
            return(
              <div className="flex items-center justify-center border-2 font-medium text-lg" onClick={()=>nagivate(item.link)}>
                {item.time}
              </div>
            )
          })}
        </div>
        <div className="flex justify-center">
        <img src={listening} className="w-96"></img>

        </div>

      

        </div>
     

      
      </div>
    </div>
  );
};

export default Listen;
