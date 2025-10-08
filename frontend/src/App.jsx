import React from "react";
import { Routes, Route } from "react-router-dom";
import StemLanding from "./pages/StemLanding";
import Login from "./pages/Login";
import Classroom from "./pages/Classroom";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StemLanding />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/classroom"
        element={
          <ProtectedRoute>
            <Classroom />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<StemLanding />} />
    </Routes>
  );
}

