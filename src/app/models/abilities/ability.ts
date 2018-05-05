export interface Ability {
    ap: number | null;
    description: string;
    name: string;
}

export interface AbilityMap {
    [key: string]: AbilityMap | Ability;
}
