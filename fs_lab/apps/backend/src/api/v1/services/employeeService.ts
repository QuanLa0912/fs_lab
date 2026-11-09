import { Department, Employee } from "../types/employee";
import employeeRepo from "../repositories/employeeRepo";
import { AppError } from "../error/errors";
import { HTTP_STATUS } from "../constants/httpConstant";

export const employeeService = {
    getDepartments(): Department[] {
        return employeeRepo.getDepartments();
    },

    createEmployee(departmentName: string, employee: Employee): Employee {
        const departmentExists = employeeRepo
            .getDepartments()
            .some((department) => department.name === departmentName);

        if (!departmentExists) {
            throw new AppError(
                `Department ${departmentName} does not exist`,
                "DEPARTMENT_NOT_FOUND",
                HTTP_STATUS.NOT_FOUND
            );
        }

        employeeRepo.createEmployee(departmentName, employee);
        return employee;
    },
};

export default employeeService;
