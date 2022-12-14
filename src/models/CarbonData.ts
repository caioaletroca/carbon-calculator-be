import BaseModel from "./BaseModel";
import { Usage } from "./Usage";

/**
 * Model for the incoming request to calculate the carbon footprint
 */
export class CarbonData extends BaseModel {
    public value!: number;
    public unit_type!: string;
    public time_type!: string;
    public usage!: Usage;
}