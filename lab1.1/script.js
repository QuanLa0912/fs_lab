import employees from "./employees.js";

const main = document.getElementById("directory");
document.getElementById("current-year").textContent = new Date().getFullYear();

const grouped = new Map();

employees.forEach(({ name, department }) => {
    if(!grouped.has(department)) grouped.set(department,[]);
    grouped.get(department).push(name);
});

grouped.forEach((names, department) => {
    const section = document.createElement("section");
    section.className = "department";

    const heading = document.createElement("h2");
    heading.className = "department_name";
    heading.textContent = department;

    const employeesList = document.createElement("ul");
    employeesList.className = "employee-list";

    names.forEach((name) => {
        const item = document.createElement("li");
        item.className = "employee";
        item.textContent = name;
        employeesList.append(item);
    });

    section.append(heading, employeesList);
    main.append(section);
});
