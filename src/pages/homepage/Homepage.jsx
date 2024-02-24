import HomeCarousel from "./components/HomeCarousel";
import AboutSection from "./components/AboutSection";
import OurWorksSection from "./components/OurWorksSection";
import ExperienceSection from "./components/ExperienceSection";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

function Homepage() {
  return (
    <>
      <div>
        {/* Carousel Section */}
        <HomeCarousel />
        {/* About Section */}
        <AboutSection />
        {/* Experience Section */}
        <ExperienceSection />
        {/* OurWorks Section */}
        
        <OurWorksSection />
      </div>
    </>
  );
}

export default Homepage;
