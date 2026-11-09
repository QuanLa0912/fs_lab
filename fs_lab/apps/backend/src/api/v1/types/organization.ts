import type { Employee } from "./employee";

export interface Role extends Employee {
  role: string;
  pronouns?: string;
}