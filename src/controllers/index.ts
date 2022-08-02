import { Express, Router } from "express";
import { attachControllers } from "@decorators/express";

import { CategoryController } from "./categories";
import { UnitController } from "./units";
import { CalculatorController } from "./calculator";

export default function controllers(app: Express) {
    const routeV1 = Router();

    attachControllers(routeV1, [
        CategoryController,
        UnitController,
        CalculatorController
    ])

    app.use('/v1/api', routeV1);
}