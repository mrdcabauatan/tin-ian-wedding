import { useState } from "react";

function RsvpForm({ onClose, guestInfo }) {
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

      await fetch(
        "https://script.google.com/macros/s/AKfycbwbHhfUFm0E5JW9QtulkoYqtGF9QXsperFaFLJ_TcxnrwDbDmnBAfjnpsPRtlugA2oluQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: guestInfo.firstName,
            lastName: guestInfo.lastName,
            attendance: formData.attendance,
          }),
        }
      );

      alert("Thank you for your RSVP!");

      setFormData({
        attendance: "",
      });

      onClose();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
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