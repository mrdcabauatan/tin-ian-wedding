import "./Rsvp.css";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { useState } from "react";
import RsvpForm from "./components/RsvpForm";

function RSVP() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="rsvp" className="rsvp-page">
      <div className="rsvp-container">
        <h1 className="rsvp-title">RSVP</h1>

        <div className="rsvp-info">
          <div className="rsvp-info-card">
            <div className="rsvp-icon">
              <CalendarDays size={32} />
            </div>
            <h3>Date</h3>
            <p>October 25, 2026</p>
          </div>

          <div className="rsvp-info-card">
            <div className="rsvp-icon">
              <Clock3 size={32} />
            </div>
            <h3>Time</h3>
            <p>3:00 PM</p>
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

        <button className="rsvp-button" onClick={() => setShowModal(true)}>
          RSVP Now
        </button>

        <div className="rsvp-deadline">
          <h4>
            RSVP Deadline:
            <span> October 1, 2026</span>
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

        {showModal && (
          <div
            className="rsvp-modal-overlay"
            onClick={() => setShowModal(false)}
          >
            <div className="rsvp-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                ×
              </button>

              <h2>
                We are very excited to celebrate our wedding day with our family
                and friends. Please let us know whether you'll be able to join
                us by submitting your RSVP below.
              </h2>

              <RsvpForm onSuccess={() => setShowModal(false)} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default RSVP;
