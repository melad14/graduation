import { createContext, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import { Navigate } from "react-router-dom";

export let AuthContext = createContext('')

export default function AuthContextProvider(props) {

  const BASE_URL_DOCTOR='https://heartdisease-five.vercel.app/api/Doctor'
  const BASE_URL_ACCOUNT='https://heartdisease-five.vercel.app/api/Account'
  const [userData, setUserData] = useState(null)

  function SaveUserData() {
    let encodedToken = localStorage.getItem("userToken")
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken)
   
  }


  function logOut() {
    localStorage.removeItem('userToken')
    setUserData(null)
    return <Navigate to='/login' />

  }


  return <AuthContext.Provider value={{ userData, setUserData, SaveUserData, logOut,BASE_URL_DOCTOR,BASE_URL_ACCOUNT }} >

    {props.children}
  </AuthContext.Provider>

}