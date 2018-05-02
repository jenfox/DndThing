import { AttributeTypes } from './characterUtil';

export class Attribute {
    type: AttributeTypes;
    value: number;
    modifier: number;
    selected = false;

    constructor(type: AttributeTypes, value: number) {
        this.type = type;
        this.value = value;
        this.modifier = this.calculateModifier(value);
    }

    calculateModifier(value: number) {
        switch (true) {
            case (value < 2):
                return -5;
            case (value < 4):
                return -4;
            case (value < 6):
                return -3;
            case (value < 8):
                return -2;
            case (value < 10):
                return -1;
            case (value < 12):
                return 0;
            case (value < 14):
                return 1;
            case (value < 16):
                return 2;
            case (value < 18):
                return 3;
            case (value < 20):
                return 4;
            case (value < 22):
                return 5;
            case (value < 24):
                return 6;
            case (value < 26):
                return 7;
            case (value < 28):
                return 8;
            case (value < 30):
                return 9;
        }
    }
}
