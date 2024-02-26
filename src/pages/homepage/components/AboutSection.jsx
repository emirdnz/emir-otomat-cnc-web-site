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
        <section className=" h-full md:h-[450px]  flex-col flex items-center justify-center w-full ">
          <Card className="h-full overflow-hidden flex flex-row justify-center w-full shadow-transparent rounded-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none hidden md:flex justify-center md:justify-end bg-blue-gray-50 pr-5 pt-36 w-full h-full text-4xl text-primary-blue"
            >
              <h1 className="text-center w-full md:text-end font-bold max-w-lg text-pretty">
                EMİR OTOMAT CNC{" "}
                <span className="text-gray-800  font-semibold text-pretty leading-[50px] ">
                  Güvenilir Tedarikçiniz <br /> İleri Teknoloji<br /> Güçlü Çözümler
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
            <CardBody className="p-0 pl-5 pt-6 pb-6 md:pt-5 md:pb-0 my-auto flex flex-col items-center md:items-start justify-evenly w-full">
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
                1986 Yılında kurulan firmamız sektörde profesyonel çalışmaları
                ile hizmetine devam etmektedir.
                <br />
                <br />
                Firmamız kurulduğundan beri sektörde{" "}
                <span className="font-bold">
                  lider firmalara profesyonel tedarikçi
                </span>{" "}
                olmaya devam etmektedir. <br />
                <br />
                Firmamız her zaman üretimle birlikte en güncel teknolojiler ile
                makina parkurlarını ve üretim kalitesini her zaman profesyonel
                ekibimiz ile geçmişten bugüne devam ettirmektedir. <br />
                <br />
                Firmamız{" "}
                <span className="font-bold">
                  {" "}
                  İndex, Revolver, CNC Otomat
                </span>{" "}
                makinalarımız ile tedarikçiniz yolunda üretimlere devam
                ettirmekle birlikte{" "}
                <span className="font-bold">
                  Mobilya Sektörü, Ev Aletleri, Tıbbi Malzemeler, Aydınlatma
                  Parçaları, Otomotiv Parçaları, Klima Parçaları, Doğalgaz
                  Parçaları Ve Savunma Sanayisi vb.
                </span>{" "}
                Sektörlere Tedarikçi olmaktadır.
              </Typography>
            </CardBody>
          </Card>
        </section>
      )}
    </>
  );
}

export default AboutSection;
