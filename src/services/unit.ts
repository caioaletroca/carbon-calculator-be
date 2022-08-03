import { Injectable } from "@decorators/di";
import { Unit } from "../models";
import data from '../data/units.json';
import { Params } from "@decorators/express";

@Injectable()
export class UnitService {
    public getByType(type: string): Unit[] {
        return data.filter(unit => unit.type === type);
    }
}