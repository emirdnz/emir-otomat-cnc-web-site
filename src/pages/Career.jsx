import React from "react";
import cover from "../assets/2006.jpg";

import { motion } from "framer-motion";

function Career() {
  return (
    <div className="mt-10">
      <div className="w-full">
        <h1 className="text-2xl font-semibold mb-8 text-primary-blue w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="w-full text-center"
          >
            // <span className="text-black">Kariyer</span>
          </motion.div>
        </h1>
        <div className="h-96 w-full">
          <img className=" object-cover h-full w-full" src={cover} alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-8 text-primary-blue w-full mt-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="w-full text-center"
          >
            <span className="text-black">İş Başvuru Formu</span>
          </motion.div>
        </h1>
      </div>
      <div>
        <iframe
          id="JotFormIFrame-240543893849975"
          title="İş Başvuru Formu, CV, İnsan Kaynakları Formu"
          onload="window.parent.scrollTo(0,0)"
          allowTransparency="true"
          allowFullScreen="true"
          allow="geolocation; microphone; camera"
          src="https://form.jotform.com/240543348653963"
          frameBorder={0}
          style={{
            width: "1px",
            minWidth: "100%",
            height: "100%",
            border: "none",
          }}
          className=" w-full min-h-[1500px] md:min-h-[1200px]"
        ></iframe>
      </div>
    </div>
  );
}

export default Career;
