import "./Details.css";

export default function Details() {
  const churchMap = "https://maps.app.goo.gl/H1yGqPZ2eda8zH4BA";
  const receptionMap = "https://maps.app.goo.gl/pVBPfpwvsJGJJ21c8";

  return (
    <section
      className="details-section"
      id="details"
    >
      <div className="details-container">
        <h2 className="details-title">DETAILS</h2>

        <div className="details-grid">
          {/* Church */}
          <div className="details-card">
            <h3 className="details-heading">CHURCH</h3>

            <div className="mini-divider"></div>

            <h4 className="venue-name">Turtles Family KTV</h4>

            <p className="venue-address">
              Aguirre Ave. B.F. Homes
              <br />
              Parañaque, Metro Manila
            </p>

            <div className="time-divider"></div>

            <p className="venue-time">3:00 PM</p>

            <a
              href={churchMap}
              target="_blank"
              rel="noreferrer"
              className="map-button"
            >
              📍 View on Google Maps
            </a>
          </div>

          {/* Reception */}
          <div className="details-card">
            <h3 className="details-heading">RECEPTION</h3>

            <div className="mini-divider"></div>

            <h4 className="venue-name">Elorde Garden Restaurant</h4>

            <p className="venue-address">
              Elorde Compound Brgy, Dr Arcadio Santos Ave,
              <br />
              San Antonio, Parañaque, Metro Manila
            </p>

            <div className="time-divider"></div>

            <p className="venue-time">6:00 PM</p>

            <a
              href={receptionMap}
              target="_blank"
              rel="noreferrer"
              className="map-button"
            >
              📍 View on Google Maps
            </a>
          </div>

          {/* Dress Code */}
          <div className="details-card">
            <h3 className="details-heading">DRESS CODE</h3>

            <div className="mini-divider"></div>

            <h4 className="venue-name">Formal Attire</h4>

            <p className="dress-description">
              We would love to see our family and friends dressed in elegant and
              timeless colors that complement our special day.
            </p>

            <div className="color-palette">
              <span className="palette dusty-blue"></span>
              <span className="palette soft-blue"></span>
              <span className="palette warm-gray"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}