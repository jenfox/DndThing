import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '@angular/compiler';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input() attributes: Attribute[];

  constructor() {
  }

  ngOnInit() {
  }

}
