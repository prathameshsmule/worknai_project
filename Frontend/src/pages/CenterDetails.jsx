import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const centersData = {
  maharashtra: {
    pune: {
      name: "Pune Centers",
      branches: [
        {
          id: "hinjewadi",
          name: "Hinjewadi Center",
          address:
            "Phase 1, Rajiv Gandhi Infotech Park, Hinjewadi, Pune, Maharashtra 411057",
          contact: "+91 9923400442",
          email: "pune.hinjewadi@worknai.com",
          courses: [
            "Artificial Intelligence (AI)",
            "Machine Learning (ML)",
            "Data Science",
            "Deep Learning (DL)",
            "Full Stack Web Development",
          ],
        },
        {
          id: "talawade",
          name: "Talawade Center",
          address: " Business Park, Talawade, Pune, Maharashtra 411062",
          contact: "+91 9988776655",
          email: "pune.talawade@worknai.com",
          courses: [
            "Artificial Intelligence (AI)",
            "Machine Learning (ML)",
            "Data Science",
            "Deep Learning (DL)",
            "Full Stack Web Development",
          ],
        },
        {
          id: "bhumkar",
          name: "Bhumkar Chowk Center",
          address:
            "Near Wakad Flyover, Bhumkar Chowk, Pune, Maharashtra 411057",
          contact: "+91 9876543210",
          email: "pune.bhumkar@worknai.com",
          courses: [
            "Artificial Intelligence (AI)",
            "Machine Learning (ML)",
            "Data Science",
            "Deep Learning (DL)",
            "Full Stack Web Development",
          ],
        },
      ],
    },
  },
};

const CenterDetails = () => {
  const { state, city, branch } = useParams();
  const navigate = useNavigate();
  const cityData = centersData[state]?.[city];

  if (!cityData) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        Center not found!
      </h2>
    );
  }

  // ✅ Specific branch page
  if (branch) {
    const branchData = cityData.branches.find((b) => b.id === branch);
    if (!branchData)
      return (
        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
          Branch not found!
        </h2>
      );

    return (
      <div
        style={{
          padding: "2rem",
          maxWidth: "700px",
          margin: "2rem auto",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        }}
      >
        <h2 style={{ color: "#007bff", marginBottom: "1rem" }}>
          {branchData.name}
        </h2>
        <p>
          <strong>Address:</strong> {branchData.address}
        </p>
        <p>
          <strong>Contact:</strong> {branchData.contact}
        </p>
        <p>
          <strong>Email:</strong> {branchData.email}
        </p>
        <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
          Courses Offered:
        </p>
        <ul style={{ marginTop: "0.5rem", lineHeight: "1.8" }}>
          {branchData.courses.map((course, i) => (
            <li key={i}>{course}</li>
          ))}
        </ul>

        {/* ✅ Back & Enroll Buttons */}
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Link
            to={`/centers/${state}/${city}`}
            style={{
              textDecoration: "none",
              background: "#007bff",
              color: "#fff",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
            }}
          >
            ← Back to {cityData.name}
          </Link>

          <button
            onClick={() => navigate("/enrollment")}
            style={{
              background: "#28a745",
              color: "#fff",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Enroll Now →
          </button>
        </div>
      </div>
    );
  }

  // ✅ City view — all branches list
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2 style={{ color: "#007bff" }}>{cityData.name}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {cityData.branches.map((branch) => (
          <div
            key={branch.id}
            style={{
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
              padding: "1.5rem",
              transition: "transform 0.2s ease",
            }}
          >
            <h3 style={{ color: "#333" }}>{branch.name}</h3>
            <p style={{ margin: "0.5rem 0" }}>{branch.address}</p>
            <p style={{ fontWeight: "bold" }}>📞 {branch.contact}</p>
            <Link
              to={`/centers/${state}/${city}/${branch.id}`}
              style={{
                display: "inline-block",
                marginTop: "1rem",
                background: "#007bff",
                color: "#fff",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
              }}
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenterDetails;
