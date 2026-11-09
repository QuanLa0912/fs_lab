import employeeRepo from "../repositories/employeeRepo";
import type { Department, Employee } from "../types/employee";

export const employeeService = {
    getDepartments(): Department[] {
        return employeeRepo.getDepartments()
    },

    validateFirstName(firstName: string): string {
        if(firstName.trim().length < 3) {
            return "First name must be at least 3 characters";
        }
        return "";
    },

    createEmployee(departmentName: string, employee: Employee){
        employeeRepo.createEmployee(departmentName, employee)
    }
}

export default employeeService;