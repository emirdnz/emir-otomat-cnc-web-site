import { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";

import { motion, useScroll } from "framer-motion";

function WorkCard(props) {
  const { scrollYProgress } = useScroll();

  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpen = (e) => {
    if (e.target) {
      setSelectedImg(e.target.currentSrc);
    }

    setOpen((cur) => !cur);
  };

  return (
    <>
      <motion.section
        initial={{ x: -100 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.7, ease: "easeInOut" },
          x: 0,
        }}
        viewport={{ once: true }}
        className="h-full md:max-w-screen-xl flex-col flex items-center justify-center w-full"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {props.data.map(({ image }, index) => (
            <div className="hover:bg-blue-gray-100 border-2 rounded-lg transition-all duration-1000" onClick={(e) => handleOpen(e)} key={index}>
              <img
                className="h-80 w-full max-w-full rounded-lg object-cover object-center"
                src={image}
                alt="gallery-photo"
              />
            </div>
          ))}
        </div>
      </motion.section>

      <Dialog
        className="flex items-center justify-center transition-all duration-500"
        size="md"
        open={open}
        handler={handleOpen}
      >
        <DialogBody className="">
          <img
            alt="nature"
            className="rounded-lg object-contain"
            src={selectedImg}
          />
        </DialogBody>
      </Dialog>
    </>
  );
}

export default WorkCard;
