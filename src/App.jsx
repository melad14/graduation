import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Regester from './Components/Regester/Regester.jsx';
import Login from './Components/Login/Login';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import Account from './Components/Account/Account.jsx';
import { useContext, useEffect } from 'react';
import { AuthContext } from './Context/AuthContext.jsx';
import MedicalData from './Components/MedicalData/MedicalData.jsx';
import About from './Components/Home/About/About';
import Result from './Components/Result/Result.jsx';
import Doctor from './Components/Doctor/Doctor.jsx';

function App() {
  let {SaveUserData}=useContext(AuthContext)
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      SaveUserData()
    }
  },[])
  return <>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<ProtectedRoute ><Home /></ProtectedRoute>}/> 
    <Route path="HeartProject" element={<ProtectedRoute ><Home /></ProtectedRoute>}/> 
    <Route path='account' element={<ProtectedRoute ><Account /></ProtectedRoute>}/> 
    <Route path='about' element={<ProtectedRoute ><About /></ProtectedRoute>}/> 
    <Route path='medicaldata' element={<ProtectedRoute ><MedicalData /></ProtectedRoute>}/> 
    <Route path='result' element={<ProtectedRoute ><Result /></ProtectedRoute>}/> 
    <Route path='doctor' element={<ProtectedRoute ><Doctor /></ProtectedRoute>}/> 
    <Route path='register' element={<Regester/>}/> 
    <Route path='login' element={<Login/>}/> 
    </Route>

  </Routes>
  </BrowserRouter>
  </>
}

export default App;
