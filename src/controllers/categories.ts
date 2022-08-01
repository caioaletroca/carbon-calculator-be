import { Inject } from "@decorators/di";
import { Controller, Get, Params, Response } from "@decorators/express";
import { Response as ExpressResponse } from "express";
import { CategoryService } from "../services/category";

@Controller('/categories')
export class CategoryController {
    constructor(@Inject(CategoryService) private categoryService: CategoryService) {}

    @Get('')
    getAll(@Response() res: ExpressResponse): void {
        const categories = this.categoryService.findAll();
        
        res.send(categories);
    }
}