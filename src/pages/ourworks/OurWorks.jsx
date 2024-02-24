import { useEffect, useState } from "react";

import { motion, useScroll } from "framer-motion";

import pirinc from "../../assets/products/pirinc.png";
import otomat from "../../assets/products/otomat.png";
import tibbi from "../../assets/products/tibbi.png";
import aluminyum from "../../assets/products/aluminyum.png";
import paslanmaz from "../../assets/products/paslanmaz.png";
import yuksekKarbon from "../../assets/products/yuksek-karbonlu-celik.png";

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
      "https://emircncotomat.com/wp-content/uploads/2017/06/WhatsApp-Image-2022-03-20-at-16.04.20-1-1200x1600.jpeg",
      "https://emircncotomat.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-03-20-at-16.04.18-2-1200x1600.jpeg",
      "https://emircncotomat.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-03-20-at-16.04.18-2-1200x1600.jpeg",
    ],
  },
  {
    name: "Otomat Malzemeleri",
    description: "Otomat malzeme",
    images: [
      "https://emircncotomat.com/wp-content/uploads/2020/03/WhatsApp-Image-2022-03-20-at-16.04.17-2-1200x1600.jpeg",
      "https://emircncotomat.com/wp-content/uploads/2022/06/IMG20220510075013-1200x1600.jpg",
      "https://emircncotomat.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-03-20-at-16.04.17-4-1200x1600.jpeg",
    ],
  },
  {
    name: "Tıbbi Yedek Parça",
    description: "Plastik malzeme",
    images: [
      "https://emircncotomat.com/wp-content/uploads/2017/08/IMG20220521111705-1200x1726.jpg",
      "https://emircncotomat.com/wp-content/uploads/2017/08/IMG20220521111709-1200x1526.jpg",
      "https://emircncotomat.com/wp-content/uploads/2017/08/IMG20220521111709-1200x1526.jpg",
    ],
  },
  {
    name: "Alüminyum Malzemeler",
    description: "Alüminyum malzeme",
    images: [
      "https://emircncotomat.com/wp-content/uploads/2022/06/WhatsApp-Image-2021-12-08-at-11.34.30-1200x1600-1.jpg",
      "https://emircncotomat.com/wp-content/uploads/2022/06/WhatsApp-Image-2021-12-08-at-11.34.30-1-1200x1600-1.jpg",
      "https://emircncotomat.com/wp-content/uploads/2017/09/IMG20220510074910-1200x1600.jpg",
    ],
  },
  {
    name: "Paslanmaz Malzemeler",
    description: "Paslanmaz malzeme",
    images: [
      "https://emircncotomat.com/wp-content/uploads/2020/03/IMG20220510074805-1200x1666.jpg",
      "https://emircncotomat.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-03-20-at-16.04.14-2-1200x1600.jpeg",
      "https://emircncotomat.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-03-20-at-16.04.14-2-1200x1600.jpeg",
    ],
  },
  {
    name: "Yüksek Karbonlu Çelik",
    description: "Yüksek karbonlu çelik malzeme",
    images: [
      "https://emircncotomat.com/wp-content/uploads/2017/07/IMG20220521112006-1200x924.jpg",
      "https://emircncotomat.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-03-20-at-16.04.14-5-1200x1600.jpeg",
      "https://emircncotomat.com/wp-content/uploads/2022/06/IMG20220521112326-1200x678.jpg",
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
