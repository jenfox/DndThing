import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { Alignment, AttributeTypes, Skills } from '../models/characterUtil';
import { Attribute } from '../models/attribute';
import { Skill } from '../models/skill';
import { Weapon } from '../models/weapon';

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
    this.populateStatus();
    this.populateAttacks();
    this.populateEquipment();
    this.populatePersonality();
    this.populateFeatures();
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
    this.character.skills.push(new Skill(Skills.Acrobatics, 2, AttributeTypes.Dexterity));
    this.character.skills.push(new Skill(Skills.AnimalHandling, 2, AttributeTypes.Wisdom));
    this.character.skills.push(new Skill(Skills.Arcana, 7, AttributeTypes.Intelligence, true));
    // this.character.skills[2].selected = true;
    this.character.skills.push(new Skill(Skills.Athletics, 1, AttributeTypes.Strength));
    this.character.skills.push(new Skill(Skills.Deception, 4, AttributeTypes.Charisma));
    this.character.skills.push(new Skill(Skills.History, 7, AttributeTypes.Intelligence));
    this.character.skills[5].selected = true;
    this.character.skills.push(new Skill(Skills.Insight, 5, AttributeTypes.Wisdom));
    this.character.skills[6].selected = true;
    this.character.skills.push(new Skill(Skills.Intimidation, 4, AttributeTypes.Charisma));
    this.character.skills.push(new Skill(Skills.Investigation, 7, AttributeTypes.Intelligence));
    this.character.skills[8].selected = true;
    this.character.skills.push(new Skill(Skills.Medicine, 2, AttributeTypes.Wisdom));
    this.character.skills.push(new Skill(Skills.Nature, 4, AttributeTypes.Intelligence));
    this.character.skills.push(new Skill(Skills.Perception, 2, AttributeTypes.Wisdom));
    this.character.skills.push(new Skill(Skills.Performance, 4, AttributeTypes.Charisma));
    this.character.skills.push(new Skill(Skills.Persuasion, 4, AttributeTypes.Charisma));
    this.character.skills.push(new Skill(Skills.Religion, 4, AttributeTypes.Intelligence));
    this.character.skills.push(new Skill(Skills.SlightOfHand, 2, AttributeTypes.Dexterity));
    this.character.skills.push(new Skill(Skills.Stealth, 2, AttributeTypes.Dexterity));
    this.character.skills.push(new Skill(Skills.Survival, 2, AttributeTypes.Wisdom));
  }

  populateLanguages() {
    this.character.languages = [];
    this.character.languages.push('Deep Speech');
    this.character.languages.push('Abyssal');
    this.character.languages.push('Draconic');
    this.character.languages.push('Celestial');
    this.character.languages.push('Infernal');
    this.character.languages.push('Halfling');
    this.character.languages.push('Common');
  }

  populateStatus() {
    this.character.armorClass = 12;
    this.character.initiative = 2;
    this.character.speed = 30;
    this.character.hitPointMaximum = 42;
    this.character.currentHitPoints = 42;
    this.character.temporaryHitPoints = 0;
    this.character.hitDiceTotal = 6;
    this.character.hitDiceType = 'd6';
    this.character.deathSavesSuccesses = 0;
    this.character.deathSavesFailures = 0;
  }

  populateAttacks() {
    this.character.attacks = [];
    this.character.attacks.push(new Weapon('Quarterstaff', 3, 'bludgeoning'));
    this.character.attacks.push(new Weapon('Crossbow', 5, 'piercing'));
    this.character.attacks.push(new Weapon('Arcane Focus', 1, 'spell?'));
  }

  populateEquipment() {
    this.character.equipment = [];
    this.character.equipment.push('SpellBook');
    this.character.equipment.push('Explorer\'s Pack');
    this.character.equipment.push('Gold');
  }

  populatePersonality() {
    this.character.personalityTraits = [];
    this.character.personalityTraits.push('Speaks slow...ly to i.d.i.o.t.s (which everyone is)');
    this.character.ideals = [];
    this.character.ideals.push('Knowledge: the path to power and self-improvement is through knowledge');
    this.character.bonds = [];
    this.character.bonds.push('I sold soul for knowledge');
    this.character.flaws = [];
    this.character.flaws.push('I speak w/o thinking, invariably insulting others');

  }

  populateFeatures() {
    this.character.featuresAndTraits = [];
    this.character.featuresAndTraits.push('Swim Speed 30');
    this.character.featuresAndTraits.push('Amphibious');
    this.character.featuresAndTraits.push('Unfathomable Minds');
  }

}
