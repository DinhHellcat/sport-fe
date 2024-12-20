// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/View/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Confirm from "./components/Auth/Confirm";
import User from "./components/View/User";
import ChangePassword from "./components/Auth/ChangePassword";
import ProdDetail from "./components/View/ProdDetail";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import CreateProd from "./components/Admin/CreateProd";

import './style/Authstyle.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/user" element={<User />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/prod/:id" element={<ProdDetail />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/create-prod" element={<CreateProd />} />

      </Routes>
    </Router>
  );
}

export default App;
