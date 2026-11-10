import { Router } from "express";
import organizationController from "../controllers/organizationController";
import { validateRequest } from "../middleware/validate";
import { createRoleSchema } from "../validation/organizationSchemas";

const router = Router();

router.get("/roles", organizationController.getRoles);
router.post(
    "/roles",
    validateRequest({ body: createRoleSchema }),
    organizationController.createRole
);

export default router;
