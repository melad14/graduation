import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Regester from './Components/Regester/Regester.jsx';
import Login from './Components/Login/Login';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import Account from './Components/Account/Account.jsx';
import { AuthContext } from './Context/AuthContext.jsx';
import MedicalData from './Components/MedicalData/MedicalData.jsx';
import About from './Components/About/About.jsx';
import Result from './Components/Result/Result.jsx';
import Doctor from './Components/Doctor/Doctor.jsx';
import PatientDiagnosis from './Components/PatientDiagnosis/PatientDiagnosis';
import ResultD from './Components/ResultD/ResultD.jsx';
import Patients from './Components/Patients/Patients.jsx';
import PatientDetails from './Components/PatientDetails/PatientDetails.jsx';
import DocMedicalData from './Components/DocMedicalData/DocMedicalData.jsx';
import DocAddDetection from './Components/DocAddDetection/DocAddDetection.jsx';
import Emergency from './Components/Emergency/Emergency.jsx';
import { ToastContainer } from 'react-toastify';




function App() {
  const { SaveUserData } = useContext(AuthContext);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      SaveUserData();
    }
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer theme='colored' />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="HeartProject" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="graduation" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path="about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="medicaldata" element={<ProtectedRoute><MedicalData /></ProtectedRoute>} />
          <Route path="detect" element={<ProtectedRoute><PatientDiagnosis /></ProtectedRoute>} />
          <Route path="result" element={<ProtectedRoute><Result /></ProtectedRoute>} />
          <Route path="resultD" element={<ProtectedRoute><ResultD /></ProtectedRoute>} />
          <Route path="doctor" element={<ProtectedRoute><Doctor /></ProtectedRoute>} />
          <Route path="patients" element={<ProtectedRoute><Patients /></ProtectedRoute>} />
          <Route path="patientDetails/:id" element={<ProtectedRoute><PatientDetails /></ProtectedRoute>} />
          <Route path="docAddData/:id" element={<ProtectedRoute><DocMedicalData /></ProtectedRoute>} />
          <Route path="docAddDetection/:id" element={<ProtectedRoute><DocAddDetection /></ProtectedRoute>} />
          <Route path="emergency" element={<ProtectedRoute><Emergency /></ProtectedRoute>} />
          <Route path="register" element={<Regester />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
