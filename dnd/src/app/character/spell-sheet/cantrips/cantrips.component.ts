import {Component, OnInit, Input} from '@angular/core';
import {Spell} from '../../models/spell';

@Component({
  selector: 'app-cantrips',
  templateUrl: './cantrips.component.html',
  styleUrls: ['./cantrips.component.css']
})
export class CantripsComponent implements OnInit {

  @Input() spells: Spell[];

  constructor() {}

  ngOnInit() {
  }

}
