import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

function AboutSection() {
  const location = useLocation();
  console.log("location", location);

  return (
    <>
      {location.pathname !== "/about" ? (
        <section className="h-96 flex-col flex items-center justify-center w-full ">
          <Card className="h-full overflow-hidden flex flex-row justify-center w-full shadow-transparent rounded-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none flex justify-center md:justify-end bg-blue-gray-50 pr-5 pt-16 w-full h-full text-4xl text-primary-blue"
            >
              <h1 className="text-center md:text-end font-bold max-w-lg text-pretty">
                EMİR OTOMAT CNC{" "}
                <span className="text-gray-800 font-semibold text-pretty">
                  Güvenilir Tedarikçiniz - İleri Teknoloji, Güçlü Çözümler
                </span>
                <br />
                <Link
                  className="text-primary-blue text-lg md:hidden"
                  to="/about"
                >
                  Devamı →
                </Link>
              </h1>
            </CardHeader>
            <CardBody className="p-0 pl-5 md:pt-16 hidden md:block items-center md:items-start justify-evenly w-full ">
              <Typography
                variant="lead"
                color="gray"
                className="mb-3 font-normal overflow-scroll no-scrollbar max-w-lg font-montserrat text-base md:text-lg lg:text-lg"
              >
                İleri teknolojiyle donatılmış 1986'dan beri sektördeki
                uzmanlığımızla, Emir Otomat CNC olarak müşteri isteklerine en
                uygun çözümleri sunuyoruz.
              </Typography>
              <Link className="text-primary-blue" to="/about">
                {" "}
                Devamı →
              </Link>
            </CardBody>
          </Card>
        </section>
      ) : (
        <section className=" h-full md:h-96  flex-col flex items-center justify-center w-full ">
          <Card className="h-full overflow-hidden flex flex-row justify-center w-full shadow-transparent rounded-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none hidden md:flex justify-center md:justify-end bg-blue-gray-50 pr-5 pt-16 w-full h-full text-4xl text-primary-blue"
            >
              <h1 className="text-center md:text-end font-bold max-w-lg text-pretty">
                EMİR OTOMAT CNC{" "}
                <span className="text-gray-800 font-semibold text-pretty">
                  Güvenilir Tedarikçiniz - İleri Teknoloji, Güçlü Çözümler
                </span>
                <br />
                <Link
                  className="text-primary-blue text-lg md:hidden"
                  to="/about"
                >
                  Devamı →
                </Link>
              </h1>
            </CardHeader>
            <CardBody className="p-0 pl-5 pt-6 pb-6 md:pt-16 md:pb-0 my-auto flex flex-col items-center md:items-start justify-evenly w-full">
              <Typography
                variant="h3"
                className="text-center md:hidden font-montserrat md:text-end font-bold max-w-lg text-pretty text-primary-blue mb-2"
              >
                Hakkımızda
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className=" font-normal overflow-scroll no-scrollbar min-h max-w-lg pb-10 font-montserrat text-md text-pretty "
              >
                1986 yılında Deniz Otomat Otomotiv Limited Şirketi olarak
                Unkapanı'nda kurulan Emir CNC Otomat, sektördeki liderliğini
                güçlendirmeye devam ediyor. 2004 yılında Ikitelli Demirciler
                Sanayi sitesine taşınarak unvanını GÖRKEM OTOMAT OTOMOTİV VE
                ENDÜSTRİYEL YAN SANAYİ TİCARET LİMİTED ŞİRKETİ olarak
                değiştirdik. Endüstri 4.0 teknolojisini 2013 yılında firmamıza
                entegre ettik ve 2014 yılında CNC Otomat Makinalarını makina
                parkurumuza kattık. 2018 yılında ISO9001:2015 Uluslararası
                Standart Kalite Sertifikasını alarak kalitemizi taçlandırdık.
                2021'de gerçekleşen firma değişikliği ve unvan değişikliğiyle
                şirketimizin adı EMİR OTOMAT CNC MAKİNA SANAYİ VE TİCARET
                LİMİTED ŞİRKETİ olarak güncellendi.
              </Typography>
            </CardBody>
          </Card>
        </section>
      )}
    </>
  );
}

export default AboutSection;
