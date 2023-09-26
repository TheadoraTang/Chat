import { useLocation } from "react-router-dom";
import datas from "../data/data.json";
import { useEffect, useState } from "react";

const Tests = () => {
  const [exercise, setExercise] = useState("");
  const location = useLocation().pathname;
  const time = location.slice(location.lastIndexOf('/') + 1);
  const data = datas;

  useEffect(() => {
    data.map((item) => {
      if (item.name == time) {
        setExercise(item);
      }
    });
  
  });


  return (
    <>
      <div className="text-center mt-16 text-2xl">{exercise.title}</div>
      <div className=" w-[80%] mx-auto flex justify-center mt-10">
        {exercise.paragraph}
      </div>
    </>
  );
};

export default Tests;
