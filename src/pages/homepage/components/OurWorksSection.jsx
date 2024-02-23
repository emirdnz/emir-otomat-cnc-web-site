import { useEffect, useState } from "react";
import {
  Carousel,
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
} from "@material-tailwind/react";

import pirinc from "../../../assets/products/pirinc.png";
import otomat from "../../../assets/products/otomat.png";
import tibbi from "../../../assets/products/tibbi.png";
import aluminyum from "../../../assets/products/aluminyum.png";
import paslanmaz from "../../../assets/products/paslanmaz.png";
import yuksekKarbon from "../../../assets/products/yuksek-karbonlu-celik.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

function OurWorksSection() {
  const [autoplay, setAutoplay] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [slides, setSlides] = useState(window.innerWidth >= 1000 ? 2.5 : 1.5);
  const [works, setWorks] = useState([
    {
      img: pirinc,
      title: "Sarı (PİRİNÇ) Malzemeler",
      desc: "Açıklama",
    },
    {
      img: otomat,
      title: "Otomat Malzemeleri",
      desc: "Açıklama",
    },
    {
      img: tibbi,
      title: "Plastik Malzemeler",
      desc: "Açıklama",
    },
    {
      img: aluminyum,
      title: "Alüminyum Malzemeler",
      desc: "Açıklama",
    },
    {
      img: paslanmaz,
      title: "Paslanmaz Malzemeler",
      desc: "Açıklama",
    },
    {
      img: yuksekKarbon,
      title: "Yüksek Karbonlu Çelik",
      desc: "Açıklama",
    },
  ]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1000 && setSlides(2.5)
    );
    window.addEventListener(
      "resize",
      () => window.innerWidth < 1000 && setSlides(1.5)
    );
  }, []);

  useEffect(() => {
    if (open) {
      setAutoplay(false);
    } else {
      setAutoplay(true);
    }
  }, [open]);

  const handleOpen = (e) => {
    if (e.target) {
      setSelectedImg(e.target.currentSrc);
    }

    setOpen((cur) => !cur);
  };

  return (
    <>
      <section className="h-full md:h-[30rem] w-full flex flex-col md:flex-row items-center justify-center bg-blue-gray-50 ">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-end md:pr-5">
          <Typography
            variant="h4"
            className="flex justify-center md:justify-end max-w-lg h-full w-full font-montserrat font-bold pb-2 md:pb-10"
          >
            Çalışmalarımız
          </Typography>
          <Typography
            variant="h6"
            className="hidden md:flex justify-end max-w-lg h-full w-full font-montserrat "
          >
            Mobilya Sektörü, Ev Aletleri, Tıbbi Malzemeler, Aydınlatma
            Parçaları, Otomotiv Parçaları, Klima Parçaları, Doğalgaz Parçaları
            ve Savunma Sanayisi gibi çeşitli sektörlere özel çözümler
            üretiyoruz.
          </Typography>
        </div>
        <div className="w-full md:w-1/2 h-5/6 md:h-full flex justify-center items-center">
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={slides}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full h-full p-2 pl-0 cursor-grab"
          >
            {works.map((work, i) => (
              <SwiperSlide
                autoplay={true}
                className="bg-white h-full rounded-md"
                key={i}
              >
                <img
                  className="h-full w-full object-cover"
                  src={work.img}
                  onClick={(e) => handleOpen(e)}
                  alt={work.desc}
                />
                <div className="relative bottom-10 md:bottom-14 leading-3 md:leading-4 font-bold md:font-extrabold mx-3 overflow-hidden line-clamp-1  text-black text-center">
                  {work.title}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <Carousel
          className="w-full h-full"
          loop={true}
          autoplay={autoplay}
          autoplayDelay={5000}
          transition={{ duration: 1 }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev }) => (
            <div
              onClick={handlePrev}
              className="!absolute top-2/4 left-0 rounded-l-xl -translate-y-2/4 h-full w-1/3 md:w-1/5 hover:bg-black hover:opacity-5"
            ></div>
          )}
          nextArrow={({ handleNext }) => (
            <div
              onClick={handleNext}
              className="!absolute top-2/4 !right-0 rounded-r-xl -translate-y-2/4 h-full w-1/3 md:w-1/5 hover:bg-black hover:opacity-5"
            ></div>
          )}
        >
          <Typography
            variant="h4"
            className="flex items-center justify-center  h-full w-full font-montserrat font-bold"
          >
            Çalışmalarımız
          </Typography>

          {works.map((work, i) => (
            <div className="h-full mx-auto bg-blue-gray-50 max-w-screen-xl">
              <Card className="h-full w-full bg-blue-gray-50 flex flex-row-reverse justify-center shadow-none">
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-l-none w-full h-full"
                  onClick={(e) => handleOpen(e)}
                >
                  <img
                    className="object-cover h-full w-full"
                    src={work.img}
                    alt={work.title}
                  />
                </CardHeader>
                <CardBody className="p-3 hidden sm:flex flex-col items-center text-center justify-center w-1/2 ">
                  <Typography
                    className="my-2 font-montserrat font-extrabold block text-primary-blue"
                    variant="h4"
                    color="blue-gray"
                  >
                    {work.title}
                  </Typography>
                  <Typography
                    className="font-montserrat font-extrabold block"
                    variant="h6"
                    color="blue-gray"
                  >
                    {work.desc}
                  </Typography>
                </CardBody>
              </Card>
            </div>
          ))}
        </Carousel> */}
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

export default OurWorksSection;
