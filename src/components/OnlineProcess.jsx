import React, { useState } from 'react';
import './OnlineProcess.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function OnlineProcess() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="online-process">
      <h2>Online Parça Üretim Süreci</h2>
      <div className="process-steps">
        {/* Step 1 */}
        <div className="step">
          <div className="icon">
            <i className="fas fa-upload"></i>
          </div>
          <h3>Modelinizi Yükleyin</h3>
          <p>3D modelinizi sistemimize yükleyin</p>
        </div>

        {/* Step 2 */}
        <div className="step">
          <div className="icon">
            <i className="fas fa-tasks"></i>
          </div>
          <h3>Sipariş Detaylarını Girin</h3>
          <p>
            Üretim teknolojisini, malzeme türünü ve yüzey işlemlerini seçin. Tolerans aralıklarını
            belirleyerek üretim sürecini özelleştirin
          </p>
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h3>Siparişinizi Onaylayın</h3>
          <p>Üretim için gerekli tüm detayları kontrol edin ve siparişinizi onaylayın</p>
        </div>

        {/* Step 4 */}
        <div className="step">
          <div className="icon">
            <i className="fas fa-box"></i>
          </div>
          <h3>Parçalarınızı Teslim Alın</h3>
          <p>Üretilen parçalar kalite kontrolden geçtikten sonra adresinize teslim edilir</p>
        </div>
      </div>

      {/* Button */}
      <div className="order-button">
        <button onClick={handleButtonClick} className="btn">
          Online Sipariş İçin Tıklayınız
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Bilgilendirme</h3>
            <p>
              Yapım aşamasındadır. Lütfen siparişlerinizi{' '}
              <a href="mailto:siparis@emirotomatcnc.com">siparis@emirotomatcnc.com</a> adresine
              yollayabilirsiniz.
            </p>
            <button onClick={closeModal} className="close-btn">
              Kapat
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default OnlineProcess;
