import { Injectable } from "@decorators/di";
import { Unit } from "models";
import data from 'data/units.json';
import configureMeasurements, { allMeasures, AllMeasuresUnits } from 'convert-units';

@Injectable()
export class UnitConverterService {
    private converter;

    constructor() {
        this.converter = configureMeasurements(allMeasures);
    }

    public convert(value: number, from: AllMeasuresUnits, to: AllMeasuresUnits) : number {
        return this.converter(value).from(from).to(to);
    }
}