import BaseModel from "./BaseModel";

/**
 * Main categories for carbon footprints
 */
export class Category extends BaseModel {
    public id!: number;
    public name!: string;
}