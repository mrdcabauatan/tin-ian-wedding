import "./Rsvp.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import RsvpForm from "./components/RsvpForm";

function RSVP({ guestInfo }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="rsvp" className="rsvp-page section-page">
        <div className="rsvp-container section-container">
          <h1 className="rsvp-title section-title">RSVP</h1>

          <div className="rsvp-info">
            <div className="rsvp-info-card">
              <div className="rsvp-icon">
                <CalendarDays size={32} />
              </div>

              <h3>Date</h3>
              <p>Insert Date</p>
            </div>

            <div className="rsvp-info-card">
              <div className="rsvp-icon">
                <Clock3 size={32} />
              </div>

              <h3>Time</h3>
              <p>Insert Time</p>
            </div>

            <div className="rsvp-info-card">
              <div className="rsvp-icon">
                <MapPin size={32} />
              </div>

              <h3>Location</h3>
              <p>Your Venue</p>
            </div>
          </div>

          <div className="rsvp-message">
            <p>Please confirm your attendance by clicking the button below.</p>
            <p>We can't wait to share this moment with you.</p>
          </div>

          <a
            href="#"
            className="rsvp-link"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
          >
            RSVP Now
          </a>

          <div className="rsvp-deadline">
            <h4>
              RSVP Deadline:
              <span> Insert Date</span>
            </h4>

            <p>
              Please respond on or before this date to help us finalize our
              arrangements.
            </p>
          </div>

          <div className="rsvp-reminders">
            <h2>Important Reminders</h2>

            <ul>
              <li>Kindly respond before the RSVP deadline.</li>
              <li>Please arrive at least 30 minutes before the ceremony.</li>
              <li>Follow the dress code indicated on the attire page.</li>
              <li>Only guests named on the invitation may attend.</li>
              <li>Keep phones on silent mode during the ceremony.</li>
            </ul>
          </div>
        </div>
      </section>

      {showModal &&
        createPortal(
          <div
            className="rsvp-modal-overlay"
            onClick={() => setShowModal(false)}
          >
            <div className="rsvp-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                ×
              </button>

              <p>
                We are very excited to celebrate our wedding day with our family
                and friends. Please let us know whether you'll be able to join
                us by submitting your RSVP below.
              </p>

              <RsvpForm
                guestInfo={guestInfo}
                onClose={() => setShowModal(false)}
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export default RSVP;
