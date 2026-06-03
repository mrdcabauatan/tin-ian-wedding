import { useState } from "react";

function RsvpForm({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
          body: JSON.stringify(formData),
        }
      );

      alert("Thank you for your RSVP!");

      setFormData({
        firstName: "",
        lastName: "",
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
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

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