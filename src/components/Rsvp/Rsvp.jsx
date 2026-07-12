import "./Rsvp.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import RsvpForm from "./components/RsvpForm";

function RSVP({ guestInfo, setGuestInfo }) {
  const [showModal, setShowModal] = useState(false);

  const isNotYetResponding =
    guestInfo.attendance === "Not Yet Responding";
  const isNotAttending =
    guestInfo.attendance === "Not Attending";

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
              <p>September 26, 2026</p>
            </div>

            <div className="rsvp-info-card">
              <div className="rsvp-icon">
                <Clock3 size={32} />
              </div>

              <h3>Time</h3>
              <p>2:00 PM</p>
            </div>

            <div className="rsvp-info-card">
              <div className="rsvp-icon">
                <MapPin size={32} />
              </div>

              <h3>Location</h3>
              <p>Pasay City, Metro Manila</p>
            </div>
          </div>

          <div className="rsvp-message">
            <p>Please confirm your attendance by clicking the link below.</p>
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
              <span> August 23, 2026</span>
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
              <li>Kindly note that guests are by name invitation only.</li>
              <li>
                We kindly ask that phones and cameras be put away and not used.
              </li>
              <li>
                For the comfort and safety of all, we kindly request no pets and
                no children.
              </li>
              <li>
                Please take note to strictly follow the attire guide and color
                palette.
              </li>
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

              {isNotYetResponding || isNotAttending ? (
                <>
                  <p>
                    We are very excited to celebrate our wedding day with our
                    family and friends. Please let us know whether you'll be
                    able to join us by submitting your RSVP below.
                  </p>

                  <RsvpForm
                    guestInfo={guestInfo}
                    setGuestInfo={setGuestInfo}
                    onClose={() => setShowModal(false)}
                  />
                </>
              ) : (
                <p>
                  Thank you! Your RSVP has already been submitted. Your previous
                  response was: <strong>{guestInfo.attendance}</strong>.
                  <br />
                  <br />
                  If you need to update your RSVP, please contact Christine
                  Ramos or Ian Jimenez, and they will be happy to assist you.
                </p>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default RSVP;