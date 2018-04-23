import { Ability, AbilityMap } from './ability';

export class HpJAbility implements Ability {
    readonly ap: number | null = 50;
    readonly description: string = 'Junctions Magic to HP';
    readonly name: string = 'HP-J';
}

export class StrJAbility implements Ability {
    readonly ap: number | null = 50;
    readonly description: string = 'Junctions Magic to Strength';
    readonly name: string = 'Str-J';
}

export class VitJAbility implements Ability {
    readonly ap: number | null = 50;
    readonly description: string = 'Junctions Magic to Vitality';
    readonly name: string = 'Vit-J';
}

export class MagJAbility implements Ability {
    readonly ap: number | null = 50;
    readonly description: string = 'Junctions Magic to Magic';
    readonly name: string = 'Mag-J';
}

export class SprJAbility implements Ability {
    readonly ap: number | null = 50;
    readonly description: string = 'Junctions Magic to Spirit';
    readonly name: string = 'Spr-J';
}

export class SpdJAbility implements Ability {
    readonly ap: number | null = 120;
    readonly description: string = 'Junctions Magic to Speed';
    readonly name: string = 'Spd-J';
}

export class HitJAbility implements Ability {
    readonly ap: number | null = 120;
    readonly description: string = 'Junctions Magic to Hit';
    readonly name: string = 'Hit-J';
}

export class EvaJAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Junctions Magic to Evade';
    readonly name: string = 'Eva-J';
}

export class LuckJAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Junctions Magic to Luck';
    readonly name: string = 'Luck-J';
}

export class ElemAtkJAbility implements Ability {
    readonly ap: number | null = 160;
    readonly description: string = 'Junctions Magic to Elem-Atk';
    readonly name: string = 'Elem-Atk-J';
}

export class ElemDefJAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = 'Junctions Magic to Elem-Def';
    readonly name: string = 'Elem-Def-J';
}

export class ElemDefJx2Ability implements Ability {
    readonly ap: number | null = 130;
    readonly description: string = 'Junctions 2 Magic to Elem-Def';
    readonly name: string = 'Elem-Def-Jx2';
}

export class ElemDefJx4Ability implements Ability {
    readonly ap: number | null = 180;
    readonly description: string = 'Junctions 4 Magic to Elem-Def';
    readonly name: string = 'Elem-Def-Jx4';
}

export class StAtkJAbility implements Ability {
    readonly ap: number | null = 160;
    readonly description: string = 'Junctions Magic to ST-Atk';
    readonly name: string = 'ST-Atk-J';
}

export class StDefJAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = 'Junctions Magic to ST-Def';
    readonly name: string = 'ST-Def-J';
}

export class StDefJx2Ability implements Ability {
    readonly ap: number | null = 130;
    readonly description: string = 'Junctions 2 Magic to ST-Def';
    readonly name: string = 'ST-Def-Jx2';
}

export class StDefJx4Ability implements Ability {
    readonly ap: number | null = 180;
    readonly description: string = 'Junctions 4 Magic to ST-Def';
    readonly name: string = 'ST-Def-Jx4';
}

export class AbilityX3Ability implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Set up to 3 abilities';
    readonly name: string = 'Ability x3';
}

export class AbilityX4Ability implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Set up to 4 abilities';
    readonly name: string = 'Ability x4';
}

class _JunctionAbilities implements AbilityMap {
    [key: string]: AbilityMap | Ability;
    readonly HpJ: Ability = new HpJAbility();
    readonly StrJ: Ability = new StrJAbility();
    readonly VitJ: Ability = new VitJAbility();
    readonly MagJ: Ability = new MagJAbility();
    readonly SprJ: Ability = new SprJAbility();
    readonly SpdJ: Ability = new SpdJAbility();
    readonly HitJ: Ability = new HitJAbility();
    readonly EvaJ: Ability = new EvaJAbility();
    readonly LuckJ: Ability = new LuckJAbility();
    readonly ElemAtkJ: Ability = new ElemAtkJAbility();
    readonly ElemDefJ: Ability = new ElemDefJAbility();
    readonly ElemDefJx2: Ability = new ElemDefJx2Ability();
    readonly ElemDefJx4: Ability = new ElemDefJx4Ability();
    readonly StAtkJ: Ability = new StAtkJAbility();
    readonly StDefJ: Ability = new StDefJAbility();
    readonly StDefJx2: Ability = new StDefJx2Ability();
    readonly StDefJx4: Ability = new StDefJx4Ability();
    readonly AbilityX3: Ability = new AbilityX3Ability();
    readonly AbilityX4: Ability = new AbilityX4Ability();
}

export const JunctionAbilities = new _JunctionAbilities();
