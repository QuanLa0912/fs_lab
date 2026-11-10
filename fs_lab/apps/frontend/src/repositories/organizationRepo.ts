import type { Role } from "../types/organization";

type ApiResponse<T> = { status: string; data: T; message?: string };

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;

export const organizationRepo = {
    async getRoles(): Promise<Role[]> {
        const res = await fetch(`${BASE_URL}/roles`);
        if (!res.ok) throw new Error("Failed to fetch roles");
        const json: ApiResponse<Role[]> = await res.json();
        return json.data;
    },

    async createRole(role: Role): Promise<void> {
        const res = await fetch(`${BASE_URL}/roles`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(role),
        });
        if (!res.ok) {
            const json = await res.json();
            throw new Error(json.error?.message ?? "Failed to create role");
        }
    },
};

export default organizationRepo;
