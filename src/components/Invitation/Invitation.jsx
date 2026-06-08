import "./Invitation.css";
import { INVITATION_CONTENT } from "./constants/invitation_roles";

function Invitation({ name, role }) {
  const roleMap = {
    "Best Man": 1,
    "Bridesmaid": 2,
    "Principal Sponsor": 3,
    "Flower Girl": 4,
    "Ring Bearer": 5,
  };

  const content =
    INVITATION_CONTENT[
      roleMap[role] ?? 0
    ];

  return (
    <section id="invitation" className="invitation-page section-page">
      <div className="invitation-container section-container">
        <div className="invitation-monogram">
          <span>I</span>
          <div className="invitation-monogram-divider"></div>
          <span>T</span>
        </div>

        <h3 className="invite-title">HELLO {name}, YOU ARE INVITED</h3>

        <div className="heart-divider">
          <span></span>
          <span className="heart">♥</span>
          <span></span>
        </div>

        <p className="subtitle">
          TO CELEBRATE THE WEDDING OF
        </p>

        <h1 className="couple-names">
          Ian & Tin
        </h1>

        <div className="line-divider"></div>

        <div className="message">
          <p>{content.message}</p>
        </div>

        <h2
          className={
            roleMap[role]
              ? "participation-text"
              : "celebrate-text"
          }
        >
          {content.title}
        </h2>

        <h4 className="role-subtitle">
          {content.subtitle}
        </h4>

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