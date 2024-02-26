import {useState} from "react";

import cover from "../assets/2007.jpg";
import {Dialog, DialogBody } from "@material-tailwind/react";

import { motion } from "framer-motion";

function Machines() {
  const data = [
    {
      imgelink:
        "https://lh3.googleusercontent.com/p/AF1QipPKSrZspcfjeiKINOIlJdNErQ0bf6jeygg4MLtv=s680-w680-h510",
    },
    {
      imgelink:
        "https://lh3.googleusercontent.com/p/AF1QipOcCWgHtcygzCUaOOFi9MAnUkrV6qbGKocqk59u=s680-w680-h510",
    },
    {
      imgelink:
        "https://lh3.googleusercontent.com/p/AF1QipNbG4HSluPb2mN1ok6sjaTAy1Wq-7HDIxDHGPhI=s680-w680-h510",
    },
    {
      imgelink:
        "https://lh3.googleusercontent.com/p/AF1QipP0ej9nlwiE1tbIz8xzTf_yrPrUuTBJ4f8GOHvy=s680-w680-h510",
    },
    {
      imgelink:
        "https://lh3.googleusercontent.com/p/AF1QipNEp519dnfLyVJDtfc4fUZXOawYw4-XYp_9JRvO=s680-w680-h510",
    },

    {
      imgelink:
        "https://lh3.googleusercontent.com/p/AF1QipPmNl6dGpvc_ZVfnIcctFacy_VcDx3dD4ts1AXs=s680-w680-h510",
    },
    {
      imgelink:
        "https://lh3.googleusercontent.com/p/AF1QipOFVVupCKIhItjhZGP6AKGxOp4dA-yPo0kGFb94=s680-w680-h510",
    },
    {
      imgelink:
        "https://lh3.googleusercontent.com/p/AF1QipO9prIYniL-0hEUMOikBA9Suaf0L4e2VQAKrcu7=s680-w680-h510",
    },
  ];

  const [active, setActive] = useState(
    "https://lh3.googleusercontent.com/p/AF1QipO9prIYniL-0hEUMOikBA9Suaf0L4e2VQAKrcu7=s680-w680-h510"
  );
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
