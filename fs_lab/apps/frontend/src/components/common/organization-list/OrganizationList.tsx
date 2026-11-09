import type { OrganizationListProps } from "../../../types/organization";
import getFullName from "../../../utils/getFullName";

export function OrganizationList({ roles }: OrganizationListProps) {
    return (
        <main className="organization">
            <ul>
                {roles.map((member, index) => (
                    <li key={`${getFullName(member)}-${index}`}>
                        <span className="organization_name">
                            {getFullName(member)}
                            {member.pronouns && ` (${member.pronouns})`}
                        </span>
                        <span className="organization_role">{member.role}</span>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default OrganizationList;
