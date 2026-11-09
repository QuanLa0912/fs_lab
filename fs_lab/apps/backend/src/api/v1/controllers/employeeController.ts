import { Request, Response } from "express";
import employeeService from "../services/employeeService";
import { HTTP_STATUS } from "../constants/httpConstant";
import { successResponse } from "../models/responseModel";

export const employeeController = {
    getDepartments(_req: Request, res: Response): void {
        res.status(HTTP_STATUS.OK).json(successResponse(employeeService.getDepartments()));
    },

    createEmployee(req: Request, res: Response): void {
        const { department, ...employee } = req.body;
        const created = employeeService.createEmployee(department, employee);
        res.status(HTTP_STATUS.CREATED).json(successResponse(created));
    },
};

export default employeeController;
