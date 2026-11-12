import { PrismaClient } from "@prisma/client";
import { departmentSeedData, roleSeedData } from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // clear tables (Employee first, because it points to Department)
    await prisma.employee.deleteMany();
    await prisma.department.deleteMany();
    await prisma.role.deleteMany();

    // insert each department together with its employees
    for (const department of departmentSeedData) {
        await prisma.department.create({
            data: {
                name: department.name,
                employees: { create: department.employees },
            },
        });
    }

    // insert roles to db
    const createdRoles = await prisma.role.createManyAndReturn({
        data: roleSeedData,
    });

    console.log(
        `CREATED ${departmentSeedData.length} DEPARTMENTS, ${createdRoles.length} ROLES`
    );
};

main().then(
    async () => {
        await prisma.$disconnect();
    }
).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
