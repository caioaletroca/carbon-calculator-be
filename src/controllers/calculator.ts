import { Inject } from "@decorators/di";
import { Controller, Post, Request, Response } from "@decorators/express";
import { AllMeasuresUnits } from "convert-units";
import { Request as ExpressRequest, Response as ExpressResponse } from "express";
import { CarbonData } from "../models";
import { TimeConverterService } from "../services/timeConverter";
import { UnitConverterService } from "../services/unitConverter";

@Controller('/calculate')
export class CalculatorController {
    constructor(
        @Inject(TimeConverterService) private timeConverterService : TimeConverterService,
        @Inject(UnitConverterService) private unitConverterService : UnitConverterService
    ) {}

    @Post('')
    calculate(@Request() req: ExpressRequest, @Response() res: ExpressResponse): void {
        let carbonData = req.body as CarbonData[];

        // Convert unit
        carbonData = carbonData.map((data) => ({
            ...data,
            value: this.unitConverterService.convert(data.value, data.unit_type as AllMeasuresUnits, data.usage.unit as AllMeasuresUnits)
        }));

        // Convert time
        carbonData = carbonData.map((data) => ({
            ...data,
            value: this.timeConverterService.convert(data.value, data.time_type)
        }));

        // Calculate by the Emission Factor
        const output = carbonData.map((data) => ({
            id: data.usage.id,
            category_id: data.usage.category_id,
            name: data.usage.name,
            value: data.value * data.usage.emission_factor
        }))

        // Sum all the results
        const sum = output.reduce((sum, data) => sum + data.value, 0);

        res.send({
            sum,
            data: output
        })
    }
}