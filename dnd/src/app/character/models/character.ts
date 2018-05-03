import { Alignment, AttributeTypes } from './characterUtil';
import { Attribute } from './attribute';
import { Skill } from './skill';



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
}
