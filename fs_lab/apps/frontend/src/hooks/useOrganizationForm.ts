import type { FormEvent } from "react";
import useFormInput from "./useFormInput";
import organizationService from "../services/organizationService";
import type { Role } from "../types/organization";

export function useOrganizationForm(onRoleAdded: (role: Role) => void) {
    const firstName = useFormInput();
    const lastName = useFormInput();
    const role = useFormInput();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const firstNameError = organizationService.validateFirstName(firstName.value);
        const roleError = organizationService.validateRole(role.value);
        firstName.setError(firstNameError);
        role.setError(roleError);
        if (firstNameError || roleError) {
            return;
        }

        const newRole: Role = {
            role: role.value.trim(),
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim() || undefined,
        };
        try {
            await organizationService.createRole(newRole);
            onRoleAdded(newRole);
        } catch (error) {
            role.setError(error instanceof Error ? error.message : "Failed to create role");
        }
    }

    return {
        firstName,
        lastName,
        role,
        handleSubmit
    }
}

export default useOrganizationForm;
