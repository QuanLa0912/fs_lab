import organizationRepo from "../repositories/organizationRepo";
import type { Role } from "../types/organization";
import getFullName from "../utils/getFullName";

function findRole(roleName: string): Role | undefined {
    const name = roleName.trim().toLowerCase();
    return organizationRepo.getRoles().find((member) => member.role.toLowerCase() === name);
}

export const organizationService = {
    getRoles(): Role[] {
        return organizationRepo.getRoles()
    },

    validateFirstName(firstName: string): string {
        if(firstName.trim().length < 3) {
            return "First name must be at least 3 characters";
        }
        return "";
    },

    validateRole(roleName: string): string {
        if(roleName.trim() === "") {
            return "Role is required";
        }
        const existing = findRole(roleName);
        if(existing && existing.firstName.trim() !== "") {
            return `${existing.role} is already occupied by ${getFullName(existing)}`;
        }
        return "";
    },

    createRole(role: Role){
        const existing = findRole(role.role);
        if(existing) {
            organizationRepo.updateRole(existing.role, { ...role, role: existing.role })
        } else {
            organizationRepo.createRole(role)
        }
    }
}

export default organizationService;
