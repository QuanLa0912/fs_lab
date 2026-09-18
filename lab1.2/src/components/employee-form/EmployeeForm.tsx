import { useState } from "react";
import type { FormEvent } from "react";
import type { Employee, EmployeeFormProps } from "../../types/employee";

export function EmployeeForm({ departmentNames, onAddEmployee }: EmployeeFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [department, setDepartment] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if(firstName.trim() === "") {
            setError("First name is required");
            return;
        }

        const employee: Employee = {
            firstName: firstName.trim(),
            lastName: lastName.trim() || undefined;
        };

        onAddEmployee(department, employee);

        setFirstName("");
        setLastName("");
        setError("");
    }

    return(
        <section className="employee-form">
            <h2>Add Employee Form</h2>
            <form onSubmit={handleSubmit}>
                <label className="form-field">
                    First name 
                    <input value={firstName} 
                    onChange={(event) => setFirstName(event.target.value)}/>
                </label>
                <label className="form-field">
                    Last name
                    <input value={lastName}
                    onChange={(event) => setLastName(event.target.value)} />
                </label>
                <label className="form-field">
                    Department
                    <select value={department}
                    onChange={(event) => setDepartment(event.target.value)}>
                        {departmentNames.map((name) => (
                            <option key={name} value={name}>{name}</option>
                        ))}
                    </select>
                </label>

                {error && <p className="form-error">{error}</p>}
            </form>
        </section>
    )
}

export default EmployeeForm;