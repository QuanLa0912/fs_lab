import Organization from "../apis/organizationData";
import type { Role } from "../types/organization";

let organization: Role[] = structuredClone(Organization);

export const organizationRepo = {
    getRoles(): Role[] {
        return organization;
    },

    getRole(roleName: string): Role | undefined {
        return organization.find((member) => member.role === roleName);
    },

    createRole(role: Role): void {
        organization = [...organization, role];
    },

    updateRole(roleName: string, updatedRole: Role): void {
        organization = organization.map((member) =>
            member.role === roleName ? updatedRole : member
        );
    },

    deleteRole(roleName: string): void {
        organization = organization.filter((member) => member.role !== roleName);
    },
};

export default organizationRepo;
