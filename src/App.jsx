import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import "./App.css";
import Header from "./componenets/Header";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import OurWorks from "./pages/ourworks/OurWorks";
import Career from "./pages/Career";
import Certificates from "./pages/Certificates";
import Footer from "./componenets/Footer";
import ContactUs from "./pages/ContactUs";

import ScrollToTop from "./componenets/ScrollToTop";
import Machines from "./pages/Machines";
import Quality from "./pages/Quality"

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
            <Route path="/machines" element={<Machines />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/career" element={<Career />} />
            <Route path="/internship" element={<Career />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
