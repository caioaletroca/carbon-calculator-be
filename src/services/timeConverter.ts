import { Injectable } from "@decorators/di";
import { Category } from "models";

@Injectable()
export class TimeConverterService {
    public convert(value: number, type: string): number {
        if(type === 'day') return value * 365;
        if(type === 'month') return value * 12;
        return value;
    }
}