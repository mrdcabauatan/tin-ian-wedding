import "./Invitation.css";
import { INVITATION_CONTENT } from "../constants/invitation_roles";
import monogram from "../../assets/monogram.png";

function Invitation({ name, roleId }) {
  const content = INVITATION_CONTENT[roleId] ?? INVITATION_CONTENT[0];

  const customMessage =
    "Through every chapter of life, you have shared an unbreakable bond as brothers, always supporting, encouraging, and looking out for one another. Thank you for being someone Ian has always been able to count on. Having you beside us as his Best Man on our wedding day is a privilege and a memory we will cherish forever";

  const customSubtitle = "Built by Blood, Strengthened by Friendship";

  const openCustom = name === "CESAR III JIMENEZ";

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

        <h3 className="invite-title">HELLO {name}, YOU ARE INVITED</h3>

        <div className="ornament-divider">
          <span className="line"></span>

          <svg
            className="ornament"
            viewBox="0 0 120 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20
                 C20 20 22 8 32 8
                 C40 8 44 16 60 20
                 C76 16 80 8 88 8
                 C98 8 100 20 110 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <circle cx="60" cy="20" r="2.5" fill="currentColor" />

            <path
              d="M10 20
                 C20 20 22 32 32 32
                 C40 32 44 24 60 20
                 C76 24 80 32 88 32
                 C98 32 100 20 110 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>

          <span className="line"></span>
        </div>

        <p className="subtitle">TO CELEBRATE THE WEDDING OF</p>

        <h1 className="couple-names">Ian & Cristine</h1>

        <div className="line-divider"></div>

        <div className="message">
          <p>{openCustom ? customMessage : content.message}</p>
        </div>

        <h2 className={roleId !== 0 ? "participation-text" : "celebrate-text"}>
          {content.title}
        </h2>

        {content.subtitle && (
          <h4 className="role-subtitle">
            {openCustom ? customSubtitle : content.subtitle}
          </h4>
        )}

        <div className="ornament-divider">
          <span className="line"></span>

          <svg
            className="ornament"
            viewBox="0 0 120 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20
                 C20 20 22 8 32 8
                 C40 8 44 16 60 20
                 C76 16 80 8 88 8
                 C98 8 100 20 110 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <circle cx="60" cy="20" r="2.5" fill="currentColor" />

            <path
              d="M10 20
                 C20 20 22 32 32 32
                 C40 32 44 24 60 20
                 C76 24 80 32 88 32
                 C98 32 100 20 110 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>

          <span className="line"></span>
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
