import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { Attribute } from '../attribute';
import { AttributeTypes } from '../characterUtil';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  character: Character;

  constructor() { }

  ngOnInit() {
    this.character = new Character();
    this.populateAttribute();
  }


  populateAttribute() {
    this.character.attributes = [];
    this.character.attributes.push(new Attribute(AttributeTypes.Strength, 12));
    this.character.attributes.push(new Attribute(AttributeTypes.Dexterity, 14));
    this.character.attributes.push(new Attribute(AttributeTypes.Constitution, 16));
    this.character.attributes.push(new Attribute(AttributeTypes.Intelligence, 18));
    this.character.attributes[3].selected = true;
    this.character.attributes.push(new Attribute(AttributeTypes.Wisdom, 15));
    this.character.attributes[4].selected = true;
    this.character.attributes.push(new Attribute(AttributeTypes.Charisma, 18));
  }


}
