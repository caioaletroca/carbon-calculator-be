import { Inject } from "@decorators/di";
import { Controller, Get, Params, Response } from "@decorators/express";
import { Response as ExpressResponse } from "express";
import { UnitService } from "services/unit";

@Controller('/units')
export class UnitController {
    constructor(@Inject(UnitService) private unitService: UnitService) {}

    @Get('/:type')
    getByType(@Response() res: ExpressResponse, @Params('type') type: string): void {
        const units = this.unitService.getByType(type);
        
        res.send(units);
    }
}