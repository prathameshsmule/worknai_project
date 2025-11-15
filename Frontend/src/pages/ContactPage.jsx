import React, { useState } from "react";
import { Headphones, Mail, MapPin } from "lucide-react";
import { API_BASE } from "../components/api.jsx"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mappedData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch(`${API_BASE}/enquiry/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mappedData),
      });

      if (!response.ok) {
        const err = await response.json();
        alert("❌ Submission Failed: " + err.message);
        return;
      }

      alert("✅ Thank you! Your message was submitted successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Server not reachable. Check your internet or try again.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #e9d5f5 0%, #f0e5f8 100%)",
        padding: "60px 20px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <button
          style={{
            backgroundColor: "rgba(200, 150, 230, 0.4)",
            color: "#a855f7",
            padding: "12px 32px",
            borderRadius: "25px",
            border: "none",
            fontWeight: 600,
          }}
        >
          CONTACT US
        </button>
        <h1 style={{ fontSize: "64px", fontWeight: "800", color: "#1f2937" }}>
          WorknAi Softech
        </h1>
        <h2
          style={{
            fontSize: "64px",
            fontWeight: "800",
            color: "#1f2937",
          }}
        >
          Your Only Tech Upgrade Choice
        </h2>
      </div>

      {/* Contact Info */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <ContactCard
          icon={<Headphones size={48} color="#6366f1" />}
          title="Contact Phone Number"
          content={
            <>
              <p>+91 - 9923400442</p>
              <p>+91 - 9923400414</p>
            </>
          }
        />

        <ContactCard
          icon={<Mail size={48} color="#6366f1" />}
          title="Email Address"
          content={<p>worknai009@gmail.com</p>}
        />

        <ContactCard
          icon={<MapPin size={48} color="#6366f1" />}
          title="Head Office"
          content={
            <p>
              Unit 101, Oxford Towers, Airport Road, Bangalore, Karnataka 560008
            </p>
          }
        />
      </div>

      {/* Contact Form */}
      <div
        style={{
          maxWidth: "900px",
          margin: "100px auto 0",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            fontWeight: "800",
            color: "#1f2937",
            marginBottom: "40px",
          }}
        >
          Get a free course today by reaching out to us!
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "25px" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name*"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email*"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            autoComplete="off"
            value={formData.subject}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Message*"
            rows="4"
            autoComplete="off"
            value={formData.message}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              background: "linear-gradient(135deg, #a855f7, #7c3aed)",
              color: "white",
              padding: "18px 40px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
            }}
          >
            GET IT NOW →
          </button>
        </form>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, content }) => (
  <div
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      borderRadius: "20px",
      padding: "50px 40px",
    }}
  >
    {icon}
    <h3>{title}</h3>
    {content}
  </div>
);

const inputStyle = {
  border: "none",
  borderBottom: "2px solid #d1d5db",
  padding: "12px 0",
  fontSize: "16px",
  color: "#6b7280",
  backgroundColor: "transparent",
  outline: "none",
};

export default Contact;
