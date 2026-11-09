import type { FormEvent } from "react";
import type { EmployeeFormProps } from "../../../types/employee";
import useFormInput from "../../../hooks/useFormInput";
import employeeService from "../../../services/employeeService";

export function EmployeeForm({ departmentNames, onEmployeeAdded }: EmployeeFormProps) {
    const firstName = useFormInput();
    const lastName = useFormInput();
    const department = useFormInput(departmentNames[0] ?? "");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const error = employeeService.validateFirstName(firstName.value);
        firstName.setError(error);
        if (error) {
            return;
        }

        const employee = {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim() || undefined,
        };
        employeeService.createEmployee(department.value, employee);

        onEmployeeAdded(employee);
    }

    return(
        <section className="employee-form">
            <h2>Add Employee Form</h2>
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
                    Department
                    <select value={department.value} onChange={department.onChange}>
                        {departmentNames.map((name) => (
                            <option key={name} value={name}>{name}</option>
                        ))}
                    </select>
                </label>

                <button type="submit">Add</button>
            </form>
        </section>
    )
}

export default EmployeeForm;
