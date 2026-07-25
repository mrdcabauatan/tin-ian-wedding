import "./GiftRegistry.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function GiftRegistry({ guestInfo }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendWish = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      alert("Please enter your message.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: guestInfo.firstName + " " + guestInfo.lastName,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("Thank you for sending your wonderful wishes! ❤️");

      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Unable to send your message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="gift-section section-page" id="gift">
      <div className="gift-container section-container">
        <h2 className="gift-title section-title">Gift Registry</h2>

        <div className="gift-content">
          <h3 className="gift-heading">
            Your love and support mean the world to us.
          </h3>

          <p className="gift-description">
            Your presence at our wedding is truly the greatest gift we could
            receive. If you would like to honor us with a gift, a monetary
            blessing would be deeply appreciated as we begin our journey
            together. Every gift, prayer, and kind thought is sincerely
            appreciated.
            <br />
            Thank you for your love and support.
          </p>

          <div className="wish-card">
            <h3 className="wish-title">Leave a Wedding Wish</h3>

            <p className="wish-subtitle">
              We'd love to read your heartfelt message and blessings.
            </p>

            <form onSubmit={sendWish}>
              <textarea
                className="wish-textarea"
                placeholder="Write your message here..."
                value={message}
                maxLength={1000}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button className="wish-button" disabled={loading}>
                {loading ? "Sending..." : "💌 Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
