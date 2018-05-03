import { Skills } from './characterUtil';

export class Skill {
    type: Skills;
    value: number;
    selected = false;

    constructor(type: Skills, value: number) {
        this.type = type;
        this.value = value;
    }
}
