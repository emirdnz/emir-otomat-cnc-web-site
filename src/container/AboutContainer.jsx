import PropTypes from "prop-types";
import Goals from "../components/Goals";
import VisionMission from "../components/VisionMission";
import History from "../components/History";

import AboutSection from "../components/AboutSection";
import TitleComponent from "../components/TitleComponent";

function AboutContainer({ cover }) {
  return (
    <>
      <TitleComponent title="Hakkımızda" cover={cover} />
      <AboutSection />
      <History />
      <VisionMission />
      <Goals />
    </>
  );
}

AboutContainer.propTypes = {
  cover: PropTypes.string.isRequired,
};

export default AboutContainer;
