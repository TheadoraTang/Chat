import dog1 from "../assets/sentencedog.png";
import dog2 from "../assets/sentencedog2.png";
import linedown from "../assets/linedown.png";
import lineup from "../assets/lineup.png";
import React from "react";

const Words = () => {
  return (
    <div className="flex flex-col justify-center grows">
      <div className="flex ">
        <img src={dog2} className="h-44 w-auto"></img>
      </div>
      <div className="flex flex-col items-center">
        <img src={lineup} className="w-[60%]"></img>
        <div className="text-2xl font-bold my-6 text-center">
          <p>A smile is the most part of a person forever</p>
          <p className="mt-2">微笑永远是最迷人潜质</p>
        </div>
        <img src={linedown} className="w-[60%]"></img>
      </div>
      <div className="flex justify-end">
        <img src={dog1} className="h-44 w-auto"></img>
      </div>

    </div>
  );
};

export default Words;
