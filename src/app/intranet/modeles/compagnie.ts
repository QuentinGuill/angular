import _test from "../data/vols.json";
import { Avion } from "./avion";
import { Personnel } from "./personnel";

export interface Compagnie {
    code: string;
    avion: Avion;
    date: string;
    personnel: Personnel[];
    aeroportDepart: string;
    aeroportArrivee: string;
    duree: number;
}

export const vols = _test as Compagnie[];