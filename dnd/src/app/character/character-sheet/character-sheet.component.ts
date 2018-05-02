import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { Attribute } from '../attribute';
import { AttributeTypes, Skills } from '../characterUtil';
import { Skill } from '../skill';

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
    this.populateSkills();
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

  populateSkills() {
    this.character.skills = [];
    this.character.skills.push(new Skill(Skills.Acrobatics, 2));
    this.character.skills.push(new Skill(Skills.AnimalHandling, 2));
    this.character.skills.push(new Skill(Skills.Arcana, 7));
    this.character.skills.push(new Skill(Skills.Athletics, 1));
    this.character.skills.push(new Skill(Skills.Deception, 4));
    this.character.skills.push(new Skill(Skills.History, 7));
    this.character.skills.push(new Skill(Skills.Insight, 5));
    this.character.skills.push(new Skill(Skills.Intimidation, 4));
    this.character.skills.push(new Skill(Skills.Investigation, 7));
    this.character.skills.push(new Skill(Skills.Medicine, 2));
    this.character.skills.push(new Skill(Skills.Nature, 4));
    this.character.skills.push(new Skill(Skills.Perception, 2));
    this.character.skills.push(new Skill(Skills.Performance, 4));
    this.character.skills.push(new Skill(Skills.Persuasion, 4));
    this.character.skills.push(new Skill(Skills.Religion, 4));
    this.character.skills.push(new Skill(Skills.SlightOfHand, 2));
    this.character.skills.push(new Skill(Skills.Stealth, 2));
    this.character.skills.push(new Skill(Skills.Survival, 2));
  }


}
