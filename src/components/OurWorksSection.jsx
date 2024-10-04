import { useEffect, useState } from "react";
import { Typography, Dialog, DialogBody } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

import pirinc from "../assets/products/pirinc.png";
import otomat from "../assets/products/otomat.png";
import tibbi from "../assets/products/tibbi.png";
import aluminyum from "../assets/products/aluminyum.png";
import paslanmaz from "../assets/products/paslanmaz.png";
import yuksekKarbon from "../assets/products/yuksek-karbonlu-celik.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

function OurWorksSection() {
  const [autoplay, setAutoplay] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [slides, setSlides] = useState(window.innerWidth >= 1000 ? 2.5 : 1.5);
  const { t } = useTranslation();

  const [works] = useState([
    {
      img: pirinc,
      title: t("ourWorksSection.work1.title"),
      desc: t("ourWorksSection.work1.desc"),
    },
    {
      img: otomat,
      title: t("ourWorksSection.work2.title"),
      desc: t("ourWorksSection.work2.desc"),
    },
    {
      img: tibbi,
      title: t("ourWorksSection.work3.title"),
      desc: t("ourWorksSection.work3.desc"),
    },
    {
      img: aluminyum,
      title: t("ourWorksSection.work4.title"),
      desc: t("ourWorksSection.work4.desc"),
    },
    {
      img: paslanmaz,
      title: t("ourWorksSection.work5.title"),
      desc: t("ourWorksSection.work5.desc"),
    },
    {
      img: yuksekKarbon,
      title: t("ourWorksSection.work6.title"),
      desc: t("ourWorksSection.work6.desc"),
    },
  ]);

  useEffect(() => {
    const handleResize = () => {
      setSlides(window.innerWidth >= 1000 ? 2.5 : 1.5);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setAutoplay(!open);
  }, [open]);

  const handleOpen = (e) => {
    if (e.target) {
      setSelectedImg(e.target.currentSrc);
    }
    setOpen((cur) => !cur);
  };

  return (
    <section className="h-full md:h-[38rem] w-full flex flex-col">
      <div
        className="flex justify-center items-center h-1/4 pt-4 md:py-6 md:mt-6 bg-blue-gray-50 w-full !leading-8"
      >
        <Typography
          variant="h1"
          color="gray"
          className="text-2xl md:text-3xl lg:text-4xl font-montserrat text-end font-light"
        >
          <span className="font-semibold text-primary-blue">
            {t("ourWorksSection.title")}
          </span>
        </Typography>
      </div>
      <section className="h-3/4 flex flex-col md:flex-row items-center justify-center bg-blue-gray-50">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-end md:pr-5">
          <Typography
            variant="h6"
            className="hidden text-xl md:flex justify-end max-w-lg h-full w-full font-montserrat "
          >
            {t("ourWorksSection.description")}
          </Typography>
        </div>
        <div className="w-full md:w-1/2 h-5/6 md:h-full flex justify-center items-center">
          <Swiper
            autoplay={{
              delay: open ? 1000000 : 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={slides}
            className="w-full h-full p-2 pl-0 cursor-grab"
          >
            {works.map((work, i) => (
              <SwiperSlide
                className="bg-white h-full rounded-md"
                key={i}
              >
                <img
                  className="h-full w-full object-cover"
                  src={work.img}
                  onClick={(e) => handleOpen(e)}
                  alt={work.desc}
                />
                <div className="relative bottom-10 md:bottom-14 leading-3 md:leading-4 font-bold md:font-extrabold mx-3 overflow-hidden line-clamp-1 text-black text-center">
                  {work.title}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Dialog
        className="flex items-center justify-center duration-700"
        open={open}
        handler={handleOpen}
      >
        <DialogBody className="max-w-xl max-h-xl">
          <img
            alt="Selected"
            className="rounded-lg object-cover object-center"
            src={selectedImg}
          />
        </DialogBody>
      </Dialog>
    </section>
  );
}

export default OurWorksSection;
