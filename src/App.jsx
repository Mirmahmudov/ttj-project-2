import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Students from "./pages/students/Students";
import Sidenav from "./components/Sidenav";
import Paymet from "./pages/paymet/Paymet";
import Navbar from "./components/Navbar";
import Rooms from "./pages/rooms/Rooms";
import StudentWait from "./pages/students/StudentWait";
import StudentGiven from "./pages/students/StudentGiven";
import StudentOut from "./pages/students/StudentOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/paymet" element={<Paymet />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/studentwait" element={<StudentWait />} />
          <Route path="/studentgiven" element={<StudentGiven />} />
          <Route path="/studentout" element={<StudentOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
