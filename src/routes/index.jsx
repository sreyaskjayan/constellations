import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import PublicRoute from "./publicRoute";
import LayoutWithSidebar from "./layoutWithSidebar";

import Home from "../app/home";
import Login from "../app/auth/login";
import Dashboard from "../app/dashboard";
import Devices from "../app/devices";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/" element={<ProtectedRoute><Navigate to="/home" replace /></ProtectedRoute>} />
        <Route element={<ProtectedRoute />}>
          <Route element={<LayoutWithSidebar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboards" element={<Dashboard />} />
            <Route path="/devices" element={<Devices />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
