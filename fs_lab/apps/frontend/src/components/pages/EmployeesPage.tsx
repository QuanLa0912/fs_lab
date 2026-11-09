import { useState } from "react";
import EmployeeList from "../common/employee-list/EmployeeList";
import EmployeeForm from "../common/employee-form/EmployeeForm";
import employeeService from "../../services/employeeService";

export function EmployeesPage() {
    const [departments, setDepartments] = useState(() => employeeService.getDepartments());

    function handleEmployeeAdded() {
        setDepartments(employeeService.getDepartments());
    }

    return (
        <>
            <EmployeeList departments={departments} />
            <EmployeeForm
                departmentNames={departments.map((department) => department.name)}
                onEmployeeAdded={handleEmployeeAdded}
            />
        </>
    );
}

export default EmployeesPage;
