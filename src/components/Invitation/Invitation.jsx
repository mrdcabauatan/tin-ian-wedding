import "./Invitation.css";
import { INVITATION_CONTENT } from "../constants/invitation_roles";
import monogram from "../../assets/monogram.png";

function Invitation({ name, roleId }) {
  const content = INVITATION_CONTENT[roleId] ?? INVITATION_CONTENT[0];

  return (
    <section id="invitation" className="invitation-page section-page">
      <div className="invitation-container section-container">

        <div className="invitation-monogram">
          <img
            src={monogram}
            alt="Ian & Cristine Monogram"
            className="monogram-image"
          />
        </div>

        <h3 className="invite-title">
          HELLO {name}, YOU ARE INVITED
        </h3>

        <div className="heart-divider">
          <span></span>
          <span className="heart">♥</span>
          <span></span>
        </div>

        <p className="subtitle">
          TO CELEBRATE THE WEDDING OF
        </p>

        <h1 className="couple-names">
          Ian & Cristine
        </h1>

        <div className="line-divider"></div>

        <div className="message">
          <p>{content.message}</p>
        </div>

        <h2
          className={
            roleId !== 0
              ? "participation-text"
              : "celebrate-text"
          }
        >
          {content.title}
        </h2>

        {content.subtitle && (
          <h4 className="role-subtitle">
            {content.subtitle}
          </h4>
        )}

        <div className="heart-divider bottom-divider">
          <span></span>
          <span className="heart">♥</span>
          <span></span>
        </div>

        <div className="signature">
          <p>WITH LOVE,</p>
          <p>IAN & Cristine</p>
        </div>
      </div>
    </section>
  );
}

export default Invitation;