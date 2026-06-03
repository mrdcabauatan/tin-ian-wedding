import "./Invitation.css";

function Invitation() {
  return (
    <section id="invitation" className="invitation-page">
      <div className="invitation-container">
        <div className="invitation-monogram">
          <span>I</span>
          <div className="invitation-monogram-divider"></div>
          <span>T</span>
        </div>

        <h3 className="invite-title">YOU ARE INVITED</h3>

        <div className="heart-divider">
          <span></span>
          <span className="heart">♥</span>
          <span></span>
        </div>

        <p className="subtitle">TO CELEBRATE THE WEDDING OF</p>

        <h1 className="couple-names">
          Ian <span>&</span> Tin
        </h1>

        <div className="line-divider"></div>

        <div className="message">
          <p>
            Together with our families, we warmly invite you to join us as we
            celebrate our love, exchange vows, and begin our forever. Your
            presence on this special day would mean the world to us.
          </p>
        </div>

        <h2 className="celebrate-text">We can't wait to celebrate with you!</h2>

        <div className="heart-divider bottom-divider">
          <span></span>
          <span className="heart">♥</span>
          <span></span>
        </div>

        <div className="signature">
          <p>WITH LOVE,</p>
          <p>IAN & TIN</p>
        </div>
      </div>
    </section>
  );
}

export default Invitation;
