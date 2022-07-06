import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/pages/Home";
import Calculators from "./components/pages/Calculators";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Account from "./components/pages/Account";
import NoSuchPage from "./components/pages/NoSuchPage";
import { AuthContextProvider } from './AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Plan from "./components/Plan";
import Lumpsum from "./components/Lumpsum";
import SIPCalculator from "./components/SIPCalculator";
import EMICalculator from "./components/EMICalculator";
import PPFCalculator from "./components/PPFCalculator";
import CAGRCalculator from "./components/CAGRCalculator";
import GoalPlanning from "./components/GoalPlanning";


function App() {
  return (
    <AuthContextProvider>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/account" element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
          <Route path="/account" element={
            <ProtectedRoute>
              <Plan />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NoSuchPage />} />
          <Route path="/lumpsumCalculator" element={<Lumpsum/>}/>
          <Route path="/SIPCalculator" element={<SIPCalculator/>}/>
          <Route path="/EMICalculator" element={<EMICalculator/>}/>
          <Route path="/PPFCalculator"  element={<PPFCalculator/>}/>
          <Route path="/CAGRCalculator"  element={<CAGRCalculator/>}/>
          <Route path="/GoalPlanning"  element={<GoalPlanning/>}/>
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
