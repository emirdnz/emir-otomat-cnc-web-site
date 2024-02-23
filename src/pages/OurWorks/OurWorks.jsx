import { useEffect, useState } from "react";

import { motion, useScroll } from "framer-motion";

import pirinc from "../../assets/products/pirinc.png";
import otomat from "../../assets/products/otomat.png";
import tibbi from "../../assets/products/tibbi.png";
import aluminyum from "../../assets/products/aluminyum.png";
import paslanmaz from "../../assets/products/paslanmaz.png";
import yuksekKarbon from "../../assets/products/yuksek-karbonlu-celik.png";

import cover from "../../assets/2003.jpg";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
const data = [
  {
    name: "Sarı Pirinç",
    description: "Sarı pirinç malzeme",
    imageLink: pirinc,
  },
  {
    name: "Otomat Malzemeleri",
    description: "Otomat malzeme",
    imageLink: otomat,
  },
  {
    name: "Tıbbi Yedek Parça",
    description: "Plastik malzeme",
    imageLink: tibbi,
  },
  {
    name: "Alüminyum Malzemeler",
    description: "Alüminyum malzeme",
    imageLink: aluminyum,
  },
  {
    name: "Paslanmaz Malzemeler",
    description: "Paslanmaz malzeme",
    imageLink: paslanmaz,
  },
  {
    name: "Yüksek Karbonlu Çelik",
    description: "Yüksek karbonlu çelik malzeme",
    imageLink: yuksekKarbon,
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
    <>
      <section className="flex items-center justify-center flex-col mt-10">
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
            <img
              className="object-cover h-full w-full"
              src={cover}
              alt=""
            />
          </div>
        </div>
        <section className="my-16 h-full flex flex-col items-center justify-center">
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
                Ürünler
              </span>
            </Typography>
          </motion.div>
          <div className="h-full w-full md:max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {data.map((item, index) => (
              <Card className="m-2" key={index}>
                <CardBody>
                  <div className="h-60 w-full">
                    <img
                      className="object-cover h-full w-full hover:scale-125 duration-700 cursor-pointer rounded-lg"
                      src={item.imageLink}
                      alt=""
                      onClick={(e) => handleOpen(e)}
                    />
                  </div>
                  <Typography className="text-center" color="gray">
                    {item.description}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      </section>
      <Dialog
        className="flex items-center justify-center duration-700"
        open={open}
        handler={handleOpen}
      >
        <DialogBody className="max-w-xl max-h-xl">
          <img
            alt="nature"
            className="  rounded-lg object-cover object-center"
            src={selectedImg}
          />
        </DialogBody>
      </Dialog>
    </>
  );
}

export default OurWorks;
