import BaseModel from "./BaseModel";

/**
 * Sub category inside the Category model, for detailed calculation
 */
export class Usage extends BaseModel {
    public id!: number;
    public category_id!: number;
    public name!: string;
    public unit_type!: string;
    public unit!: string;
    public emission_factor!: number;
}