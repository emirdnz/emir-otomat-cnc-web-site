import {useState} from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

function HomeCarousel() {
  const [data, setData] = useState([
    {
      img: "https://emircncotomat.com/wp-content/uploads/2022/06/anasayfa-1.jpg",
      title: "Tecrübe",
      desc: "40 Yıllık Tecrübemizle Sizlere Hizmet Veriyoruz",
      alt: "imagealt",
    },
    {
      img: "https://vamer.com.tr/images/main-slider/image-1.jpg",
      title: "Tecrübe",
      desc: "1986’DAN BERİ PROFESYONEL CNC OTOMAT TEDARİKÇİSİYİZ",
      alt: "imagealt",
    },
    {
      img: "https://emircncotomat.com/wp-content/uploads/2022/03/01.jpg",
      title: "The Beauty of Nature",
      desc: "It is not so much for its beauty that the forest",
      alt: "imagealt",
    },
  ]);

  return (
    <section>
      <Carousel className="h-[30rem]" loop={true} autoplay={true} autoplayDelay={5000}>
        {data.map((item, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={item.img}
              alt={item.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h4"
                  color="white"
                  className="mb-4 text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80 max-h-28 line-clamp-2 overflow-scroll no-scrollbar md:line-clamp-none text-base lg:text-lg font-montserrat"
                >
                  {item.desc}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default HomeCarousel;
