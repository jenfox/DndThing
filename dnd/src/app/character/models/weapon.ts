export class Weapon {
    name: string;
    attackBonus: number;
    damageType: string;
    constructor(name: string, attackBonus: number, damageType: string) {
        this.name = name;
        this.attackBonus = attackBonus;
        this.damageType = damageType;
    }
}
