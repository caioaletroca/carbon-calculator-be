import BaseModel from "./BaseModel";
import { Usage } from "./Usage";

export class CarbonData extends BaseModel {
    public value!: number;
    public unit_type!: string;
    public time_type!: string;
    public usage!: Usage;
}