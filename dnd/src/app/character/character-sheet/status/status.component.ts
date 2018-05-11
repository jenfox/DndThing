import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

  ngOnInit() {
  }

  changeHP(delta: number) {
    if(this.character.currentHitPoints == this.character.hitPointMaximum && delta > 0){return;}
    else if(this.character.currentHitPoints == 0 && delta < 0){return;}
      this.character.currentHitPoints += delta;    
  };

}
