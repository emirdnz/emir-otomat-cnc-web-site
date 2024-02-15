import { useState } from "react";
import HomeCarousel from "./components/HomeCarousel";
import AboutSection from "./components/AboutSection";
import OurWorksSection from "./components/OurWorksSection";
import ExperienceSection from "./components/ExperienceSection";

function Homepage() {
  return (
    <>
      <div className="">
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
