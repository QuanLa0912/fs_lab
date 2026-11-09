import { useState } from "react";
import OrganizationList from "../common/organization-list/OrganizationList";
import OrganizationForm from "../common/organization-form/OrganizationForm";
import organizationService from "../../services/organizationService";

export function OrganizationPage() {
    const [roles, setRoles] = useState(() => organizationService.getRoles());

    function handleRoleAdded() {
        setRoles(organizationService.getRoles());
    }

    return (
        <>
            <OrganizationList roles={roles} />
            <OrganizationForm onRoleAdded={handleRoleAdded} />
        </>
    );
}

export default OrganizationPage;
