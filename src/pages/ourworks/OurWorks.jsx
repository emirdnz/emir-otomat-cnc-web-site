import { useEffect, useState } from "react";

import { motion, useScroll } from "framer-motion";

import photo11 from "../../assets/products-main/1-1.jpeg";
import photo12 from "../../assets/products-main/1-2.jpeg";

import photo21 from "../../assets/products-main/2-1.jpeg";
import photo22 from "../../assets/products-main/2-2.jpg";
import photo23 from "../../assets/products-main/2-3.jpeg";

import photo31 from "../../assets/products-main/3-1.jpg";
import photo32 from "../../assets/products-main/3-2.jpg";

import photo41 from "../../assets/products-main/4-1.jpg";
import photo42 from "../../assets/products-main/4-2.jpg";
import photo43 from "../../assets/products-main/4-3.jpg";

import photo51 from "../../assets/products-main/5-1.jpg";
import photo52 from "../../assets/products-main/5-2.jpeg";

import photo61 from "../../assets/products-main/6-1.jpg";
import photo62 from "../../assets/products-main/6-2.jpeg";
import photo63 from "../../assets/products-main/6-3.jpg";



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
  {
    name: "Sarı Pirinç",
    description: "Sarı pirinç malzeme",
    images: [
      photo11,
      photo12,
    ],
  },
  {
    name: "Otomat Malzemeleri",
    description: "Otomat malzeme",
    images: [
      photo21,
      photo22,
      photo23,
    ],
  },
  {
    name: "Tıbbi Yedek Parça",
    description: "Plastik malzeme",
    images: [
      photo31,
      photo32,
    ],
  },
  {
    name: "Alüminyum Malzemeler",
    description: "Alüminyum malzeme",
    images: [
      photo41,
      photo42,
      photo43,
    ],
  },
  {
    name: "Paslanmaz Malzemeler",
    description: "Paslanmaz malzeme",
    images: [
      photo51,
      photo52,
    ],
  },
  {
    name: "Yüksek Karbonlu Çelik",
    description: "Yüksek karbonlu çelik malzeme",
    images: [
      photo61,
      photo62,
      photo63,
    ],
  },
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
          <img className="object-cover h-full w-full" src={cover}  alt="" />
        </div>
      </div>
      <section className="grid grid-cols-1 justify-items-center">
        {data.map((work, i) => (
          <WorkCard key={i} index={i} data={work} />
        ))}
      </section>
    </section>
  );
}

export default OurWorks;
