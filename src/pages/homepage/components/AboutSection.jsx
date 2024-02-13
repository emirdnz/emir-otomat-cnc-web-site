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
      <div className="h-96 flex-col flex items-center justify-center  mx-auto max-w-screen-xl my-16">
        <Card className="h-full overflow-hidden flex flex-row-reverse justify-center w-full  shadow-transparent">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hidden sm:block"
          >
            <img
              className="object-cover	h-full w-full"
              src="https://emircncotomat.com/wp-content/uploads/2022/03/2003.jpg"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody className="p-3 flex flex-col items-center sm:items-start justify-evenly sm:max-w-md">
            <Typography
              className="my-2 font-montserrat"
              variant="h4"
              color="blue-gray"
            >
              Hakkımızda
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mb-3 font-normal overflow-scroll no-scrollbar font-montserrat text-base md:text-lg lg:text-lg"
            >
              1986 Yılında kurulan firmamız sektörde profesyonel çalışmaları ile
              hizmetine devam etmektedir. <br /> Firmamız kurulduğundan beri
              sektörde lider firmalara profesyonel tedarikçi olmaya devam
              etmektedir.
            </Typography>
            <Link to="/about">
              <Button className="hover:bg-regal-blue hover:opacity-70 transition-all duration-700 ease-in-out">
                Devamı
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default AboutSection;
