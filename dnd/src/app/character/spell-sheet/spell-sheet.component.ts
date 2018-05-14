import { GetSpellsService } from '../services/get-spells.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spell-sheet',
  templateUrl: './spell-sheet.component.html',
  styleUrls: ['./spell-sheet.component.css']
})
export class SpellSheetComponent implements OnInit {

  cantrips = new Array();
  level1 = new Array();
  level2 = new Array();
  level3 = new Array();
  level4 = new Array();
  level5 = new Array();
  level6 = new Array();
  level7 = new Array();
  level8 = new Array();
  level9 = new Array();

  parseSpells(className: string) {
    this.getSpells.getClassSpells(className).subscribe(
      (results: Results) => {
        for (let i = 0; i < results.count; i++) {
          this.pushSingleSpell(results.results[i].url);
        }
      },
      error => {
        console.log('Can\'t get spells');
      }
    );

    interface Results {
      count?: number;
      results?;
    }
  }

  pushSingleSpell(spellURL: string) {
    this.getSpells.getSingleSpell(spellURL).subscribe(
      (results: Results) => {
        switch (results.level) {
          case 1:
            this.level1.push(results);
            break;
          case 2:
            this.level2.push(results);
            break;
          case 3:
            this.level3.push(results);
            break;
          case 4:
            this.level4.push(results);
            break;
          case 5:
            this.level5.push(results);
            break;
          case 6:
            this.level6.push(results);
            break;
          case 7:
            this.level7.push(results);
            break;
          case 8:
            this.level8.push(results);
            break;
          case 9:
            this.level9.push(results);
            break;
          default:
            this.cantrips.push(results);
        }
      },
      error => {
        console.log('Can\t get single spell from ' + spellURL);
      }
    );

    interface Results {
      level: number;
    }
  }

  constructor(private getSpells: GetSpellsService) { }

  ngOnInit() {
    this.parseSpells('wizard');
  }

}
