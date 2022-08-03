import { Inject } from "@decorators/di";
import { Controller, Get, Params, Response } from "@decorators/express";
import { Response as ExpressResponse } from "express";
import { CategoryService } from "../services/category";
import { UsageService } from "../services/usage";

@Controller('/categories')
export class CategoryController {
    constructor(
        @Inject(CategoryService) private categoryService: CategoryService,
        @Inject(UsageService) private usageService: UsageService
    ) {}

    @Get('')
    getAll(@Response() res: ExpressResponse): void {
        const categories = this.categoryService.getAll();
        
        res.send(categories);
    }

    @Get('/:category_id/usages')
    getUsages(@Response() res: ExpressResponse, @Params('category_id') category_id: number): void {
        const usages = this.usageService.getByCategory(category_id);

        res.send(usages);
    }
}