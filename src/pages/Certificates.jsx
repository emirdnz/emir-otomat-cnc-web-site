import { useState, useEffect } from "react";

import cover from "../assets/2008.jpg";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

function Certificates() {
  const [open, setOpen] = useState(true);
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
            // <span className="text-black">Sertifikalar</span>
          </motion.div>
        </h1>
        <div className="h-96 w-full">
          <img className=" object-cover h-full w-full" src={cover} alt="" />
        </div>
      </div>
      <div class="flex flex-col items-center justify-center h-[30vh] px-4">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Yapım Aşamasında</h1>
        <p class="text-gray-600 text-lg mb-8">
          Yakın zamanda tekrar kontrol ediniz.
        </p>
      </div>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none m-8"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography className="mb-3 font-normal" variant="paragraph">
              Sertifikalar henüz yapım aşamasındadır. Yakın zamanda tekrar
              kontrol ediniz.
            </Typography>
            <Typography className="mb-3 font-normal" variant="paragraph">
              Bu sırada diğer sayfalarımızı ziyaret edebilirsiniz.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to="/anasayfa" className="pb-2">
              <Button
                className="normal-case text-md mb-2"
                variant="gradient"
                onClick={handleOpen}
                fullWidth
              >
                Anasayfa
              </Button>
            </Link>
            <Link to="/calismalarimiz" className="pb-2">
              <Button
                className="normal-case text-md mb-2"
                variant="gradient"
                onClick={handleOpen}
                fullWidth
              >
                Ürünler
              </Button>
            </Link>
            <Link to="/makine-parkuru">
              <Button
                className="normal-case text-md !bg-primary-blue"
                variant="gradient"
                onClick={handleOpen}
                fullWidth
              >
                Makine Parkurumuz
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </Dialog>
    </section>
  );
}

export default Certificates;
