import { Role } from "../types/organization";
import organizationRepo from "../repositories/organizationRepo";
import { AppError } from "../error/errors";
import { HTTP_STATUS } from "../constants/httpConstant";

export const organizationService = {
    async getRoles() {
        return organizationRepo.getRoles();
    },

    async createRole(role: Role) {
        const existing = await organizationRepo.findRoleByName(role.role);
        if (!existing) {
            return organizationRepo.createRole(role);
        }
        if (existing.firstName.trim() !== "") {
            const fullName = [existing.firstName, existing.lastName].filter(Boolean).join(" ");
            throw new AppError(
                `${existing.role} is already occupied by ${fullName}`,
                "ROLE_OCCUPIED",
                HTTP_STATUS.CONFLICT
            );
        }
        return organizationRepo.updateRole(existing.role, { ...role, role: existing.role });
    },
};

export default organizationService;
