import type { Employee, MainProps } from "../../types/employee";

function getFullName(employee: Employee): string {
    return [employee.firstName, employee.lastName].filter(Boolean).join(" ");
}

export function Main({ departments }: MainProps) {
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

export default Main;