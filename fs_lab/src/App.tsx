import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import EmployeesPage from "./components/pages/EmployeesPage";
import OrganizationPage from "./components/pages/OrganizationPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Navigate to="/employees" replace />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/organization" element={<OrganizationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
