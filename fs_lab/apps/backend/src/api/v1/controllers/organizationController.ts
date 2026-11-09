import { Request, Response } from "express";
import organizationService from "../services/organizationService";
import { HTTP_STATUS } from "../constants/httpConstant";
import { successResponse } from "../models/responseModel";

export const organizationController = {
    getRoles(_req: Request, res: Response): void {
        res.status(HTTP_STATUS.OK).json(successResponse(organizationService.getRoles()));
    },

    createRole(req: Request, res: Response): void {
        const created = organizationService.createRole(req.body);
        res.status(HTTP_STATUS.CREATED).json(successResponse(created));
    },
};

export default organizationController;
