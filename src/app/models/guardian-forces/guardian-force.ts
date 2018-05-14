import { Ability } from '../abilities/ability';

export interface GuardianForce {
    abilities: Ability[];
    defaultAbilities: Ability[];
    name: string;
}
