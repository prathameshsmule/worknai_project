import React, { useState } from "react";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    address: "",
  });

  const courses = [
    "Artificial Intelligence (AI)",
    "Machine Learning (ML)",
    "Data Science",
    "Deep Learning (DL)",
    "Full Stack Web Development",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ UPDATED handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/enquiry`, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Enrollment Successful!");
        console.log("Form Data Submitted:", data);
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          address: "",
        });
      } else {
        alert("❌ " + (data.message || "Submission failed"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f6fa",
  };

  const formStyle = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "400px",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#007bff",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#333",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#0056b3",
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={headingStyle}>Student Enrollment Form</h2>

        {/* Name */}
        <label style={labelStyle}>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* Email */}
        <label style={labelStyle}>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* Phone */}
        <label style={labelStyle}>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* Course */}
        <label style={labelStyle}>Select Course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">-- Select a Course --</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>

        {/* Address */}
        <label style={labelStyle}>Address</label>
        <textarea
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          rows="3"
          required
          style={{ ...inputStyle, resize: "none" }}
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          style={isHovered ? buttonHoverStyle : buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Enroll Now
        </button>
      </form>
    </div>
  );
};

export default EnrollmentForm;
