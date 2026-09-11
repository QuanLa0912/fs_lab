import departmentData from "../../data/employees.json";
import type {Department, Employee} from "../../types/employee";

const departments: Department[] = departmentData;

function getFullName(employee: Employee): string {
    return [employee.firstName, employee.lastName].filter(Boolean).join(" ");
}

export function Main() {
    return (
        <main className="directory">
            {departments.map((department) => (
                <section key={department.name}>
                    <h2>{department.name}</h2>
                    <ul>
                        {department.employees.map((employee) => (
                            <li key={getFullName(employee)}>
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