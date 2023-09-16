import Header from "../Components/Header";
import word_dog from "../assets/word_dog.png";
import test_dog from "../assets/test_dog.png";
import words from "../assets/words.png";
import React, { useState } from "react";
import { Button, Modal, Table, Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const itemstwo = [
  getItem("看中文选英文", "1", <MailOutlined />),
  getItem("看中文选英文", "2", <AppstoreOutlined />),

  getItem("看中文选英文", "3", <SettingOutlined />),
  getItem("看中文选英文", "4", <SettingOutlined />),
];

const Test = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpentwo, setIsModalOpentwo] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModaltwo = () => {
    setIsModalOpentwo(true);
  };
  const handleOktwo = () => {
    setIsModalOpentwo(false);
  };
  const handleCanceltwo = () => {
    setIsModalOpentwo(false);
  };

  const dataSource = [
    {
      key: "1",
      en: "胡彦斌",

      zh: "西湖区湖底公园1号",
    },
    {
      key: "2",
      en: "胡彦祖",

      zh: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    {
      title: "英文",
      dataIndex: "en",
      key: "en",
    },
    {
      title: "中文",
      dataIndex: "zh",
      key: "zh",
    },
  ];

  return (
    <div className="h-[100%] bg-[#fff7e4]">
      <Header />
      <img src={words} className="h-44 m-auto"></img>
      <div className="flex justify-center items-center mt-6">
        <div className="flex flex-row w-[60%] m-auto text-2xl font-bold border-4">
          <div className="flex flex-col basis-1/2 items-center border-4">
            <div className="my-4"> 单词栏</div>
            <img src={word_dog} className="h-64"></img>
            <Button className="my-4" onClick={showModaltwo}>
              {" "}
              查看所有单词
            </Button>
            <Modal
              title="单词表"
              centered
              open={isModalOpentwo}
              onOk={handleOktwo}
              onCancel={handleCanceltwo}
            >
              <Table dataSource={dataSource} columns={columns} />
            </Modal>
          </div>
          <div className="flex flex-col basis-1/2 items-center border-4">
            <div className="my-4"> 测试栏</div>
            <img src={test_dog} className="h-64"></img>
            <Button className="my-4" onClick={showModal}>
              {" "}
              测试
            </Button>
            <Modal
              title="请选择"
              centered
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Menu
                onClick={() => {}}
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={itemstwo}
              />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
