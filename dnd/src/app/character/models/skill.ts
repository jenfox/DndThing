import { Skills } from './characterUtil';
import { AttributeTypes } from './characterUtil';

export class Skill {
    type: Skills;
    value: number;
    attributeType: AttributeTypes;
    selected = false;

    //selected will default to false (not proficient).  It is an optional param in the constructor
    //and can be changed later at as well.

    constructor(type: Skills, value: number, attributeType: AttributeTypes, selected?: boolean) {
        this.type = type;
        this.value = value;
        this.attributeType = attributeType;
        this.selected = selected;
    }


    public toggleProficiency(){
        this.selected != this.selected;
    }

}
