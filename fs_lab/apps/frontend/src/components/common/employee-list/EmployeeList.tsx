import type { EmployeeListProps } from "../../../types/employee";
import getFullName from "../../../utils/getFullName";

export function EmployeeList({ departments }: EmployeeListProps) {
    return (
        <main className="directory">
            {departments.map((department) => (
                <section key={department.name}>
                    <h2>{department.name}</h2>
                    <ul>
                        {department.employees.map((employee, index) => (
                            <li key={`${getFullName(employee)}-${index}`}>
                                {getFullName(employee)}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </main>
    );
}

export default EmployeeList;
