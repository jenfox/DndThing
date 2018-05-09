import { GetSpellsService } from '../services/get-spells.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spell-sheet',
  templateUrl: './spell-sheet.component.html',
  styleUrls: ['./spell-sheet.component.css']
})
export class SpellSheetComponent implements OnInit {

  constructor(private spells: GetSpellsService) { }

  ngOnInit() {
    this.spells.getWizardSpells();
  }

}
