import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar.jsx";
import Footer from "./pages/footer.jsx";
import ScrollToTop from "./pages/ScrollToTop.js";

import Home from "./pages/Home.jsx";
import CompanyPage from "./pages/CompanyPage.jsx";
import TechnicalSupport from "./pages/TechnicalPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/ContactPage.jsx";
import JobOpenings from "./pages/JobPage.jsx";

import DotNetLanding from "./pages/DotNetPage.jsx";
import JavaDev from "./pages/JavaPage.jsx";
import PythonDev from "./pages/Python.jsx";
import MernPage from "./pages/MernPage.jsx";
import SqlPage from "./pages/SqlPage.jsx";
import DataAnalyst from "./pages/DataAnalyst.jsx";
import DataEng from "./pages/DataEng.jsx";
import DataScience from "./pages/DataScience.jsx";
import AiPage from "./pages/AiPage.jsx";
import AwsPage from "./pages/AwsPage.jsx";
import AzurePage from "./pages/AzurePage.jsx";
import ManualT from "./pages/ManualT.jsx";
import DevOps from "./pages/Devops.jsx";
import Automation from "./pages/Automation.jsx";
import SapM from "./pages/SapMM.jsx";
import SapFico from "./pages/SapFico.jsx";
import SapPP from "./pages/SapPP.jsx";

import EnrollmentForm from "./pages/EnrollmentForm";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

// ✅ Import your CenterDetails page
import CenterDetails from "./pages/CenterDetails.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* General Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/CompanyPage" element={<CompanyPage />} />
        <Route path="/TechnicalPage" element={<TechnicalSupport />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactPage" element={<Contact />} />
        <Route path="/JobPage" element={<JobOpenings />} />

        {/* 🔹 Add these Center Routes */}
        <Route path="/centers/:state/:city" element={<CenterDetails />} />
        <Route
          path="/centers/:state/:city/:branch"
          element={<CenterDetails />}
        />

        {/* Courses */}
        <Route path="/DotNetPage" element={<DotNetLanding />} />
        <Route path="/JavaPage" element={<JavaDev />} />
        <Route path="/PythonPage" element={<PythonDev />} />
        <Route path="/MernPage" element={<MernPage />} />
        <Route path="/SqlPage" element={<SqlPage />} />
        <Route path="/DataAnalyst" element={<DataAnalyst />} />
        <Route path="/DataEng" element={<DataEng />} />
        <Route path="/DataScience" element={<DataScience />} />
        <Route path="/AiPage" element={<AiPage />} />
        <Route path="/AwsPage" element={<AwsPage />} />
        <Route path="/AzurePage" element={<AzurePage />} />
        <Route path="/ManualT" element={<ManualT />} />
        <Route path="/Devops" element={<DevOps />} />
        <Route path="/Automation" element={<Automation />} />
        <Route path="/SapFico" element={<SapFico />} />
        <Route path="/SapMM" element={<SapM />} />
        <Route path="/SapPP" element={<SapPP />} />

        {/* Forms & Admin */}
        <Route path="/enrollment" element={<EnrollmentForm />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
