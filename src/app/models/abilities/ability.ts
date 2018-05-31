export interface Ability {
    ap: number | null;
    description: string;
    name: string;
    unique: boolean;
}

export interface AbilityMap {
    [key: string]: AbilityMap | Ability;
}
