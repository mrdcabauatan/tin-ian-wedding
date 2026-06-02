import "./Venue.css";
import ceremonyImg from "../../assets/loc1.png";
import receptionImg from "../../assets/loc2.png";

function Venue() {
  return (
    <section className="venue-page">
      <div className="venue-container">
        <h1 className="venue-title">Venue</h1>

        <div className="venue-grid">
          <div className="venue-card">
            <h2>Wedding Ceremony</h2>

            <div className="venue-image">
              <img src={ceremonyImg} alt="Wedding Ceremony Venue" />
            </div>

            <h3>Turtles Family KTV</h3>

            <p className="venue-address">Parañaque, Metro Manila</p>

            <div className="venue-divider">
              <span></span>
              <div className="divider-dot"></div>
              <span></span>
            </div>

            <p className="venue-description">
              Join us as we exchange our vows in a sacred ceremony surrounded by
              family, friends, and God's grace.
            </p>

            <a
              href="https://maps.app.goo.gl/oiNSs9vjpiYoAnKa8"
              target="_blank"
              rel="noreferrer"
              className="venue-button"
            >
              Location Guide
            </a>
          </div>

          <div className="venue-card">
            <h2>Reception</h2>

            <div className="venue-image">
              <img src={receptionImg} alt="Wedding Reception Venue" />
            </div>

            <h3>Elorde Garden Restaurant</h3>

            <p className="venue-address">
              Elorde Compound Brgy, Dr Arcadio Santos Ave, San Antonio,
              Parañaque, 1700 Metro Manila
            </p>

            <div className="venue-divider">
              <span></span>
              <div className="divider-dot"></div>
              <span></span>
            </div>

            <p className="venue-description">
              Celebrate with us over dinner, music, laughter, and unforgettable
              moments as we begin our forever.
            </p>

            <a
              href="https://maps.app.goo.gl/uKNRRbPrHzrCYBzY7"
              target="_blank"
              rel="noreferrer"
              className="venue-button"
            >
              Location Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Venue;
