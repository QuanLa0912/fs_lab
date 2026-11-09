import type { Employee } from "../types/employee";

export function getFullName(person: Employee): string {
    return [person.firstName, person.lastName].filter(Boolean).join(" ");
}

export default getFullName;
