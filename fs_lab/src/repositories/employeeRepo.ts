import Departments from "../apis/employeesData";
import type { Department, Employee } from "../types/employee";

let departments: Department[] = structuredClone(Departments);

export const employeeRepo = {
    getDepartments(): Department[] {
        return departments;
    },

    createEmployee(departmentName: string, employee: Employee): void {
        departments = departments.map((department) =>
            department.name === departmentName
                ? { ...department, employees: [...department.employees, employee] }
                : department
        );
    },
};

export default employeeRepo;
