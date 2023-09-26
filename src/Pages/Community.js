import community from "../assets/community.png";
import { HeartOutlined } from "@ant-design/icons";
import { Input } from "antd";
const { TextArea } = Input;
const Community = () => {
  const title =
    "Spring break is an economic nightmare for the hottest host cities";
  const author = "xxx";
  const paragraph =
    "Few things are as rowdy and reckless as college spring break. Each year swarms of students make a pilgrimage to America's southern beach towns for a week-long party. According to Airlines for America, a trade group, this year an astonishing 2.6m Americans are expected to fly on each day of March and April-a number boosted, no doubt, by spring-break travel. Many of their destination-cities are dreading their arrival.Miami Beach never wanted spring-breakers. This year, as partiers flooded the beach, things got raucous. On March 19th, after two consecutive";
  return (
    <>
      <div className="flex justify-center pt-12">
        <img src={community} className="w-[25%]"></img>
      </div>

      <div className="mt-20 flex justify-center mx-10">
        <div>
          <p className="text-3xl text-[#f58220] font-bold pb-4">
            Title:{title}
          </p>
          <a className="text-sm text-[#f58220] font-bold">author:{author} </a>
          <HeartOutlined />

          <p className="text-3xl text-[#f58220] font-bold  py-6">Comments</p>
          <div>
            <TextArea
              showCount
              maxLength={100}
              style={{
                height: 120,
                marginBottom: 24,
              }}
              placeholder="Comments here"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
