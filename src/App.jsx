import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./componenets/Header";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/About";
import OurWorks from "./pages/OurWorks";
import Experiences from "./pages/Experiences";
import Quality from "./pages/Quality";
import Vision from "./pages/Vision";

function App() {
  return (
    <div className="font-montserrat font-medium">
      <BrowserRouter>
        {/* {window.location.pathname == "/" ? null : <Navbar />} */}
        <Header />
        <Routes>
          <Route path="/*" element={<Homepage />} exact />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/vision" element={<Vision />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 