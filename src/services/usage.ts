import { Injectable } from "@decorators/di";
import { Usage } from "models";
import data from 'data/usages.json';

@Injectable()
export class UsageService {
    public getAll(): Usage[] {
        return data;
    }

    public getByCategory(category_id: number): Usage[] {
        return data.filter(usage => usage.category_id === Number(category_id));
    }
}