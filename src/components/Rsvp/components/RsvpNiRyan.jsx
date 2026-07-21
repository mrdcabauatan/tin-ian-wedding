import { useState, useEffect, useRef } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyAFVpGcWDb42UQkbLy0J_kBblqg3iyJP_BtOUvyUxiHJEGhvDPViAafMFH1LnQ33jK5w/exec";

function RsvpNiRyan({ onClose, guestInfo, setGuestInfo, isRsvpSubmitted, submitClick, setSubmitClick }) {
  const [formData, setFormData] = useState({
    churchAttendance: "",
    receptionAttendance: "",
    companions: guestInfo.companionNames?.length
      ? guestInfo.companionNames
      : Array.from({ length: Number(guestInfo.companion || 0) }, () => ""),
  });

  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);
  const buttonRef = useRef(null);

  const [buttonWidth, setButtonWidth] = useState(220);
  const [buttonPosition, setButtonPosition] = useState({
    left: null,
    top: null,
  });

  const [rotation, setRotation] = useState(0);

  const handleRadioButtonChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCompanionChange = (index, value) => {
    let sanitizedValue = value.replace(/[^A-Za-z\s]/g, "");

    sanitizedValue = sanitizedValue.replace(/\b\w/g, (char) =>
      char.toUpperCase(),
    );

    setFormData((prev) => {
      const companions = [...prev.companions];
      companions[index] = sanitizedValue;

      return {
        ...prev,
        companions,
      };
    });
  };

  const moveButton = (e) => {
    if (!formRef.current || !buttonRef.current || loading) return;

    if (e?.type === "touchstart") {
      e.preventDefault();
    }

    const form = formRef.current;
    const button = buttonRef.current;

    const padding = 20;

    const maxLeft = form.clientWidth - button.offsetWidth - padding;
    const maxTop = form.clientHeight - button.offsetHeight - padding;

    let left, top;

    do {
      left = Math.random() * maxLeft;

      const behavior = Math.random();

      if (behavior < 0.4) {
        // 40% chance - jump to the top
        top = Math.random() * 80;
      } else if (behavior < 0.8) {
        // 40% chance - jump to the bottom
        top = maxTop - Math.random() * 80;
      } else {
        // 20% chance - anywhere
        top = Math.random() * maxTop;
      }
    } while (
      buttonPosition.left !== null &&
      Math.abs(left - buttonPosition.left) < 120 &&
      Math.abs(top - buttonPosition.top) < 120
    );

    // Random width (60px - 220px)
    setButtonWidth(Math.floor(Math.random() * 161) + 60);

    setButtonPosition({ left, top });

    // Random accumulated rotation
    setRotation((prev) => prev + (Math.random() * 720 - 360));
  };

  const handleSubmit = () => {
    setSubmitClick(submitClick++);
  }

  useEffect(() => {
    setFormData({
      churchAttendance: "",
      receptionAttendance: "",
      companions: guestInfo.companionNames?.length
        ? [...guestInfo.companionNames]
        : Array.from({ length: Number(guestInfo.companion || 0) }, () => ""),
    });
  }, [guestInfo]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rsvp-form"
      style={{
        position: "relative",
        minHeight: "600px",
      }}
    >
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
                onChange={handleRadioButtonChange}
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
                onChange={handleRadioButtonChange}
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
                onChange={handleRadioButtonChange}
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
                onChange={handleRadioButtonChange}
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

      {Number(guestInfo.companion) > 0 && (
        <div className="attendance-group">
          <h3>
            Please enter the full name
            {Number(guestInfo.companion) > 1 ? "s" : ""} of your companion
            {Number(guestInfo.companion) > 1 ? "s" : ""}
          </h3>

          <div className="companion-inputs">
            {formData.companions.map((name, index) => (
              <div className="companion-field" key={index}>
                <label htmlFor={`companion-${index}`}>
                  Companion {index + 1}
                </label>

                <input
                  id={`companion-${index}`}
                  type="text"
                  value={name}
                  disabled={loading}
                  placeholder={`Enter first and last name`}
                  onChange={(e) => handleCompanionChange(index, e.target.value)}
                  required
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        ref={buttonRef}
        type="submit"
        className="submit-rsvp-btn"
        disabled={loading}
        onMouseEnter={moveButton}
        onTouchStart={moveButton}
        style={{
          position: "absolute",
          left:
            buttonPosition.left === null ? "50%" : `${buttonPosition.left}px`,
          top: buttonPosition.top === null ? "auto" : `${buttonPosition.top}px`,
          bottom: buttonPosition.top === null ? "20px" : "auto",

          width: `${buttonWidth}px`,

          transform:
            buttonPosition.left === null
              ? `translateX(-50%) rotate(${rotation}deg)`
              : `rotate(${rotation}deg)`,

          transition:
            "left .05s linear, top .05s linear, width .05s linear, transform .05s linear",

          zIndex: 999,
        }}
      >
        {loading ? "Submitting..." : "Submit RSVP"}
      </button>
    </form>
  );
}

export default RsvpNiRyan;
