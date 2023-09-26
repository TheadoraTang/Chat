import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import PageLayout from "./Layout/PageLayout";
import Words from "./Pages/Words";
import Test from "./Pages/Test";
import Attendance from "./Pages/Attendance";
import AI from "./Pages/AI";
import Friends from "./Pages/Friends";
import News from "./Pages/News";
import Listen from "./Pages/Listen";
import Tests from "./Pages/Tests";
import Community from "./Pages/Community";
import Analysis from "./Pages/Analysis";
import Match from "./Pages/Match";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <PageLayout />,
    children: [
      {
        path: "/words",
        element: <Words />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/attendance",
        element: <Attendance />,
      },
      {
        path: "/AI",
        element: <AI />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/listen",
        element: <Listen />,
      },
      {
        path: "/listen/:id",
        element: <Tests />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/analysis",
        element: <Analysis />,
      },
    ],
  },
  {
    path: "/match",
    element: <Match />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
