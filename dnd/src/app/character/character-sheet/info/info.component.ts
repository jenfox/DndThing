import { Component, OnInit } from '@angular/core';
import { Alignment } from '../../characterUtil';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  name = 'Your Excellence';
  class = 'Wizard';
  level = 6;
  background = 'Sage';
  race = 'tiefling';
  alignment = Alignment.ChaoticNeutral;
  exp = 150;
  playerName = 'Jen';

  constructor() { }

  ngOnInit() {
  }

}
