import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home-Page/Home';
import Login from './Components/Login/Login';
import Option from './Components/Registeration-Options/Option';
import DoctorForm from './Components/RegistrationForms/DoctorForms/DoctorForm';
import PatientForm from './Components/RegistrationForms/PatientForm/PatientForm';
import PharmacyForm from './Components/RegistrationForms/PharmacyForm/PharmacyForm';
function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route element={<Home/>} path="/" />
    <Route element={<Login/>} path="/login" />
    <Route element={<Option/>} path="/Option" />
    <Route element={<DoctorForm/>} path="/doctorform" />
    <Route element={<PatientForm/>} path="/patientform" />
    <Route element={<PharmacyForm/>} path="/pharmacyform" />
    </Routes>
    </BrowserRouter>
      

  );
}

export default App;
