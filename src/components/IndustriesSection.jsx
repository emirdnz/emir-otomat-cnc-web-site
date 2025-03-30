import { useTranslation } from "react-i18next";
import { FaRocket, FaCar, FaShieldAlt, FaMobileAlt, FaIndustry, FaMicrochip, FaMedkit, FaBolt, FaRobot } from "react-icons/fa";

function IndustriesSection() {
  const { t } = useTranslation();

  const industries = [
    {
      icon: FaRocket,
      title: t("Uzay ve Havacılık"),
    },
    {
      icon: FaCar,
      title: t("Otomotiv"),
    },
    {
      icon: FaShieldAlt,
      title: t("Savunma"),
    },
    {
      icon: FaMobileAlt,
      title: t("Tüketici Ürünleri"),
    },
    {
      icon: FaIndustry,
      title: t("Endüstriyel"),
    },
    {
      icon: FaMicrochip,
      title: t("Elektronik ve IoT"),
    },
    {
      icon: FaMedkit,
      title: t("Medikal & Dental"),
    },
    {
      icon: FaBolt,
      title: t("Enerji"),
    },
    {
      icon: FaRobot,
      title: t("Robotik ve Makine İmalatı"),
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("Tüm endüstrilerde hassas üretim uygulamaları")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <IconComponent className="text-4xl mb-4 text-blue-500" />
                <h3 className="text-lg font-semibold text-center">{industry.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
