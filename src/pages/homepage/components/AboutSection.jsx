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
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <>
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
            <Link className="text-primary-blue" to="/about"> Devamı →</Link>
          </CardBody>
        </Card>
      </section>
    </>
  );
}

export default AboutSection;
