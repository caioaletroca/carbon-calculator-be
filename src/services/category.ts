import { Injectable } from "@decorators/di";
import { Category } from "models";
import data from 'data/categories.json';

@Injectable()
export class CategoryService {
    public getAll(): Category[] {
        return data;
    }
}