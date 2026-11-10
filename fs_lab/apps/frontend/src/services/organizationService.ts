import organizationRepo from "../repositories/organizationRepo";
import type { Role } from "../types/organization";

export const organizationService = {
getRoles(): Promise<Role[]> {
    return organizationRepo.getRoles();
    },
validateFirstName(firstName: string): string {
    return firstName.trim().length < 3 ? "First name must be at least 3 characters" : "";
    },
validateRole(roleName: string): string {
    return roleName.trim() === "" ? "Role is required" : "";
    },
createRole(role: Role): Promise<void> {
    return organizationRepo.createRole(role);
    },
}

export default organizationService;
