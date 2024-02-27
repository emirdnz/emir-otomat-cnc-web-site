import { useState } from "react";

import cover from "../assets/2007.jpg";
import { Dialog, DialogBody } from "@material-tailwind/react";

import photo1 from "../assets/machines/1.jpg";
import photo2 from "../assets/machines/2.jpg";
import photo3 from "../assets/machines/3.jpg";
import photo4 from "../assets/machines/4.jpg";
import photo5 from "../assets/machines/5.jpg";
import photo6 from "../assets/machines/6.jpg";
import photo7 from "../assets/machines/7.jpg";

import { motion } from "framer-motion";

function Machines() {
  const data = [
    {
      imgelink: photo1,
    },
    {
      imgelink: photo2,
    },
    {
      imgelink: photo3,
    },
    {
      imgelink: photo4,
    },
    {
      imgelink: photo5,
    },

    {
      imgelink: photo6,
    },
    {
      imgelink: photo7,
    },
  ];

  const [active, setActive] = useState(photo1);
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpen = (e) => {
    if (e.target) {
      setSelectedImg(e.target.currentSrc);
    }

    setOpen((cur) => !cur);
  };

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
            // <span className="text-black">Makine Parkurumuz</span>
          </motion.div>
        </h1>
        <div className="h-96 w-full">
          <img className=" object-cover h-full w-full" src={cover} alt="" />
        </div>
      </div>
      <div className="grid gap-4 max-w-4xl mt-10">
        <div onClick={(e) => handleOpen(e)}>
          <img
            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
            src={active}
            alt=""
          />
        </div>
        <div className="grid grid-cols-8 gap-2">
          {data.map(({ imgelink }, index) => (
            <div className="flex justify-center" key={index}>
              <img
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                alt="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
      <Dialog size="xl" open={open} handler={handleOpen}>
        <DialogBody>
          <img
            alt="nature"
            className="h-[48rem] w-full rounded-lg object-cover object-center"
            src={selectedImg}
          />
        </DialogBody>
      </Dialog>
    </section>
  );
}

export default Machines;
