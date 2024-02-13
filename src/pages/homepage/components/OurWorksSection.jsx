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

function OurWorksSection() {
  const [autoplay, setAutoplay] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [works, setWorks] = useState([
    {
      img: "https://emircncotomat.com/wp-content/uploads/2017/06/WhatsApp-Image-2022-03-20-at-16.04.20-1-1200x1600.jpeg",
      title: "Sarı (PİRİNÇ) Malzemeleri",
    },
    {
      img: "https://emircncotomat.com/wp-content/uploads/2020/03/WhatsApp-Image-2022-03-20-at-16.04.17-2-1200x1600.jpeg",
      title: "Otomat Malzemeleri",
    },
    {
      img: "https://emircncotomat.com/wp-content/uploads/2017/08/IMG20220521111705-1200x1726.jpg",
      title: "TIBBİ YEDEK PARÇA ÜRÜNLERİ",
    },
    {
      img: "https://emircncotomat.com/wp-content/uploads/2022/06/WhatsApp-Image-2021-12-08-at-11.34.30-1200x1600-1.jpg",
      title: "Alüminyum Malzemeler",
    },
    {
      img: "https://emircncotomat.com/wp-content/uploads/2020/03/IMG20220510074805-1200x1666.jpg",
      title: "303 PASLANMAZ MALZEMELER",
    },
    {
      img: "https://emircncotomat.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-03-20-at-16.04.14-5-1200x1600.jpeg",
      title: "YÜKSEK KARBONLU ÇELİK VE  ÇELİK MALZEMELER",
    },
  ]);

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
      <div className="h-[30rem] flex items-center justify-center bg-blue-gray-50 my-10">
        <Carousel
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
                  className="m-0 rounded-none w-full h-full"
                  onClick={(e) => handleOpen(e)}
                >
                  <img
                    className="object-cover sm:object-cover  h-full w-full"
                    src={work.img}
                    alt={work.title}
                  />
                </CardHeader>
                <CardBody className="p-3 hidden sm:flex flex-col items-center text-center justify-evenly w-full ">
                  <Typography
                    className="my-2 font-montserrat font-extrabold block"
                    variant="h4"
                    color="blue-gray"
                  >
                    {work.title}
                  </Typography>
                </CardBody>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <img
            alt="nature"
            className=" w-full rounded-lg object-cover object-center"
            src={selectedImg}
          />
        </DialogBody>
      </Dialog>
    </>
  );
}

export default OurWorksSection;
