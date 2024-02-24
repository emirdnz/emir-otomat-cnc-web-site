import { useEffect, useState } from "react";
import AboutSection from "../homepage/components/AboutSection";

import cover from "../../assets/2004.jpg";

import { motion } from "framer-motion";

import Goals from "./components/Goals";
import VisionMission from "./components/VisionMission";

function About() {
  return (
    <section className="flex items-center justify-center flex-col mt-10">
      <div className="w-full">
        <h1 className="text-2xl font-semibold mb-8 text-primary-blue w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="w-full text-center"
          >
            // <span className="text-black">Hakkımızda</span>
          </motion.div>
        </h1>
        <div className="h-96 w-full">
          <img
            className="object-cover h-full w-full"
            loading="lazy"
            src={cover}
            alt=""
          />
        </div>
      </div>
      {/* components */}
      <AboutSection />
      <Goals />
      <VisionMission />
      {/* components */}
    </section>
  );
}

export default About;
