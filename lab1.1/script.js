const { createElement } = require("react");

document.addEventListener("DOMContentLoaded", async () => {
    const main = document.getElementById("directory");

    document.getElementById("current-year").textContent = new Date().getFullYear();

    try {
        const response = await fetch("employees.csv");
        const text = await response.text();

        const rows = text.trim().split().slice(1);

        const grouped = new Map();

        rows.forEach((row) => {
            const [firstName, lastName, departments] = row.split(",");
            const fullName = [firstName, lastName].filter(Boolean).join("");

            if (!grouped.has(departments)) grouped.set(departments, []);
            grouped.get(departments).push(fullName);
        });

        grouped.forEach((names, department) => {
            const section = createElement("section");

            const heading = document.createElement("h2");
            heading.textContent = department;

            const employeeList = document.createElement("ul");
            names.forEach((name) => {
                const item = document.createElement("li");
                item.textContent = name;
                employeeList.append(item);
            })
        })
    }
})