import { Request, Response, NextFunction } from "express";
import organizationService from "../services/organizationService";
import { HTTP_STATUS } from "../constants/httpConstant";
import { successResponse } from "../models/responseModel";

export const organizationController = {
    async getRoles(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const roles = await organizationService.getRoles();
            res.status(HTTP_STATUS.OK).json(successResponse(roles));
        } catch (error) {
            next(error);
        }
    },

    async createRole(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const created = await organizationService.createRole(req.body);
            res.status(HTTP_STATUS.CREATED).json(successResponse(created));
        } catch (error) {
            next(error);
        }
    },
};

export default organizationController;
