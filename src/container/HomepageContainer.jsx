import HomeCarousel from "../components/HomeCarousel";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import OurWorksSection from "../components/OurWorksSection";
import IndustriesSection from "../components/IndustriesSection";
//import ProductionProcessSection from "../components/ProductionProcessSection";
import Header from "../components/Header";

function HomepageContainer() {
  return (
    <div>
      
      
      {/* Carousel Section */}
      <HomeCarousel />
      {/* Industries Section */}
      <IndustriesSection />
      {/* About Section */}
      <AboutSection />
      {/* Experience Section */}
      <ExperienceSection />
      {/* OurWorks Section */}
      <OurWorksSection />
    </div>
  );
}

export default HomepageContainer;
