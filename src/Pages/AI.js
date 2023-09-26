import dog from "../assets/Doggo.png";

const AI = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="w-[60%] flex flex-row  mt-10 ">
        <button className="basis-1/4 bg-[#faa755] rounded-lg mx-10 py-2 ">
          请输入对话场景
        </button>
        <button className="basis-1/4  bg-[#faa755] rounded-lg mx-10 py-2">
          play
        </button>
        <button className="basis-1/4  bg-[#faa755] rounded-lg mx-10 py-2">
          stop
        </button>
        <button className="basis-1/4  bg-[#faa755] rounded-lg mx-10 py-2">
          open/close
        </button>
      </div>

      <img src={dog} className="w-[600px] h-auto"></img>
    </div>
  );
};

export default AI;
