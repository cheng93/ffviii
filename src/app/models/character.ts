import { Ability } from './abilities';

export interface Character {
    abilities: Ability[];
    name: string;
}

export class SquallCharacter implements Character {
    abilities: Ability[] = [];
    readonly name: string = 'Squall';
}

export class QuistisCharacter implements Character {
    abilities: Ability[] = [];
    readonly name: string = 'Quistis';
}

export class ZellCharacter implements Character {
    abilities: Ability[] = [];
    readonly name: string = 'Zell';
}

export class SelphieCharacter implements Character {
    abilities: Ability[] = [];
    readonly name: string = 'Selphie';
}

export class RinoaCharacter implements Character {
    abilities: Ability[] = [];
    readonly name: string = 'Rinoa';
}

export class IrvineCharacter implements Character {
    abilities: Ability[] = [];
    readonly name: string = 'Irvine';
}

class _AllCharacters {
    [key: string]: Character;
    readonly Squall: Character = new SquallCharacter();
    readonly Quistis: Character = new QuistisCharacter();
    readonly Zell: Character = new ZellCharacter();
    readonly Selphie: Character = new SelphieCharacter();
    readonly Rinoa: Character = new RinoaCharacter();
    readonly Irvine: Character = new IrvineCharacter();
}

export const AllCharacters = new _AllCharacters();
