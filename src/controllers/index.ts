import { Express, Router } from "express";
import { attachControllers } from "@decorators/express";

import { CategoryController } from "./categories";

export default function controllers(app: Express) {
    const routeV1 = Router();

    attachControllers(routeV1, [
        CategoryController
    ])

    app.use('/v1/api', routeV1);
}