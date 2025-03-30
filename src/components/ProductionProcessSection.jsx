import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function ProductionProcessSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const steps = [
    {
      number: "1",
      title: t("Modelinizi Yükleyin"),
      description: t("CAD dosyanızı yükleyin ve anında fiyat teklifinizi alın."),
    },
    {
      number: "2",
      title: t("Sipariş Detaylarını Girin"),
      description: t("Malzeme, tolerans ve yüzey işlemlerini seçin."),
    },
    {
      number: "3",
      title: t("Parça Siparişinizi Oluşturun"),
      description: t("Üretim detaylarını onaylayın ve siparişinizi verin."),
    },
    {
      number: "4",
      title: t("Parçalarınızı Teslim Alın"),
      description: t("Kalite kontrolünden geçen parçalarınız adresinize gönderilir."),
    },
  ];

  const handleQuoteClick = () => {
    navigate("/quote"); // Bu route'u daha sonra oluşturacağız
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("Online Parça Üretim Süreci")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={handleQuoteClick}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            {t("HIZLICA TEKLİF ALIN")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductionProcessSection;
