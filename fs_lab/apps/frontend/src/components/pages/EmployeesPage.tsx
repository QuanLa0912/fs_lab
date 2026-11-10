import { useEffect, useState } from "react";
import EmployeeList from "../common/employee-list/EmployeeList";
import EmployeeForm from "../common/employee-form/EmployeeForm";
import employeeService from "../../services/employeeService";
import type { Department } from "../../types/employee";

export function EmployeesPage() {
    const [departments, setDepartments] = useState<Department[]>([]);

    function loadDepartments() {
        employeeService.getDepartments().then(setDepartments).catch(console.error);
    }

    useEffect(loadDepartments, []);

    return (
        <>
            <EmployeeList departments={departments} />
            {departments.length > 0 && (
                <EmployeeForm
                    departmentNames={departments.map((department) => department.name)}
                    onEmployeeAdded={loadDepartments}
                />
            )}
        </>
    );
}

export default EmployeesPage;
