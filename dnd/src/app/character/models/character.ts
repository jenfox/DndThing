import { Alignment, Ability } from './characterUtil';
import { Abilities } from './abilities';
import { Skill } from './skill';
import { Weapon } from './weapon';



export class Character {
    /*
    / Header
    */

    //Header LEFT
    //Character Name
    name: string;

    //Header RIGHT
    //[  Class(es)/Level(s) ][  Background  ][    Playername     ]
    //[        Race         ][   Alignment  ][ Experience Points ]
    class: string;
    level: number;
    background: string;
    playerName: string;
    race: string;
    alignment: Alignment;
    experiencePoints: number;
    
    /*
        LEFT COLUMN (1/3)
    */
    // Left side of LEFT COLUMN
    // stats
    abilities: Abilities[];

    //Right side of LEFT COLUMN
    //Inspiration
    inspiration: boolean;
    //Proficiency Bonus
    proficiency: number;

    /* SAVING THROWS
    calculated from attributes
    */

    // skills
    skills: Skill[];

    // BOTTOM of LEFT COLUMN
    //Passive Wisdom (Perception)
    passivePerception: number;
    // languages and other proficiencies
    languages: string[];
    otherProficiences: string[];

    /*
        MIDDLE COLUMN
    */
    // Status area
    // [ AC ][ Initiative ][ Speed ]
    armorClass: number;
    initiative: number;
    speed: number;
    //Hitpoints
    hitPointMaximum: number;
    currentHitPoints: number;
    //Temporary Hitpoits
    temporaryHitPoints: number;
    //Hit Dice & Death Saves
    // [ Hit Dice ][ Death Saves ]
    hitDiceTotal: number;
    hitDiceType: string;
    deathSavesSuccesses: number;
    deathSavesFailures: number;

    // attacks and spellcasting
    attacks: Weapon[];
    // equipment
    equipment: string[];

    /*
        RIGHT COLUMN
    */
    // personality
    personalityTraits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
    // features & traits
    featuresAndTraits: string[];
    
}
