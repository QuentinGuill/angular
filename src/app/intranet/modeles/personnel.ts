export enum Habilitation {
    pilote = 'Pilote',
    copilote = 'Copilote',
    pnc = 'PNC'
}

export interface Personnel {
    code: string;
    nom: string;
    prenom: string[];
    habilitation: Habilitation;
}