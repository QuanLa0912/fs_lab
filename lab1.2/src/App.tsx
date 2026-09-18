import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import EmployeeForm from "./components/employee-form/EmployeeForm";
import departmentData from "./data/employees.json";
import type { Department, Employee } from "./types/employee";
import "./App.css";

function App() {
  const [departments, setDepartments] = useState<Department[]>(departmentData);

  function handleAddEmployee(departmentName: string, employee: Employee) {
    setDepartments((current) =>
      current.map((department) =>
        department.name === departmentName
          ? { ...department, employees: [...department.employees, employee] }
          : department
      )
    );
  }

  return (
    <>
      <Header />
      <Main departments={departments} />
      <EmployeeForm 
        departmentNames={departments.map((department) => department.name)}
        onAddEmployee={handleAddEmployee}
      />
      <Footer />
    </>
  );
}

export default App;
