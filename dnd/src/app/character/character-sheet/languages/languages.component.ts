import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  @Input() languages: string[];

  constructor() { }

  ngOnInit() {
  }

}
