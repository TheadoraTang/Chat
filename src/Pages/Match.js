import dog from "../assets/dog.png";
const Match = () => {
  return (
    <div className="flex justify-center items-center h-[100%] bd">
      <div className="w-[70%] bd2 h-[60%] rounded-xl flex flex-row space-between">
        <div className="text-[#FF9900] font-medium basis-1/2 text-5xl flex  pl-6 flex-col pt-20">
          <div>
            <p className="Permanent">
              Hello<br></br>This is voice chat in chatgot<br></br>Now begin!
            </p>
          </div>
          <button className="bg-white w-[100px] text-xl mt-10 btn Permanent">
            begin
          </button>
        </div>
        <div className="basis-1/2 flex justify-end">
          <img src={dog}></img>
        </div>
      </div>
    </div>
  );
};

export default Match;
