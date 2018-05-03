import { Alignment, AttributeTypes } from './characterUtil';
import { Attribute } from './attribute';
import { Skill } from './skill';
import { Weapon } from './weapon';



export class Character {
    // top part of sheet
    name: string;
    class: string;
    level: number;
    background: string;
    playerName: string;
    race: string;
    alignment: Alignment;
    experiencePoints: number;
    // stats
    attributes: Attribute[];
    // skills
    skills: Skill[];
    // languages and other proficiencies
    languages: string[];
    // Status area
    armorClass: number;
    initiative: number;
    speed: number;
    hitPointMaximum: number;
    currentHitPoints: number;
    temporaryHitPoints: number;
    hitDiceTotal: number;
    hitDiceType: string;
    deathSavesSuccesses: number;
    deathSavesFailures: number;
    // attacks and spellcasting
    attacks: Weapon[];
    // equipment
    equipment: string[];
    // personality
    personalityTraits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
    // features & traits
    featuresAndTraits: string[];
}
