import { Router } from "express";
import employeeController from "../controllers/employeeController";
import { validateRequest } from "../middleware/validate";
import { createEmployeeSchema } from "../validation/employeeSchemas";

const router = Router();

router.get("/departments", employeeController.getDepartments);
router.post(
    "/employees",
    validateRequest({ body: createEmployeeSchema }),
    employeeController.createEmployee
);

export default router;
