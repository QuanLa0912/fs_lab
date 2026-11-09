import type { OrganizationFormProps } from "../../../types/organization";
import useOrganizationForm from "../../../hooks/useOrganizationForm";

export function OrganizationForm({ onRoleAdded }: OrganizationFormProps) {
    const { firstName, lastName, role, handleSubmit } = useOrganizationForm(onRoleAdded);

    return(
        <section className="organization-form">
            <h2>Add Organization Member</h2>
            <form onSubmit={handleSubmit}>
                <label className="form-field">
                    First name
                    <input value={firstName.value} onChange={firstName.onChange} />
                </label>
                {firstName.error && <p className="form-error">{firstName.error}</p>}

                <label className="form-field">
                    Last name
                    <input value={lastName.value} onChange={lastName.onChange} />
                </label>

                <label className="form-field">
                    Role
                    <input value={role.value} onChange={role.onChange} />
                </label>
                {role.error && <p className="form-error">{role.error}</p>}

                <button type="submit">Add</button>
            </form>
        </section>
    )
}

export default OrganizationForm;
