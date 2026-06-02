import "./Attire.css";
import img from "../../assets/dresscode-pic.png";

function Attire() {
  const colors = [
    {
      name: "STEEL BLUE",
      color: "#CEE0F4",
    },
    {
      name: "SEAFOAM BLUE",
      color: "#A7C1E1",
    },
    {
      color: "#84A1C4",
    },
    {
      color: "#607B9B",
    },
  ];

  return (
    <section id="dress" className="attire-section">
      <div className="attire-container">
        <div className="attire-photo">
          <img src={img} alt="Wedding Couple" />
          <div className="photo-overlay">
            <h2>
              WE CAN'T SAY I DO
              <br />
              WITHOUT YOU!
            </h2>
            <p>We are very excited to celebrate with you!</p>
          </div>
        </div>

        <div className="attire-content">
          <h1>Attire</h1>
          <p className="attire-text">We kindly encourage our guests to wear</p>
          <p className="attire-text">our colors on our special day.</p>
          <div className="palette-card">
            <h3>OUR COLOR PALETTE</h3>
            <div className="palette-grid">
              {colors.map((item, index) => (
                <div className="palette-item" key={index}>
                  <div
                    className="color-box"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Attire;
