import _test from "../data/avions.json";

export interface Avion {
    modele: string;
    capacite: string;
    autonomie: string;
    code: string;
}

export const avion = _test as Avion[];