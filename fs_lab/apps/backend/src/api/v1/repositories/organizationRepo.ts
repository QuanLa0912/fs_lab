import Organization from "../data/organizationData";
import type { Role } from "../types/organization";

let organization: Role[] = structuredClone(Organization);

export const organizationRepo = {
    getRoles(): Role[] {
        return organization;
    },

    createRole(role: Role): void {
        organization = [...organization, role];
    },

    updateRole(roleName: string, updatedRole: Role): void {
        organization = organization.map((member) =>
            member.role === roleName ? updatedRole : member
        );
    },
};

export default organizationRepo;
