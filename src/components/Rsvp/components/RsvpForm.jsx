import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyq8WmChAGi7z7YwDTUBmxjIrnDNsineYgztyigU_u0vazh0huSpWuUFsEDxM_WsimwAQ/exec";

function RsvpForm({ onClose, guestInfo, setGuestInfo, isRsvpSubmitted }) {
  const [formData, setFormData] = useState({
    churchAttendance: "",
    receptionAttendance: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedChurch =
        formData.churchAttendance || guestInfo.churchAttendance;

      const updatedReception =
        formData.receptionAttendance || guestInfo.receptionAttendance;

      setLoading(true);

      const payload = new URLSearchParams();

      payload.append(
        "payload",
        JSON.stringify({
          firstName: guestInfo.firstName,
          lastName: guestInfo.lastName,
          churchAttendance: updatedChurch,
          receptionAttendance: updatedReception,
          companion: guestInfo.companion,
        }),
      );

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: payload,
      });

      setGuestInfo((prev) => ({
        ...prev,
        churchAttendance: formData.churchAttendance || prev.churchAttendance,
        receptionAttendance:
          formData.receptionAttendance || prev.receptionAttendance,
      }));

      alert("Thank you for your RSVP!");

      isRsvpSubmitted(true);

      setFormData({
        churchAttendance: "",
        receptionAttendance: "",
      });

      onClose();
    } catch (error) {
      alert("Unable to submit RSVP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="rsvp-form" onSubmit={handleSubmit}>
      {guestInfo.churchAttendance !== "Attending" ? (
        <div className="attendance-group">
          <h3>Church Ceremony</h3>
          <div className="attendance-options">
            <label>
              <input
                type="radio"
                name="churchAttendance"
                value="Attending"
                checked={formData.churchAttendance === "Attending"}
                onChange={handleChange}
                disabled={loading}
                required
              />
              Yes, I'll attend
            </label>
            <label>
              <input
                type="radio"
                name="churchAttendance"
                value="Not Attending"
                checked={formData.churchAttendance === "Not Attending"}
                disabled={loading}
                onChange={handleChange}
              />
              Sorry, I can't make it
            </label>
          </div>
        </div>
      ) : (
        <p>
          You have already submitted your church attendance RSVP. Your previous
          response was: {guestInfo.churchAttendance}
        </p>
      )}

      {guestInfo.receptionAttendance !== "Attending" ? (
        <div className="attendance-group">
          <h3>Reception</h3>

          <div className="attendance-options">
            <label>
              <input
                type="radio"
                name="receptionAttendance"
                value="Attending"
                checked={formData.receptionAttendance === "Attending"}
                onChange={handleChange}
                disabled={loading}
                required
              />
              Yes, I'll attend
            </label>

            <label>
              <input
                type="radio"
                name="receptionAttendance"
                value="Not Attending"
                checked={formData.receptionAttendance === "Not Attending"}
                onChange={handleChange}
                disabled={loading}
              />
              Sorry, I can't make it
            </label>
          </div>
        </div>
      ) : (
        <p>
          You have already submitted your reception attendance RSVP. Your
          previous response was: {guestInfo.receptionAttendance}
        </p>
      )}

      <button type="submit" className="submit-rsvp-btn" disabled={loading}>
        {loading ? "Submitting..." : "Submit RSVP"}
      </button>
    </form>
  );
}

export default RsvpForm;
