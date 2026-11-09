import { Role } from "../types/organization";
import organizationRepo from "../repositories/organizationRepo";
import { AppError } from "../error/errors";
import { HTTP_STATUS } from "../constants/httpConstant";

export const organizationService = {
    getRoles(): Role[] {
        return organizationRepo.getRoles();
    },

    createRole(role: Role): Role {
        const roleName = role.role.trim().toLowerCase();
        const existing = organizationRepo
            .getRoles()
            .find((member) => member.role.toLowerCase() === roleName);

        if (!existing) {
            organizationRepo.createRole(role);
            return role;
        }

        if (existing.firstName.trim() !== "") {
            const fullName = [existing.firstName, existing.lastName].filter(Boolean).join(" ");
            throw new AppError(
                `${existing.role} is already occupied by ${fullName}`,
                "ROLE_OCCUPIED",
                HTTP_STATUS.CONFLICT
            );
        }

        const filledRole: Role = { ...role, role: existing.role };
        organizationRepo.updateRole(existing.role, filledRole);
        return filledRole;
    },
};

export default organizationService;
