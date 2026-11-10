import type { Department, Employee } from "../types/employee";

type ApiResponse<T> = { status: string; data: T; message?: string };

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;

export const employeeRepo = {
    async getDepartments(): Promise<Department[]> {
        const res = await fetch(`${BASE_URL}/departments`);
        if (!res.ok) throw new Error("Failed to fetch departments");
        const json: ApiResponse<Department[]> = await res.json();
        return json.data;
    },

    async createEmployee(departmentName: string, employee: Employee): Promise<void> {
        const res = await fetch(`${BASE_URL}/employees`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ department: departmentName, ...employee }),
        });
        if (!res.ok) throw new Error("Failed to create employee");
    },
};

export default employeeRepo;