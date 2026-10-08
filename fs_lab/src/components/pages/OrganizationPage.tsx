import OrganizationList from "../common/organization-list/OrganizationList";
import organizationData from "../../apis/organizationData";

export function OrganizationPage() {
    return <OrganizationList roles={organizationData} />;
}

export default OrganizationPage;
