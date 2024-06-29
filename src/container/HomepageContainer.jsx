import HomeCarousel from "../components/HomeCarousel";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import OurWorksSection from "../components/OurWorksSection";

function HomepageContainer() {
  return (
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
  );
}

export default HomepageContainer;
