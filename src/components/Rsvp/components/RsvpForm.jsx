import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxD2QcVr3v0HxGujTUdw_-gquxde8jbeRbc6sSfWEcP8tR5tst2vOLAnFQTYdEEpLPZIQ/exec";

function RsvpForm({ onClose, guestInfo, setGuestInfo, isRsvpSubmitted }) {
  const [formData, setFormData] = useState({
    attendance: "",
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
      setLoading(true);

      const payload = new URLSearchParams();

      payload.append(
        "payload",
        JSON.stringify({
          firstName: guestInfo.firstName,
          lastName: guestInfo.lastName,
          attendance: formData.attendance,
        })
      );

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: payload,
      });

      // Update local guest state immediately
      setGuestInfo((prev) => ({
        ...prev,
        attendance: formData.attendance,
      }));

      alert("Thank you for your RSVP!");
      isRsvpSubmitted(true);

      setFormData({
        attendance: "",
      });

      onClose();
    } catch (error) {
      console.error(error);
      alert("Unable to submit RSVP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="rsvp-form" onSubmit={handleSubmit}>
      <div className="attendance-options">
        <label>
          <input
            type="radio"
            name="attendance"
            value="Attending"
            checked={formData.attendance === "Attending"}
            onChange={handleChange}
            required
          />
          Yes, I'll be there
        </label>

        <label>
          <input
            type="radio"
            name="attendance"
            value="Not Attending"
            checked={formData.attendance === "Not Attending"}
            onChange={handleChange}
          />
          Sorry, I can't make it
        </label>
      </div>

      <button
        type="submit"
        className="submit-rsvp-btn"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit RSVP"}
      </button>
    </form>
  );
}

export default RsvpForm;