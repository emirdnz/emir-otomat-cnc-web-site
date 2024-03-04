import React from "react";
import cover from "../assets/2006.jpg";

import { motion } from "framer-motion";

import image from "../assets/career.jpg";

import "./Career.css";

function Career() {
  const location = window.location.pathname;

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
            //{" "}
            <span className="text-black">
              {location == "/kariyer" ? "Kariyer" : "Staj"}
            </span>
          </motion.div>
        </h1>
        <div className="h-96 w-full">
          <img className=" object-cover h-full w-full" src={cover} alt="" />
        </div>
      </div>
      <div className="flex justify-center ">
        <div className=" max-w-screen-lg flex justify-center items-center">
          <div className="max-w-[480px] hidden md:block">
            <img src={image} alt="" />
          </div>
          <div className="m-10 md:my-10">
            Sektördeki konumumuzu koruyarak, güncel teknolojilere odaklanarak ve
            müşteri memnuniyetini ön planda tutarak markamızı daha da ileri
            taşımak için birlikte çalışalım.
            <h3 className="text-sm font-bold my-4 w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                className="w-full"
              >
                <span className="text-black">
                  Çalışma arkadaşlarımızda aradığımız özellikler
                </span>
              </motion.div>
            </h3>
            Yeniliklere açık, araştırmacı bir ruha sahip, düzenli çalışmayı
            benimseyen ve takım odaklı çalışma anlayışında olan çalışma
            arkadaşları arıyoruz.
            <br />
            <br />
            Eğer siz de bu niteliklere sahipseniz ve ekibimize katılmak
            istiyorsanız, aşağıdaki formu doldurarak iş veya staj başvurusunda
            bulunubilirsiniz.
          </div>
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
            <span className="text-black">
              {location == "/kariyer"
                ? "İş Başvuru Formu"
                : "Staj Başvuru Formu"}
            </span>
          </motion.div>
        </h1>
      </div>
      <div className="jotform-form">
        <iframe
          id="JotFormIFrame-240543893849975"
          title="İş Başvuru Formu, CV, İnsan Kaynakları Formu"
          onload="window.parent.scrollTo(0,0)"
          allowTransparency="true"
          allowFullScreen="true"
          src="https://form.jotform.com/240595114447053"
          style={{
            width: "1px",
            minWidth: "100%",
            height: "100%",
            border: "none",
          }}
          className="overflow-hidden w-full min-h-[1500px] md:min-h-[1300px]"
        ></iframe>
      </div>
    </div>
  );
}

export default Career;
