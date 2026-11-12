import { Request, Response, NextFunction } from "express";
import employeeService from "../services/employeeService";
import { HTTP_STATUS } from "../constants/httpConstant";
import { successResponse } from "../models/responseModel";

export const employeeController = {
    async getDepartments(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const departments = await employeeService.getDepartments();
            res.status(HTTP_STATUS.OK).json(successResponse(departments));
        } catch (error) {
            next(error);
        }
    },

    async createEmployee(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { department, ...employee } = req.body;
            const created = await employeeService.createEmployee(department, employee);
            res.status(HTTP_STATUS.CREATED).json(successResponse(created));
        } catch (error) {
            next(error);
        }
    },
};

export default employeeController;
