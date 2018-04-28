import { Ability, AbilityMap } from './ability';

export class MagicAbility implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Cast magic';
    readonly name: string = 'Magic';
}

export class GfAbility implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Summons Guardian Force';
    readonly name: string = 'GF';
}

export class DrawAbility implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Draw magic';
    readonly name: string = 'Draw';
}

export class ItemAbility implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Use item';
    readonly name: string = 'Item';
}

export class CardAbility implements Ability {
    readonly ap: number | null = 40;
    readonly description: string = 'Turn monsters into cards';
    readonly name: string = 'Card';
}

export class DoomAbility implements Ability {
    readonly ap: number | null = 60;
    readonly description: string = 'Use Doom on one enemy';
    readonly name: string = 'Doom';
}

export class MadRushAbility implements Ability {
    readonly ap: number | null = 60;
    readonly description: string = 'Use Haste, Berserk, Protect on all';
    readonly name: string = 'Mad Rush';
}

export class TreatmentAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = 'Remove abnormal status';
    readonly name: string = 'Treatment';
}

export class DefendAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = 'Reduce damage until next command';
    readonly name: string = 'Defend';
}

export class DarksideAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = 'Expend HP to attack';
    readonly name: string = 'Darkside';
}

export class RecoverAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Restore HP';
    readonly name: string = 'Recover';
}

export class AbsorbAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = 'Absorb HP';
    readonly name: string = 'Absorb';
}

export class ReviveAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Remove KO';
    readonly name: string = 'Revive';
}

export class LvDownAbility implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Lower monster level';
    readonly name: string = 'LV Down';
}

export class LvUpAbility implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Raise monster level';
    readonly name: string = 'LV Up';
}

export class KamikazeAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = "Damage one enemy before getting KO'd";
    readonly name: string = 'Kamikaze';
}

export class DevourAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = 'Devour monsters';
    readonly name: string = 'Devour';
}

export class MiniMogAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = 'Call MiniMog';
    readonly name: string = 'MiniMog';
}

class _CommandAbilities implements AbilityMap {
    [key: string]: Ability;
    readonly Magic = new MagicAbility();
    readonly Gf = new GfAbility();
    readonly Draw = new DrawAbility();
    readonly Item = new ItemAbility();
    readonly Card = new CardAbility();
    readonly Doom = new DoomAbility();
    readonly MadRush = new MadRushAbility();
    readonly Treatment = new TreatmentAbility();
    readonly Defend = new DefendAbility();
    readonly Darkside = new DarksideAbility();
    readonly Recover = new RecoverAbility();
    readonly Absorb = new AbsorbAbility();
    readonly Revive = new ReviveAbility();
    readonly LvDown = new LvDownAbility();
    readonly LvUp = new LvUpAbility();
    readonly Kamikaze = new KamikazeAbility();
    readonly Devour = new DevourAbility();
    readonly MiniMog = new MiniMogAbility();
}

export const CommandAbilities = new _CommandAbilities();
