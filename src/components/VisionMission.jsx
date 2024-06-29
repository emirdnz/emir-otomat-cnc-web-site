import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function VisionMission() {
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
    <>
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
                onMouseEnter={() => setSelect("vision")}
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
                onMouseEnter={() => setSelect("mission")}
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
                onMouseEnter={() => setSelect("vision")}
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
                onMouseEnter={() => setSelect("vision")}
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
                Endüstriyel alanda yüksek kaliteli CNC otomat makineleri ile endüstriyel yedek parça üretimi
                ve tedariki ile müşterilerine katma değer sağlamayı amaçlar.
                Misyonumuz, müşterilerimize uygun fiyatlı, yüksek performanslı
                ve güvenilir endüstriyel yedek parçaları sunarak, müşterilerimizin üretkenliklerini
                artırmalarına yardımcı olmaktır. Profesyonel ekibimiz ve güçlü
                tedarik zincirimizle müşteri memnuniyetini en üst düzeye
                çıkarmak ve sektöre öncülük etmek, firmamızın temel
                prensiplerindendir.
              </div>
            </Typography>
          </CardBody>
        </Card>
      </section>
    </>
  );
}

export default VisionMission;
