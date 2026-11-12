import prisma from "../../../../prisma/client";
import type { Role } from "../types/organization";

export const organizationRepo = {
    getRoles() {
        return prisma.role.findMany({ orderBy: { id: "asc" } });
    },
    findRoleByName(roleName: string) {
        return prisma.role.findFirst({
            where: { role: { equals: roleName.trim(), mode: "insensitive" } },
        });
    },
    createRole(role: Role) {
        return prisma.role.create({ data: role });
    },
    updateRole(roleName: string, updatedRole: Role) {
        return prisma.role.update({
            where: { role: roleName },
            data: updatedRole,
        });
    },
};

export default organizationRepo;
