import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { Alignment } from '../models/characterUtil';
import { GetCharacterService } from '../services/get-character.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  character: Character;

  constructor( characterService: GetCharacterService) {
    this.character = characterService.makeCharacter();
  }

  ngOnInit() {
  }


}
