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
        className="h-full md:h-[480px] md:max-w-screen-xl flex-col flex items-center justify-center w-full"
      >
        <Card
          className={`h-full overflow-hidden flex flex-col-reverse md:flex-row-reverse justify-center w-full shadow-transparent rounded-none ${
            props.index % 2 == 0 ? "" : "border-y-2"
          }`}
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none flex justify-center items-center md:justify-end w-full h-full text-4xl text-primary-blue"
          >
            <div
              className={`grid grid-cols-2 grid-rows-4 grid-flow-col gap-2 h-80 sm:h-96 py-2`}
            >
              {props.data.images.map((image, i) => (
                <img
                  key={i}
                  className={`object-cover h-full w-[470px] hover:opacity-75 cursor-pointer transition-all duration-700 ${
                    i === 0 ? "row-span-4" : "row-span-2"
                  }`}
                  src={image}
                  alt={props.data.desc}
                  onClick={(e) => handleOpen(e)}
                />
              ))}
            </div>
          </CardHeader>
          <CardBody className="w-full flex flex-col justify-center md:justify-start my-auto">
            <Typography
              variant="lead"
              color="gray"
              className="mb-3 overflow-scroll no-scrollbar max-w-lg font-montserrat text-base font-bold md:text-lg lg:text-lg"
            >
              {props.data.name}
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mb-3 font-normal overflow-scroll no-scrollbar max-w-lg font-montserrat text-base"
            >
              {props.data.description}
            </Typography>
          </CardBody>
        </Card>
      </motion.section>
      
       <Dialog size="xl" open={open} handler={handleOpen}>
        
        <DialogBody>
          <img
            alt="nature"
            className="h-[48rem] w-full rounded-lg object-cover object-center"
            src={selectedImg}
          />
        </DialogBody>
        
      </Dialog>
    </>
  );
}

export default WorkCard;
