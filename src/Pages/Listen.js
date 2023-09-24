import Header from "../Components/Header";
import listening from "../assets/listening.png"
const Listen = () => {

  const  levelFour= ["2021-6","2021-12","2022-6","2022-12","2023-6"]
  const  levelSix= ["2021-6","2021-12","2022-6","2022-12","2023-6"]


  return (
    <div className="bg-[#fff7e4]">
      <Header />
      <div className="flex flex-col text-center">
        <div className="mt-20">
        <p className="font-medium text-3xl text-gray-500">四级听力</p>
        <div className="grid grid-cols-3 gap-10 w-[60%] mx-auto autorow mt-10">
          {levelFour.map((item,index)=>{
            return(
              <div className="flex items-center justify-center border-2 font-medium text-lg">
                {item}
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
              <div className="flex items-center justify-center border-2 font-medium text-lg">
                {item}
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
