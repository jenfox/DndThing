import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  @Input() features: string[];

  constructor() { }

  ngOnInit() {
  }

}
