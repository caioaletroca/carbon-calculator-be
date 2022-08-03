// import { Inject } from "@decorators/di";
// import { Controller, Get, Params, Response } from "@decorators/express";
// import { Response as ExpressResponse } from "express";
// import { UsageService } from "services/usage";

// @Controller('/categories')
// export class CategoryController {
//     constructor(@Inject(UsageService) private usageService: UsageService) {}

//     @Get('')
//     getAll(@Response() res: ExpressResponse): void {
//         const categories = this.usageService.getByCategory();
        
//         res.send(categories);
//     }
// }