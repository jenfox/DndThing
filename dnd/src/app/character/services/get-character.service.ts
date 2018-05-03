import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { Alignment, AttributeTypes, Skills } from '../models/characterUtil';
import { Attribute } from '../models/attribute';
import { Skill } from '../models/skill';

@Injectable()
export class GetCharacterService {

  character: Character;

  constructor() { }

  makeCharacter() {
    this.character = new Character();
    this.populateCharacter();
    this.populateAttribute();
    this.populateSkills();
    this.populateLanguages();
    return this.character;
  }

  populateCharacter() {
    this.character.name = 'Your Excellence';
    this.character.class = 'Wizard';
    this.character.level = 6;
    this.character.background = 'Sage';
    this.character.race = 'tiefling';
    this.character.alignment = Alignment.ChaoticNeutral;
    this.character.experiencePoints = 150;
    this.character.playerName = 'Jen';
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

  populateLanguages() {
    this.character.languages = [];
    this.character.languages.push('');
  }



}
