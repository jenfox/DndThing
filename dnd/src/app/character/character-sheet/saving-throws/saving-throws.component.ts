import { Component, OnInit, Input } from '@angular/core';
import { Abilities } from '../../models/abilities';

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.css']
})
export class SavingThrowsComponent implements OnInit {

  @Input() savingThrows: Abilities[];

  constructor() { }

  ngOnInit() {
  }

}
