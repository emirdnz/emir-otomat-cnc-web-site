import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

function Goals() {
  return (
    <>
      <section className="h-full md:h-[30rem] flex flex-col items-center justify-center">
        <div className="h-full w-full md:max-w-screen-xl md:flex flex-col justify-center item-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, ease: "easeInOut" },
              y: 0,
            }}
            viewport={{ once: true }}
            className="flex justify-center items-center h-3/4"
          >
            <Typography
              variant="h1"
              color="gray"
              className="mb-4 text-2xl md:text-3xl lg:text-4xl font-montserrat text-end font-light"
            >
              <span className="font-semibold text-primary-blue">
                Hedeflerimiz
              </span>
            </Typography>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row md:item-center md:h-full md:border-y-2">
            <div className="md:flex group md:flex-col p-12  sm:m-0 border-2 md:border-r-2 md:border-l-0 md:border-y-0 md:w-full">
              <div className="mt-2">
                <h3>
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1.2, ease: "easeInOut" },
                      y: 0,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="leading-10 group-hover:text-primary-blue group-hover:text-lg group-hover:font-extrabold transition-all ease-in-out duration-500">
                      Uygun Fiyat
                    </div>
                    <div className="group-hover:font-semibold transition-all ease-in-out duration-500 ">
                      Piyasalara uygun fiyat politikamız, müşterilerimize
                      rekabet avantajı sağlar.
                    </div>
                  </motion.div>
                </h3>
              </div>
            </div>
            <div className="md:flex group md:flex-col p-12  sm:m-0 border-2 md:border-r-2 md:border-l-0 md:border-y-0  md:w-full">
              <div className="mt-1 ">
                <h3>
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1.5, ease: "easeInOut" },
                      y: 0,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="leading-10 group-hover:text-primary-blue group-hover:text-lg group-hover:font-extrabold transition-all ease-in-out duration-500">
                      Kalite
                    </div>
                    <div className=" group-hover:font-semibold transition-all ease-in-out duration-500 ">
                      Malzeme kalitemiz, global standartlara uygun olarak
                      sertifikalandırılmıştır.
                    </div>
                  </motion.div>
                </h3>
              </div>
            </div>
            <div className="md:flex group md:flex-col p-12  sm:m-0 border-2 md:border-x-0 md:border-y-0 md:w-full">
              <div className="mt-2">
                <h3>
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1.8, ease: "easeInOut" },
                      y: 0,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="leading-10 group-hover:text-primary-blue group-hover:text-lg group-hover:font-extrabold transition-all ease-in-out duration-500">
                      Memnuniyet
                    </div>
                    <div className=" group-hover:font-semibold transition-all ease-in-out duration-500 ">
                      Müşteri memnuniyeti, en önemli çalışma prensiplerimizden
                      biridir.
                    </div>
                  </motion.div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Goals;
