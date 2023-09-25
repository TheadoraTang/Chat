import flower from "../assets/give_flowers.png";
import React from "react";
import Header from "../Components/Header";
import { useState, useEffect } from "react";
import claw from "../assets/claw.png";
import { Button, message } from 'antd';

const Attendance = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [checkedDates, setCheckedDates] = useState([]);
  const [calendar, setCalendar] = useState();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    setMonth(new Date().getMonth() + 1);
  }, []);


  const handleDateClick = (date) => {
    const currentDate = new Date().getDate();
    const dateKey = `${month}-${currentDate}`;
    if (date === dateKey) {
      localStorage.setItem("checkedDates", JSON.stringify([...checkedDates, date]));
      messageApi.info('签到成功!');
    }
  };

  const handleLastMonthClick = () => {
    setMonth((prevMonth) => prevMonth - 1);
  };

  const handleNextMonthClick = () => {
    setMonth((prevMonth) => prevMonth + 1);
  };

  const renderCalendar = () => {
    const firstDayOfWeek = new Date(
      new Date().getFullYear(),
      month - 1,
      1
    ).getDay();

    const daysInMonth = new Date(new Date().getFullYear(), month, 0).getDate();
    const calendarRows = [];
    let tempRow = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      tempRow.push(<td key={`empty-${i}`} />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const savedDates = JSON.parse(localStorage.getItem("checkedDates"));
      console.log(savedDates)
      console.log(`${month}-${i}`)
      const isChecked = savedDates.includes(`${month}-${i}`);
      
      tempRow.push(
        <td
          key={i}
          onClick={() => handleDateClick(`${month}-${i}`)}
          className="relative"
        >
          {isChecked ? (
            <>
              {i}
              <img
                src={claw}
                className="h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              ></img>
            </>
          ) : (
            i
          )}
        </td>
      );

      if ((firstDayOfWeek + i) % 7 === 0 || i === daysInMonth) {
        calendarRows.push(<tr key={i}>{tempRow}</tr>);
        tempRow = [];
      }
    }

    return calendarRows;
  };

  return (
    
    <div className="h-[100%] bg-[#fff7e4]">
      <Header />
      <>{contextHolder}</>

      <div className="flex flex-col">
        <div className="mt-16 flex justify-center ">
          <button onClick={handleLastMonthClick}>
          <div className="button-left"></div>
          
          </button>
          <a className="text-center font-bold text-3xl px-4">{month}</a>
          <button onClick={handleNextMonthClick}>
          <div className="button-right"></div>
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <table>
            <thead>
              <tr>
                <th>周日</th>
                <th>周一</th>
                <th>周二</th>
                <th>周三</th>
                <th>周四</th>
                <th>周五</th>
                <th>周六</th>
              </tr>
            </thead>
            <tbody>{renderCalendar()}</tbody>
          </table>
        </div>

        <div className="absolute bottom-0 left-4">
          <img src={flower} className="h-44 w-auto"></img>
        </div>
      
      
      </div>
    </div>
  );
};

export default Attendance;
