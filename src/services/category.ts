import { Category } from "../models";
import data from '../data/categories.json';
import { Injectable } from "@decorators/di";

@Injectable()
export class CategoryService {
    public findAll(): Category[] {
        return data;
    }

    public find(id: number): Category {
        return data.find((category: Category) => category.id === id);
    }
}