import React from "react";
import { Checkbox, Form, Input } from "antd";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import introduceContainer1 from "../assets/introduceContainer1.png";
import introduceContainer2 from "../assets/introduceContainer2.png";
import introduceContainer3 from "../assets/introduceContainer3.png";
import introduceContainer4 from "../assets/introduceContainer4.png";
import AI from "../assets/AI.png";
import news from "../assets/news.png";
import question from "../assets/question.png";
import think from "../assets/think.png";
import watch from "../assets/watch.png";
import text from "../assets/text.png";
import chat from "../assets/chat.png";
import cal from "../assets/cal.png";
import com from "../assets/com.png";
import find from "../assets/find.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const list = [
    {
      name: "柴狗小世界",
      it: [
        {
          name: (
            <Link to="/friends" state={{ fromDashboard: true }}>
              好友交互
            </Link>
          ),
          img: think,
        },
        { name: <Link to="/community">社区</Link>, img: com },
      ],
    },
    {
      name: "柴狗口语训练",
      it: [
        { name: <Link to="/AI">AI 对话</Link>, img: AI },
        { name: <Link to="/match">真人匹配</Link>, img: chat },
      ],
    },
    {
      name: " 柴狗小功能",
      it: [
        {
          name: <Link to="/attendance">每日签到</Link>,
          img: cal,
        },
        { name: <Link to="/words">佳句赏析</Link>, img: watch },
        { name: <Link to="/test">单词记忆</Link>, img: text },
        { name: <Link to="/news">新闻阅读</Link>, img: news },
        { name: <Link to="/listen">听力音频</Link>, img: question },
        { name: <Link to="/analysis">学情分析</Link>, img: find },
      ],
    },
  ];

  const funcs = [
    { name: "虚拟的AI 智能对话", img: introduceContainer1 },
    { name: "真实的真人匹配", img: introduceContainer2 },
    { name: "评论区留下你的练习心得", img: introduceContainer3 },
    { name: "记录你的英语口语学习历程", img: introduceContainer4 },
  ];

  let location = useLocation();
  console.log(location);

  return (
    <>
      <div className="h-screen bg-image flex flex-col">
        <Header />
        <div className="flex flex-1 flex-row items-center ">
          <div className="basis-1/2 justify-center items-center flex text-2xl flex-col">
            <div className="text-5xl">专业的英语口语对话平台</div>
            <div className="mt-6 dancing font-bold text-3xl">
              向哑巴英语 say goodbye!
            </div>

            <button className="bg-[#FFC125] rounded-md py-2 mt-6 px-4 text-lg text-white font-bold">
              开始口语学习之旅
            </button>
          </div>
          <div className="basis-1/2 justify-center flex">
            <Form
              name="basic"
              labelCol={{
                span: 16,
              }}
              layout="vertical"
              wrapperCol={{
                span: 32,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="昵称"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input className="h-[40px]" />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password className="h-[40px]" />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <button className="bg-[#FFC125] rounded-md py-2 px-4 text-lg text-white font-bold w-48">
                  加入chatgot
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-row w-[70%] m-auto mb-10 text-gray-500 font-bold">
        {funcs.map((item, index) => {
          return (
            <div className="flex flex-col item-center basis-1/4 py-10  text-center">
              <img src={item.img} className="px-12"></img>
              <p> {item.name}</p>
            </div>
          );
        })}
      </div>
      {list.map((ite, index) => {
        return (
          <div className="mb-20">
            <p className="text-center text-3xl text-gray-500">{ite.name}</p>
            <div className="w-[80%] m-auto mt-10">
              <div className="grid grid-cols-3 gap-y-6 ">
                {ite.it.map((item, index) => {
                  return (
                    <div className="mx-4 border-2 flex flex-row items-center ">
                      <img src={item.img}></img>
                      <p className="ml-10 font-bold">{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

      <Footer />
    </>
  );
};

export default Login;
