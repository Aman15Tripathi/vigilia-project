import React from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import AdminContextProvider, { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Appontment from "./pages/Admin/AllApointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorList from "./pages/Admin/DoctorList";
import { DoctorContext } from "./context/DoctorContext";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import DoctorProfile from "./pages/Doctor/DoctorProfile";

const AdminApp = () => {
  // const adminContext = useContext(AdminContext);
  // const atoken = adminContext?.atoken;
  // console.log("AdminApp atoken:", atoken, "adminContext:", adminContext);

  const {atoken} = useContext(AdminContext)
  const {dToken} = useContext(DoctorContext)

  return atoken || dToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />

        <Routes>
          {/* Admin Routes */}

          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/doctor-list" element={<DoctorList />} />
          <Route path="/all-appointments" element={<Appontment />} />
          <Route path="/add-doctor" element={<AddDoctor />} />

          {/* Doctor Routes */}
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor-appointments" element={<DoctorAppointments />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
        </Routes>

      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

const App = () => {
  return (
    <AdminContextProvider>
      <AdminApp />
    </AdminContextProvider>
  );
};

export default App;
