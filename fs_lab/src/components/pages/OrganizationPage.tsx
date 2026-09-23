import OrganizationList from "../common/organization-list/OrganizationList";
import organizationData from "../../data/organization";

export function OrganizationPage() {
    return <OrganizationList roles={organizationData} />;
}

export default OrganizationPage;
