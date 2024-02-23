import { useEffect, useState } from "react";
import AboutSection from "./homepage/components/AboutSection";

import cover from '../assets/2004.jpg'

import { motion, useScroll } from "framer-motion";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function About() {
  const { scrollYProgress } = useScroll();

  const [select, setSelect] = useState("vision");
  const [check, setCheck] = useState(true);

  useEffect(() => {
    if (check) {
      setTimeout(() => {
        setSelect(select === "vision" ? "mission" : "vision");
        setCheck(true);
      }, 20000);
    }
    setCheck(false);
  }, [select]);

  return (
    <section className="flex items-center justify-center flex-col mt-10">
      <div className="w-full">
        <h1 className="text-2xl font-semibold mb-8 text-primary-blue w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="w-full text-center"
          >
            // <span className="text-black">Hakkımızda</span>
          </motion.div>
        </h1>
        <div className="h-96 w-full">
          <img className="object-cover h-full w-full" src={cover} alt="" />
        </div>
      </div>
      <AboutSection />
      <section className="h-full md:h-[30rem] flex flex-col items-center justify-center">
        <div className="h-full w-full md:max-w-screen-xl md:flex flex-col justify-center item-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, ease: "easeInOut" },
              y: 0,
            }}
            viewport={{ once: true }}
            className="flex justify-center items-center h-3/4"
          >
            <Typography
              variant="h1"
              color="gray"
              className="mb-4 text-2xl md:text-3xl lg:text-4xl font-montserrat text-end font-light"
            >
              <span className="font-semibold text-primary-blue">
                Hedeflerimiz
              </span>
            </Typography>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row md:item-center md:h-full md:border-y-2">
            <div className="md:flex group md:flex-col p-12  sm:m-0 border-2 md:border-r-2 md:border-l-0 md:border-y-0 md:w-full">
              <div className="mt-2">
                <h3>
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1.2, ease: "easeInOut" },
                      y: 0,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="leading-10 group-hover:text-primary-blue group-hover:text-lg group-hover:font-extrabold transition-all ease-in-out duration-500">
                      Uygun Fiyat
                    </div>
                    <div className="group-hover:font-semibold transition-all ease-in-out duration-500 ">
                      Piyasalara uygun fiyat politikamız, müşterilerimize
                      rekabet avantajı sağlar.
                    </div>
                  </motion.div>
                </h3>
              </div>
            </div>
            <div className="md:flex group md:flex-col p-12  sm:m-0 border-2 md:border-r-2 md:border-l-0 md:border-y-0  md:w-full">
              <div className="mt-1 ">
                <h3>
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1.5, ease: "easeInOut" },
                      y: 0,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="leading-10 group-hover:text-primary-blue group-hover:text-lg group-hover:font-extrabold transition-all ease-in-out duration-500">
                      Kalite
                    </div>
                    <div className=" group-hover:font-semibold transition-all ease-in-out duration-500 ">
                      Malzeme kalitemiz, global standartlara uygun olarak
                      sertifikalandırılmıştır.
                    </div>
                  </motion.div>
                </h3>
              </div>
            </div>
            <div className="md:flex group md:flex-col p-12  sm:m-0 border-2 md:border-x-0 md:border-y-0 md:w-full">
              <div className="mt-2">
                <h3>
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1.8, ease: "easeInOut" },
                      y: 0,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="leading-10 group-hover:text-primary-blue group-hover:text-lg group-hover:font-extrabold transition-all ease-in-out duration-500">
                      Memnuniyet
                    </div>
                    <div className=" group-hover:font-semibold transition-all ease-in-out duration-500 ">
                      Müşteri memnuniyeti, en önemli çalışma prensiplerimizden
                      biridir.
                    </div>
                  </motion.div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[500px] md:h-[400px]  flex-col flex items-center justify-center w-full bg-blue-gray-50">
        <Card className="h-full overflow-hidden flex flex-col pt-10 w-full shadow-transparent rounded-none bg-blue-gray-50">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hidden md:flex justify-center bg-blue-gray-50  w-full text-4xl"
          >
            <h1 className="text-center font-bold max-w-lg text-pretty">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1.4, ease: "easeInOut" },
                }}
                viewport={{ once: true }}
                onClick={() => setSelect("vision")}
                className={`text-primary-blue cursor-pointer underline transition-colors duration-[1500ms] ${
                  select == "vision"
                    ? " decoration-primary-blue"
                    : "decoration-blue-gray-50"
                }`}
              >
                Vizyon
              </motion.span>{" "}
              ve{" "}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 2.4, ease: "easeInOut" },
                }}
                viewport={{ once: true }}
                onClick={() => setSelect("mission")}
                className={`text-primary-blue cursor-pointer underline transition-colors duration-[1500ms] ${
                  select == "mission"
                    ? " decoration-primary-blue"
                    : "decoration-blue-gray-50"
                }`}
              >
                Misyon
              </motion.span>
            </h1>
          </CardHeader>
          <CardBody className="p-1  flex flex-col items-center w-full">
            <Typography
              variant="h1"
              className="text-center md:hidden font-montserrat font-bold max-w-lg text-pretty mb-2 text-4xl"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1.4, ease: "easeInOut" },
                }}
                viewport={{ once: true }}
                onClick={() => setSelect("vision")}
                className={`text-primary-blue cursor-pointer underline transition-colors duration-[1500ms] ${
                  select == "vision"
                    ? " decoration-primary-blue"
                    : "decoration-blue-gray-50"
                }`}
              >
                Vizyon
              </motion.span>{" "}
              ve{" "}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 2.4, ease: "easeInOut" },
                }}
                viewport={{ once: true }}
                onClick={() => setSelect("mission")}
                className={`text-primary-blue cursor-pointer underline transition-colors duration-[1500ms] ${
                  select == "mission"
                    ? " decoration-primary-blue"
                    : "decoration-blue-gray-50"
                }`}
              >
                Misyon
              </motion.span>
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="font-normal mt-14 overflow-scroll no-scrollbar md:max-w-xl font-montserrat text-md"
            >
              <div
                className={`absolute left-5 right-5 md:left-0 md:right-0 mx-auto md:max-w-3xl md:text-xl/6  ${
                  select == "vision" ? " opacity-100" : "invisible opacity-0 "
                } transition-all duration-[1500ms] ease-in-out`}
              >
                <div className="text-primary-blue font-light ">Vizyonumuz</div>
                Sektörde öncü bir marka olarak tanınan, global standartlarda
                kaliteli ürünleri ve hizmetleri ile müşteri memnuniyetini her
                zaman ön planda tutan bir kuruluştur. En güncel teknolojileri
                sürekli olarak takip ederek, sürekli yenilenen ve gelişen
                endüstriyel dünyada liderliği sürdürmek ve müşterilerine
                sürdürülebilir çözümler sunmak hedefimizdir. Müşterilerimize
                değer katma anlayışımızla sektörde uzun vadeli ve sağlam bir
                varlık olma yolunda ilerliyoruz.
              </div>
              <div
                className={`absolute left-5 right-5 md:left-0 md:right-0 mx-auto md:max-w-3xl md:text-xl/6  ${
                  select == "mission" ? " opacity-100" : "invisible opacity-0 "
                } transition-all duration-[1500ms] ease-in-out`}
              >
                <div className="text-primary-blue font-light ">Misyonumuz</div>
                Endüstriyel alanda yüksek kaliteli CNC otomat makineleri üretimi
                ve tedariki ile müşterilerine katma değer sağlamayı amaçlar.
                Misyonumuz, müşterilerimize uygun fiyatlı, yüksek performanslı
                ve güvenilir otomat makineleri sunarak, onların üretkenliklerini
                artırmalarına yardımcı olmaktır. Profesyonel ekibimiz ve güçlü
                tedarik zincirimizle müşteri memnuniyetini en üst düzeye
                çıkarmak ve sektöre öncülük etmek, firmamızın temel
                prensiplerindendir.
              </div>
            </Typography>
          </CardBody>
        </Card>
      </section>
    </section>
  );
}

export default About;
