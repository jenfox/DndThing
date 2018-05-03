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

}
