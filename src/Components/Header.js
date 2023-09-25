import logo from "../assets/logo.png";
import React from "react";
import { Input } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  HomeOutlined,
  CommentOutlined,
} from "@ant-design/icons";

const items = [
  {
    label: (
      <a href="/"  >
        主页
      </a>
    ),
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: (
      <a href="/community"  >
        社区
      </a>
    ),
    key: "community",
    icon: <CommentOutlined />,
  },
  {
    label: (
      <a href="/friends"  >
       好友
      </a>
    ),
    key: "friends",
    icon: <SettingOutlined />,
  },
  {
    label: (
      <a href="/" >
        个人主页
      </a>
    ),
    key: "ihome",
    icon: <AppstoreOutlined />,
  },
];

const Header = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const { Search } = Input;
  return (
    <div className="h-16 w-[100%%] bg-black flex font-medium">
      <img src={logo} className="h-16 w-auto ml-2 mr-4"></img>
      <div className="flex flex-1 items-center text-white">
        {items.map((item, index) => {
          return (
            <div className="flex items-center px-6">
              {item.icon}
              <a>{item.label}</a>
            </div>
          );
        })}
      </div>
      <div className="flex items-center">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="medium"
          onSearch={onSearch}
          style={{
            width: 250,
            marginRight: "30px",
          }}
        />
        <button className="mr-6 bg-[#66CDAA] rounded-md py-1 px-4">登录</button>
        <button className="mr-6  bg-[#FFC125] rounded-md py-1 px-4">
          注销
        </button>
      </div>
    </div>
  );
};
export default Header;
