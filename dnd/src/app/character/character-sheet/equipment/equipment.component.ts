import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  @Input() equipment: string[];

  constructor() { }

  ngOnInit() {
  }

}
