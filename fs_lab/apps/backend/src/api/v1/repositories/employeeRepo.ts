import prisma from "../../../../prisma/client";
import type { Employee } from "../types/employee";

export const employeeRepo = {
    getDepartments() {
        return prisma.department.findMany({
            include: { employees: true },
            orderBy: { name: "asc" },
        });
    },
    findDepartmentByName(name: string) {
        return prisma.department.findUnique({ where: { name } });
    },
    createEmployee(departmentId: number, employee: Employee) {
        return prisma.employee.create({
            data: {
                firstName: employee.firstName,
                lastName: employee.lastName,
                departmentId,
            },
        });
    },
};

export default employeeRepo;
