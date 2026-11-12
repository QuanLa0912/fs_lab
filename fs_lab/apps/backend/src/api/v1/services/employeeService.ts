import { Employee } from "../types/employee";
import employeeRepo from "../repositories/employeeRepo";
import { AppError } from "../error/errors";
import { HTTP_STATUS } from "../constants/httpConstant";

export const employeeService = {
    async getDepartments() {
        return employeeRepo.getDepartments();
    },

    async createEmployee(departmentName: string, employee: Employee) {
        const department = await employeeRepo.findDepartmentByName(departmentName);

        if (!department) {
            throw new AppError(
                `Department ${departmentName} does not exist`,
                "DEPARTMENT_NOT_FOUND",
                HTTP_STATUS.NOT_FOUND
            );
        }

        return employeeRepo.createEmployee(department.id, employee);
    },
};

export default employeeService;
