import { Component, OnInit } from '@angular/core';
import { GetCharacterService } from '../../services/get-character.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-spell-header',
  templateUrl: './spell-header.component.html',
  styleUrls: ['./spell-header.component.css']
})
export class SpellHeaderComponent implements OnInit {

  character: Character;

  constructor(private characterService: GetCharacterService) {
    this.character = this.characterService.makeCharacter();
  }

  ngOnInit() {
  }

}
