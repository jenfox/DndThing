import { Component, OnInit, Input } from '@angular/core';
import { Abilities } from '../../models/abilities';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input() abilities: Abilities[];

  constructor() {
  }

  ngOnInit() {
  }

}
