import "./Details.css";

export default function Details({ guestInfo }) {
  const churchMap = "https://maps.app.goo.gl/cWckrgWAcih9MJMV7";
  const receptionMap = "https://maps.app.goo.gl/NWqx7Bf5RXs2LDFCA";

  return (
    <section className="details-section section-page" id="details">
      <div className="details-container section-container">
        <h2 className="details-title section-title">Venue Details</h2>

        <div className="details-grid">
          {guestInfo.churchAttendance === "Attending" && (
            <>
              <div className="details-card">
                <h3 className="details-heading">Church Ceremony</h3>

                <div className="mini-divider"></div>

                <h4 className="venue-name">Our Lady of the Airways Parish</h4>

                <p className="venue-address">
                  Chapel Road cor. Aquino Avenue,
                  <br />
                  NAIA Road, Pasay City, Metro Manila
                </p>

                <div className="time-divider"></div>

                <p className="venue-time">2:00 PM</p>

                <a
                  href={churchMap}
                  target="_blank"
                  rel="noreferrer"
                  className="map-button primary-button"
                >
                  📍 View on Google Maps
                </a>
              </div>
            </>
          )}

          {guestInfo.receptionAttendance === "Attending" && (
            <>
              <div className="details-card">
                <h3 className="details-heading">Reception</h3>

                <div className="mini-divider"></div>

                <h4 className="venue-name">Le Parc</h4>

                <p className="venue-address">
                  Epifanio de los Santos Ave,
                  <br />
                  Pasay City, Metro Manila
                </p>

                <div className="time-divider"></div>

                <p className="venue-time">5:00 PM</p>

                <a
                  href={receptionMap}
                  target="_blank"
                  rel="noreferrer"
                  className="map-button primary-button"
                >
                  📍 View on Google Maps
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
