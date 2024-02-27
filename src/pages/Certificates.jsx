import React from "react";

import cover from "../assets/2009.jpg";

import { motion } from "framer-motion";

function Certificates() {
  return (
    <section className="flex items-center justify-center flex-col my-10">
      <div className="w-full">
        <h1 className="text-2xl font-semibold mb-8 text-primary-blue w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="w-full text-center"
          >
            // <span className="text-black">Sertifikalarımız</span>
          </motion.div>
        </h1>
        <div className="h-96 w-full">
          <img className=" object-cover h-full w-full" src={cover} alt="" />
        </div>
      </div>
      <div className="max-w-screen-xl">
        <div className="w-full grid grid-rows-2 grid-cols-2">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
