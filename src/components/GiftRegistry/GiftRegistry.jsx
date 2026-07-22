import "./GiftRegistry.css";

import qr1 from "../../assets/qr/bdo.jpg";
import qr2 from "../../assets/qr/maya.jpg";

export default function GiftRegistry() {
  return (
    <section className="gift-section section-page" id="gift">
      <div className="gift-container section-container">
        <h2 className="gift-title section-title">Gift Registry</h2>

        <div className="gift-content">
          <h3 className="gift-heading">
            Your love and support mean the world to us.
          </h3>

          <p className="gift-description">
            Your presence at our wedding is truly the greatest gift we could
            receive. If you would like to honor us with a gift, a monetary
            blessing would be deeply appreciated as we begin our journey
            together. Every gift, prayer, and kind thought is sincerely
            appreciated. <br />
            Thank you for your love and support.
          </p>

          <div className="gift-cards">
            <div className="gift-card">
              <img src={qr1} alt="BPI QR" className="gift-qr" />
            </div>

            <div className="gift-card">
              <img src={qr2} alt="Maya QR" className="gift-qr" />
            </div>
          </div>

          <div className="gift-footer">
            <h4>Thank You</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
