import "./Details.css";

export default function Details() {
  const churchMap = "https://maps.app.goo.gl/H1yGqPZ2eda8zH4BA";
  const receptionMap = "https://maps.app.goo.gl/pVBPfpwvsJGJJ21c8";
  const colors = ["color1", "color2", "color3", "color4", "color5", "color6"];

  return (
    <section className="details-section section-page" id="details">
      <div className="details-container section-container">
        <h2 className="details-title section-title">Details</h2>

        <div className="details-grid">
          {/* Church */}
          <div className="details-card">
            <h3 className="details-heading">Church</h3>

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
              className="map-button primary-button"
            >
              📍 View on Google Maps
            </a>
          </div>

          {/* Reception */}
          <div className="details-card">
            <h3 className="details-heading">Reception</h3>

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
              className="map-button primary-button"
            >
              📍 View on Google Maps
            </a>
          </div>

          {/* Dress Code */}
          <div className="details-card">
            <h3 className="details-heading">Dress Code</h3>

            <div className="mini-divider"></div>

            <h4 className="venue-name">Formal Attire</h4>

            <p className="dress-description">
              We would love to see our family and friends dressed in elegant and
              timeless colors that complement our special day.
            </p>

            <div className="color-palette">
              {colors.map((color) => (
                <span key={color} className={`palette ${color}`}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
