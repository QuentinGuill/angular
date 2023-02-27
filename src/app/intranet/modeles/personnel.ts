export enum Habilitation {
    pilote = 'Pilote',
    copilote = 'Copilote',
    pnc = 'PNC'
}

export interface Personnel {
    nom: string;
    prenom: string[];
    habilitation: Habilitation;
}