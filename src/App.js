import Attendance from "./Pages/Attendance";
import Test from "./Pages/Test";
import Words from "./Pages/Words";
import Login from "./Pages/Login";
import AI from "./Pages/AI";
import Match from "./Pages/Match";
import Friends from "./Pages/Friends";
import Community from "./Pages/Community";
import Listen from "./Pages/Listen";
import News from "./Pages/News";
import Analysis from "./Pages/Analysis";
import PageLayout from "./Layout/PageLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tests from "./Pages/Tests";

function App() {
  return (
    <BrowserRouter basename="chatgot">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<PageLayout />}>
          <Route path="/words" element={<Words />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/attendance" element={<Attendance />}></Route>
          <Route path="/AI" element={<AI />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/Listen" element={<Listen />}></Route>
          <Route path="/Listen/:id" element={<Tests />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/analysis" element={<Analysis />}></Route>
        </Route>
        <Route path="/match" element={<Match />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
