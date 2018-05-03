import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '@angular/compiler';

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.css']
})
export class SavingThrowsComponent implements OnInit {

  @Input() savingThrows: Attribute[];

  constructor() { }

  ngOnInit() {
  }

}
