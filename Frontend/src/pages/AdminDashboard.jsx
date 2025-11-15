// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { API_BASE } from "../components/api.js";

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [newEnquiry, setNewEnquiry] = useState({
    name: "",
    email: "",
    contactNo: "",
    address: "",
    course: "",
  });

  // Editing states
  const [editingEnquiry, setEditingEnquiry] = useState(null);
  const [editingAdmin, setEditingAdmin] = useState(null);

  // Modal visibility
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);

  // view control
  const [activeSection, setActiveSection] = useState("student");

  // pagination & search
  const [searchQuery, setSearchQuery] = useState("");
  const [currentStudentPage, setCurrentStudentPage] = useState(1);
  const [currentContactPage, setCurrentContactPage] = useState(1);
  const itemsPerPage = 5;

  const token = localStorage.getItem("adminToken");

  /* -------------------- Fetch Enquiries -------------------- */
  const fetchEnquiries = async () => {
    try {
      const res = await fetch(`${API_BASE}/enquiry`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      setEnquiries(data.items || []);
    } catch (err) {
      console.error("Error fetching enquiries:", err);
    }
  };

  /* -------------------- Fetch Admins -------------------- */
  const fetchAdmins = async () => {
    try {
      const res = await fetch(`${API_BASE}/admin/admins`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      setAdmins(data.admins || []);
    } catch (err) {
      console.error("Error fetching admins:", err);
    }
  };

  // initial fetch
  useEffect(() => {
    fetchEnquiries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // fetch when active section changes (viewAdmins)
  useEffect(() => {
    if (activeSection === "viewAdmins") fetchAdmins();
    if (activeSection === "student" || activeSection === "contact") {
      fetchEnquiries();
    }
    // reset search & pages when switching sections
    setSearchQuery("");
    setCurrentStudentPage(1);
    setCurrentContactPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  /* -------------------- CRUD Operations -------------------- */
  const handleCreateEnquiry = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEnquiry),
      });
      if (res.ok) {
        alert("✅ Student Enquiry Added Successfully!");
        setNewEnquiry({
          name: "",
          email: "",
          contactNo: "",
          address: "",
          course: "",
        });
        fetchEnquiries();
      } else {
        const err = await res.json();
        alert("❌ " + (err.message || "Failed to add enquiry"));
      }
    } catch (error) {
      console.error("Error creating enquiry:", error);
      alert("⚠️ Error creating enquiry. Check console.");
    }
  };

  const handleDeleteEnquiry = async (id) => {
    if (!window.confirm("Are you sure to delete this enquiry?")) return;
    try {
      const res = await fetch(`${API_BASE}/enquiry/${id}`, {
        method: "DELETE",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      if (!res.ok) {
        const err = await res.json();
        alert("❌ " + (err.message || "Failed to delete"));
        return;
      }
      setEnquiries((prev) => prev.filter((e) => e._id !== id));
    } catch (err) {
      console.error(err);
      alert("⚠️ Error deleting enquiry. Check console.");
    }
  };

  const handleUpdateEnquiry = async () => {
    if (!editingEnquiry) return;
    try {
      const res = await fetch(`${API_BASE}/enquiry/${editingEnquiry._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(editingEnquiry),
      });
      if (res.ok) {
        alert("✅ Enquiry updated successfully!");
        setShowEnquiryModal(false);
        setEditingEnquiry(null);
        fetchEnquiries();
      } else {
        const err = await res.json();
        alert("❌ " + (err.message || "Failed to update"));
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Error updating enquiry. Check console.");
    }
  };

  const handleAdminCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/admin/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ ...newAdmin, role: "admin" }),
      });
      if (res.ok) {
        alert("✅ New Admin Created");
        setNewAdmin({ name: "", email: "", phone: "", password: "" });
        fetchAdmins();
        setActiveSection("viewAdmins");
      } else {
        const err = await res.json();
        alert("❌ " + (err.message || "Failed to create admin"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Error creating admin. Check console.");
    }
  };

  const handleUpdateAdmin = async () => {
    if (!editingAdmin) return;
    try {
      const res = await fetch(`${API_BASE}/admin/admin/${editingAdmin._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(editingAdmin),
      });
      if (res.ok) {
        alert("✅ Admin updated successfully");
        setShowAdminModal(false);
        setEditingAdmin(null);
        fetchAdmins();
      } else {
        const err = await res.json();
        alert("❌ " + (err.message || "Failed to update admin"));
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Error updating admin. Check console.");
    }
  };

  const handleDeleteAdmin = async (id) => {
    if (!window.confirm("Are you sure to delete this admin?")) return;
    try {
      const res = await fetch(`${API_BASE}/admin/admin/${id}`, {
        method: "DELETE",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      if (!res.ok) {
        const err = await res.json();
        alert("❌ " + (err.message || "Failed to delete admin"));
        return;
      }
      setAdmins((prev) => prev.filter((a) => a._id !== id));
    } catch (err) {
      console.error(err);
      alert("⚠️ Error deleting admin. Check console.");
    }
  };

  /* -------------------- Filter + Pagination -------------------- */
  const contactEnquiries = enquiries.filter((e) => e.enquiryType === "Contact");
  const studentEnquiries = enquiries.filter(
    (e) => !e.enquiryType || e.enquiryType === "Student"
  );

  const q = searchQuery.trim().toLowerCase();
  const filteredStudents = studentEnquiries.filter((e) =>
    q
      ? (e.name || "").toLowerCase().includes(q) ||
        (e.email || "").toLowerCase().includes(q) ||
        (e.contactNo || "").toLowerCase().includes(q) ||
        (e.course || "").toLowerCase().includes(q)
      : true
  );

  const filteredContacts = contactEnquiries.filter((e) =>
    q
      ? (e.name || "").toLowerCase().includes(q) ||
        (e.email || "").toLowerCase().includes(q) ||
        (e.contactNo || "").toLowerCase().includes(q) ||
        (e.course || "").toLowerCase().includes(q)
      : true
  );

  const totalStudentPages = Math.max(
    1,
    Math.ceil(filteredStudents.length / itemsPerPage)
  );
  const totalContactPages = Math.max(
    1,
    Math.ceil(filteredContacts.length / itemsPerPage)
  );

  const displayedStudents = filteredStudents.slice(
    (currentStudentPage - 1) * itemsPerPage,
    currentStudentPage * itemsPerPage
  );
  const displayedContacts = filteredContacts.slice(
    (currentContactPage - 1) * itemsPerPage,
    currentContactPage * itemsPerPage
  );

  /* Helper to open enquiry modal */
  const openEnquiryModal = (enquiry) => {
    setEditingEnquiry({ ...enquiry });
    setShowEnquiryModal(true);
  };

  /* Helper to open admin modal */
  const openAdminModal = (admin) => {
    setEditingAdmin({ ...admin });
    setShowAdminModal(true);
  };

  return (
    <div
      style={{
        padding: "28px",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "18px", color: "#333" }}>
        🧑‍🎓 Admin Dashboard
      </h1>

      {/* Buttons */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {[
          { key: "student", label: "🎓 Student Enquiries", color: "#007bff" },
          {
            key: "contact",
            label: "💬 Contact Form Enquiries",
            color: "#28a745",
          },
          { key: "addAdmin", label: "➕ Add Admin", color: "#17a2b8" },
          { key: "viewAdmins", label: "👥 View Admins", color: "#6f42c1" },
        ].map((b) => (
          <button
            key={b.key}
            onClick={() => setActiveSection(b.key)}
            style={{
              marginRight: 10,
              backgroundColor: activeSection === b.key ? b.color : "#e9ecef",
              color: activeSection === b.key ? "white" : "black",
              padding: "9px 16px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
            }}
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* Search */}
      {(activeSection === "student" || activeSection === "contact") && (
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentStudentPage(1);
              setCurrentContactPage(1);
            }}
            placeholder="🔍 Search by name, email, phone, or course..."
            style={{
              width: "62%",
              padding: "10px",
              borderRadius: 6,
              border: "1px solid #ccc",
            }}
          />
        </div>
      )}

      {/* Student Section */}
      {activeSection === "student" && (
        <div
          style={{
            background: "#fff",
            padding: 18,
            borderRadius: 8,
            boxShadow: "0 0 10px rgba(0,0,0,0.05)",
            marginBottom: 18,
          }}
        >
          <h3>🎓 Student Enquiries</h3>

          <table
            style={{ width: "100%", borderCollapse: "collapse", marginTop: 8 }}
          >
            <thead>
              <tr style={{ backgroundColor: "#007bff", color: "white" }}>
                <th style={{ padding: 10 }}>Name</th>
                <th style={{ padding: 10 }}>Email</th>
                <th style={{ padding: 10 }}>Phone</th>
                <th style={{ padding: 10 }}>Course</th>
                <th style={{ padding: 10 }}>Status</th>
                <th style={{ padding: 10 }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedStudents.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: 12 }}>
                    No enquiries found.
                  </td>
                </tr>
              ) : (
                displayedStudents.map((e) => (
                  <tr key={e._id}>
                    <td style={{ padding: 8 }}>{e.name}</td>
                    <td style={{ padding: 8 }}>{e.email}</td>
                    <td style={{ padding: 8 }}>{e.contactNo}</td>
                    <td style={{ padding: 8 }}>{e.course}</td>
                    <td style={{ padding: 8 }}>{e.status || "Pending"}</td>
                    <td style={{ padding: 8 }}>
                      <button
                        onClick={() => openEnquiryModal(e)}
                        style={{
                          backgroundColor: "#ffc107",
                          border: "none",
                          padding: "6px 10px",
                          borderRadius: 5,
                          marginRight: 6,
                          cursor: "pointer",
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteEnquiry(e._id)}
                        style={{
                          backgroundColor: "#dc3545",
                          border: "none",
                          color: "white",
                          padding: "6px 10px",
                          borderRadius: 5,
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* pagination */}
          <div style={{ textAlign: "center", marginTop: 12 }}>
            {Array.from({ length: totalStudentPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentStudentPage(i + 1)}
                style={{
                  margin: "0 6px",
                  padding: "6px 10px",
                  borderRadius: 6,
                  border: "none",
                  backgroundColor:
                    currentStudentPage === i + 1 ? "#007bff" : "#e9ecef",
                  color: currentStudentPage === i + 1 ? "white" : "black",
                  cursor: "pointer",
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Add Enquiry form */}
          <hr style={{ margin: "16px 0" }} />
          <h4 style={{ marginTop: 6 }}>➕ Add Student Enquiry</h4>
          <form onSubmit={handleCreateEnquiry} style={{ marginTop: 8 }}>
            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 8,
                flexWrap: "wrap",
              }}
            >
              <input
                placeholder="Name"
                value={newEnquiry.name}
                onChange={(e) =>
                  setNewEnquiry({ ...newEnquiry, name: e.target.value })
                }
                required
                style={{ padding: 10, flex: "1 1 200px" }}
              />
              <input
                placeholder="Email"
                value={newEnquiry.email}
                onChange={(e) =>
                  setNewEnquiry({ ...newEnquiry, email: e.target.value })
                }
                required
                style={{ padding: 10, flex: "1 1 200px" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 8,
                flexWrap: "wrap",
              }}
            >
              <input
                placeholder="Phone"
                value={newEnquiry.contactNo}
                onChange={(e) =>
                  setNewEnquiry({ ...newEnquiry, contactNo: e.target.value })
                }
                required
                style={{ padding: 10, flex: "1 1 200px" }}
              />
              <input
                placeholder="Course"
                value={newEnquiry.course}
                onChange={(e) =>
                  setNewEnquiry({ ...newEnquiry, course: e.target.value })
                }
                required
                style={{ padding: 10, flex: "1 1 200px" }}
              />
            </div>

            <textarea
              placeholder="Address"
              value={newEnquiry.address}
              onChange={(e) =>
                setNewEnquiry({ ...newEnquiry, address: e.target.value })
              }
              style={{
                padding: 10,
                width: "100%",
                height: 60,
                marginBottom: 8,
              }}
            />
            <div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                ➕ Add Enquiry
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <div
          style={{
            background: "#fff",
            padding: 18,
            borderRadius: 8,
            boxShadow: "0 0 10px rgba(0,0,0,0.05)",
            marginBottom: 18,
          }}
        >
          <h3>💬 Contact Form Enquiries</h3>

          <table
            style={{ width: "100%", borderCollapse: "collapse", marginTop: 8 }}
          >
            <thead>
              <tr style={{ backgroundColor: "#28a745", color: "white" }}>
                <th style={{ padding: 10 }}>Name</th>
                <th style={{ padding: 10 }}>Email</th>
                <th style={{ padding: 10 }}>Phone</th>
                <th style={{ padding: 10 }}>Subject</th>
                <th style={{ padding: 10 }}>Message</th>
                <th style={{ padding: 10 }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {displayedContacts.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: 12 }}>
                    No contact enquiries yet.
                  </td>
                </tr>
              ) : (
                displayedContacts.map((e) => (
                  <tr key={e._id}>
                    <td style={{ padding: 8 }}>{e.name}</td>
                    <td style={{ padding: 8 }}>{e.email}</td>
                    <td style={{ padding: 8 }}>{e.contactNo}</td>
                    <td style={{ padding: 8 }}>{e.course}</td>
                    <td style={{ padding: 8 }}>{e.address}</td>
                    <td style={{ padding: 8 }}>{e.status || "Pending"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div style={{ textAlign: "center", marginTop: 12 }}>
            {Array.from({ length: totalContactPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentContactPage(i + 1)}
                style={{
                  margin: "0 6px",
                  padding: "6px 10px",
                  borderRadius: 6,
                  border: "none",
                  backgroundColor:
                    currentContactPage === i + 1 ? "#28a745" : "#e9ecef",
                  color: currentContactPage === i + 1 ? "white" : "black",
                  cursor: "pointer",
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Add Admin */}
      {activeSection === "addAdmin" && (
        <div
          style={{
            background: "#fff",
            padding: 18,
            borderRadius: 8,
            boxShadow: "0 0 10px rgba(0,0,0,0.05)",
            marginBottom: 18,
          }}
        >
          <h3>➕ Add New Admin</h3>
          <form onSubmit={handleAdminCreate} style={{ marginTop: 8 }}>
            <input
              placeholder="Name"
              value={newAdmin.name}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, name: e.target.value })
              }
              required
              style={{ padding: 10, width: "100%", marginBottom: 8 }}
            />
            <input
              placeholder="Email"
              value={newAdmin.email}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, email: e.target.value })
              }
              required
              style={{ padding: 10, width: "100%", marginBottom: 8 }}
            />
            <input
              placeholder="Phone"
              value={newAdmin.phone}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, phone: e.target.value })
              }
              required
              style={{ padding: 10, width: "100%", marginBottom: 8 }}
            />
            <input
              placeholder="Password"
              type="password"
              value={newAdmin.password}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, password: e.target.value })
              }
              required
              style={{ padding: 10, width: "100%", marginBottom: 8 }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "8px 14px",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              ➕ Create Admin
            </button>
          </form>
        </div>
      )}

      {/* View Admins */}
      {activeSection === "viewAdmins" && (
        <div
          style={{
            background: "#fff",
            padding: 18,
            borderRadius: 8,
            boxShadow: "0 0 10px rgba(0,0,0,0.05)",
            marginBottom: 18,
          }}
        >
          <h3>👥 Existing Admins</h3>
          {admins.length === 0 ? (
            <p>No admins found.</p>
          ) : (
            admins.map((a) => (
              <div
                key={a._id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 8,
                  borderBottom: "1px solid #eee",
                }}
              >
                <div>
                  👤 <strong>{a.name}</strong> — {a.email} ({a.phone})
                </div>
                <div>
                  <button
                    onClick={() => openAdminModal(a)}
                    style={{
                      marginRight: 6,
                      backgroundColor: "#ffc107",
                      border: "none",
                      padding: "6px 10px",
                      borderRadius: 5,
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteAdmin(a._id)}
                    style={{
                      backgroundColor: "#dc3545",
                      border: "none",
                      color: "white",
                      padding: "6px 10px",
                      borderRadius: 5,
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* ================= MODALS ================= */}

      {/* Enquiry Edit Modal */}
      {showEnquiryModal && editingEnquiry && (
        <div
          onClick={() => {
            setShowEnquiryModal(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 420,
              background: "#fff",
              padding: 18,
              borderRadius: 8,
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>✏️ Edit Student Enquiry</h3>

            <input
              value={editingEnquiry.name || ""}
              onChange={(e) =>
                setEditingEnquiry({ ...editingEnquiry, name: e.target.value })
              }
              style={{ width: "100%", padding: 10, marginBottom: 8 }}
            />
            <input
              value={editingEnquiry.email || ""}
              onChange={(e) =>
                setEditingEnquiry({ ...editingEnquiry, email: e.target.value })
              }
              style={{ width: "100%", padding: 10, marginBottom: 8 }}
            />
            <input
              value={editingEnquiry.contactNo || ""}
              onChange={(e) =>
                setEditingEnquiry({
                  ...editingEnquiry,
                  contactNo: e.target.value,
                })
              }
              style={{ width: "100%", padding: 10, marginBottom: 8 }}
            />
            <input
              value={editingEnquiry.course || ""}
              onChange={(e) =>
                setEditingEnquiry({ ...editingEnquiry, course: e.target.value })
              }
              style={{ width: "100%", padding: 10, marginBottom: 8 }}
            />
            <textarea
              value={editingEnquiry.address || ""}
              onChange={(e) =>
                setEditingEnquiry({
                  ...editingEnquiry,
                  address: e.target.value,
                })
              }
              rows={3}
              style={{ width: "100%", padding: 10, marginBottom: 8 }}
            />
            <select
              value={editingEnquiry.status || "Pending"}
              onChange={(e) =>
                setEditingEnquiry({ ...editingEnquiry, status: e.target.value })
              }
              style={{ width: "100%", padding: 10, marginBottom: 12 }}
            >
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
            </select>

            <div style={{ textAlign: "right" }}>
              <button
                onClick={handleUpdateEnquiry}
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: 6,
                  marginRight: 8,
                  cursor: "pointer",
                }}
              >
                Save
              </button>
              <button
                onClick={() => {
                  setShowEnquiryModal(false);
                  setEditingEnquiry(null);
                }}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Edit Modal */}
      {showAdminModal && editingAdmin && (
        <div
          onClick={() => {
            setShowAdminModal(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 420,
              background: "#fff",
              padding: 18,
              borderRadius: 8,
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>✏️ Edit Admin</h3>

            <input
              value={editingAdmin.name || ""}
              onChange={(e) =>
                setEditingAdmin({ ...editingAdmin, name: e.target.value })
              }
              style={{ width: "100%", padding: 10, marginBottom: 8 }}
            />
            <input
              value={editingAdmin.email || ""}
              onChange={(e) =>
                setEditingAdmin({ ...editingAdmin, email: e.target.value })
              }
              style={{ width: "100%", padding: 10, marginBottom: 8 }}
            />
            <input
              value={editingAdmin.phone || ""}
              onChange={(e) =>
                setEditingAdmin({ ...editingAdmin, phone: e.target.value })
              }
              style={{ width: "100%", padding: 10, marginBottom: 12 }}
            />

            <div style={{ textAlign: "right" }}>
              <button
                onClick={handleUpdateAdmin}
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: 6,
                  marginRight: 8,
                  cursor: "pointer",
                }}
              >
                Save
              </button>
              <button
                onClick={() => {
                  setShowAdminModal(false);
                  setEditingAdmin(null);
                }}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
