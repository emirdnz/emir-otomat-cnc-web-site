import { useEffect, useState } from "react";

import { motion, useScroll } from "framer-motion";

import photo1 from "../../assets/products-main/1.png";
import photo2 from "../../assets/products-main/2.png";
import photo3 from "../../assets/products-main/3.png";
import photo4 from "../../assets/products-main/4.png";
import photo5 from "../../assets/products-main/5.png";
import photo6 from "../../assets/products-main/6.png";
import photo7 from "../../assets/products-main/7.png";
import photo8 from "../../assets/products-main/8.png";
import photo9 from "../../assets/products-main/9.png";
import photo10 from "../../assets/products-main/10.png";
import photo11 from "../../assets/products-main/11.png";
import photo12 from "../../assets/products-main/12.png";
import photo13 from "../../assets/products-main/13.png";
import photo14 from "../../assets/products-main/14.png";
import photo15 from "../../assets/products-main/15.png";
import photo16 from "../../assets/products-main/16.png";
import photo17 from "../../assets/products-main/17.png";
import photo18 from "../../assets/products-main/18.png";
import photo19 from "../../assets/products-main/19.png";
import photo20 from "../../assets/products-main/20.png";
import photo21 from "../../assets/products-main/21.png";
import photo22 from "../../assets/products-main/22.png";
import photo23 from "../../assets/products-main/23.png";
import photo24 from "../../assets/products-main/24.png";
import photo25 from "../../assets/products-main/25.png";
import photo26 from "../../assets/products-main/26.png";
import photo27 from "../../assets/products-main/27.png";
import photo28 from "../../assets/products-main/28.png";
import photo29 from "../../assets/products-main/29.png";
import photo30 from "../../assets/products-main/30.png";
import photo31 from "../../assets/products-main/31.png";
import photo32 from "../../assets/products-main/32.png";
import photo33 from "../../assets/products-main/33.png";
import photo34 from "../../assets/products-main/34.png";
import photo35 from "../../assets/products-main/35.png";
import photo36 from "../../assets/products-main/36.png";
import photo37 from "../../assets/products-main/37.png";
import photo38 from "../../assets/products-main/38.png";
import photo39 from "../../assets/products-main/39.png";
import photo40 from "../../assets/products-main/40.png";
import photo41 from "../../assets/products-main/41.png";
import photo42 from "../../assets/products-main/42.png";
import photo43 from "../../assets/products-main/43.png";
import photo44 from "../../assets/products-main/44.png";
import photo45 from "../../assets/products-main/45.png";
import photo46 from "../../assets/products-main/46.png";
import photo47 from "../../assets/products-main/47.png";
import photo48 from "../../assets/products-main/48.png";
import photo49 from "../../assets/products-main/49.png";
import photo50 from "../../assets/products-main/50.png";
import photo51 from "../../assets/products-main/51.png";
import photo52 from "../../assets/products-main/52.png";
import photo53 from "../../assets/products-main/53.png";
import photo54 from "../../assets/products-main/54.png";
import photo55 from "../../assets/products-main/55.png";
import photo56 from "../../assets/products-main/56.png";
import photo57 from "../../assets/products-main/57.png";

import cover from "../../assets/2005.jpg";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import WorkCard from "./components/WorkCard";
const data = [
  { image: photo1 },
  { image: photo2 },
  { image: photo3 },
  { image: photo4 },
  { image: photo5 },
  { image: photo6 },
  { image: photo7 },
  { image: photo8 },
  { image: photo9 },
  { image: photo10 },
  { image: photo11 },
  { image: photo12 },
  { image: photo13 },
  { image: photo14 },
  { image: photo15 },
  { image: photo16 },
  { image: photo17 },
  { image: photo18 },
  { image: photo19 },
  { image: photo20 },
  { image: photo21 },
  { image: photo22 },
  { image: photo23 },
  { image: photo24 },
  { image: photo25 },
  { image: photo26 },
  { image: photo27 },
  { image: photo28 },
  { image: photo29 },
  { image: photo30 },
  { image: photo31 },
  { image: photo32 },
  { image: photo33 },
  { image: photo34 },
  { image: photo35 },
  { image: photo36 },
  { image: photo37 },
  { image: photo38 },
  { image: photo39 },
  { image: photo40 },
  { image: photo41 },
  { image: photo42 },
  { image: photo43 },
  { image: photo44 },
  { image: photo45 },
  { image: photo46 },
  { image: photo47 },
  { image: photo48 },
  { image: photo49 },
  { image: photo50 },
  { image: photo51 },
  { image: photo52 },
  { image: photo53 },
  { image: photo54 },
  { image: photo55 },
  { image: photo56 },
  { image: photo57 },
];

function OurWorks() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    if (e.target) {
      setSelectedImg(e.target.currentSrc);
    }

    setOpen((cur) => !cur);
  };

  return (
    <section className="mt-10">
      <div className="w-full">
        <h1 className="text-2xl font-semibold mb-8 text-primary-blue w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="w-full text-center"
          >
            // <span className="text-black">Çalışmalarımız</span>
          </motion.div>
        </h1>
        <div className="h-96 w-full">
          <img className="object-cover h-full w-full" src={cover} alt="" />
        </div>
      </div>
      <section className="w-full mx-auto flex justify-center my-10">
        <WorkCard data={data} />
      </section>
    </section>
  );
}

export default OurWorks;
