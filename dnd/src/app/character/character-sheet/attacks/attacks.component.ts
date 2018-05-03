import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../../models/weapon';

@Component({
  selector: 'app-attacks',
  templateUrl: './attacks.component.html',
  styleUrls: ['./attacks.component.css']
})
export class AttacksComponent implements OnInit {

  @Input() attacks: Weapon[];

  constructor() { }

  ngOnInit() {
  }

}
