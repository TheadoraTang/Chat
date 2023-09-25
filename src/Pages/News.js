import Header from "../Components/Header";
const News = () => {
  const title = "Spring break is an economic nightmare for the hottest host cities"
  const paragraph="Spring break is an economic nightmare for the hottest host cities.Spring break is an economic nightmare for the hottest host cities"
  return (
    <div className="h-[100%] bg-[#fff7e4]">
      <Header />
      <div className="text-center mt-16 text-2xl">{title}</div>
      <div className=" w-[80%] mx-auto flex justify-center mt-10">
        {paragraph}
      </div>
      

    </div>
  );
};

export default News;
