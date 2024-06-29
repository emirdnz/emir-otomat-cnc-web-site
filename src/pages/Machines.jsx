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

import TitleComponent from "../components/TitleComponent";

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
      {/* title */}
      <TitleComponent title="Makine Parkurumuz" cover={cover} />
      {/* title */}
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
