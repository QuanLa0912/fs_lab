 
export interface Employee {
  firstName: string;
  lastName?: string;
}
 
export interface Department {
  name: string;
  employees: Employee[];
}

export interface MainProps {
  departments: Department[];
}

export interface EmployeeFormProps {
  departmentNames: string[];
  onAddEmployee: (departmentName: string, employee: Employee) => void;
}

