import { useEffect, useState } from "react";
import OrganizationList from "../common/organization-list/OrganizationList";
import OrganizationForm from "../common/organization-form/OrganizationForm";
import organizationService from "../../services/organizationService";
import type { Role } from "../../types/organization";

export function OrganizationPage() {
    const [roles, setRoles] = useState<Role[]>([]);

    function loadRoles() {
        organizationService.getRoles().then(setRoles).catch(console.error);
    }

    useEffect(loadRoles, []);

    return (
        <>
            <OrganizationList roles={roles} />
            <OrganizationForm onRoleAdded={loadRoles} />
        </>
    );
}

export default OrganizationPage;

