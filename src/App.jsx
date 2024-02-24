import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import "./App.css";
import Header from "./componenets/Header";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/About";
import OurWorks from "./pages/ourworks/OurWorks";
import Experiences from "./pages/Experiences";
import Quality from "./pages/Quality";
import Footer from "./componenets/Footer";
import ContactUs from "./pages/ContactUs";

import ScrollToTop from "./componenets/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  return (
    <div className="font-montserrat font-medium">
      {/* {window.location.pathname == "/" ? null : <Navbar />} */}
      <Header />
      <ScrollToTop />

      {loading ? (
        <div className="flex justify-center items-center  h-[80vh] ">
          <Spinner className="h-12 w-12" color="blue" />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/*" element={<Homepage />} exact />
            <Route path="/home" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-works" element={<OurWorks />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
