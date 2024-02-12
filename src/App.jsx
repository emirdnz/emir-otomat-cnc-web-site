import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./componenets/Header";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import OurWorks from "./pages/OurWorks";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* {window.location.pathname == "/" ? null : <Navbar />} */}
        <Header />
        <Routes>
          <Route path="/anasayfa" element={<Homepage />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/calismalarimiz" element={<OurWorks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
 