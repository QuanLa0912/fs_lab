import { useState } from "react";
import EmployeeList from "../common/employee-list/EmployeeList";
import EmployeeForm from "../common/employee-form/EmployeeForm";
import departmentData from "../../data/employees";
import type { Department, Employee } from "../../types/employee";

export function EmployeesPage() {
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
            <EmployeeList departments={departments} />
            <EmployeeForm
                departmentNames={departments.map((department) => department.name)}
                onAddEmployee={handleAddEmployee}
            />
        </>
    );
}

export default EmployeesPage;
