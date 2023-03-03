import _test from "../data/vols.json";
import { Avion } from "./avion";
import { Personnel } from "./personnel";

export interface Compagnie {
    code: string;
    avion: string;
    date: string;
    personnel: string[];
    aeroportDepart: string;
    aeroportArrivee: string;
    duree: number;
}