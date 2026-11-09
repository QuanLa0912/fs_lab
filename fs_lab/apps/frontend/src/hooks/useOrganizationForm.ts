import type { FormEvent } from "react";
import useFormInput from "./useFormInput";
import organizationService from "../services/organizationService";
import type { Role } from "../types/organization";

export function useOrganizationForm(onRoleAdded: (role: Role) => void) {
    const firstName = useFormInput();
    const lastName = useFormInput();
    const role = useFormInput();

    function handleSubmit(event: FormEvent) {
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
        organizationService.createRole(newRole);

        onRoleAdded(newRole);
    }

    return {
        firstName,
        lastName,
        role,
        handleSubmit
    }
}

export default useOrganizationForm;
