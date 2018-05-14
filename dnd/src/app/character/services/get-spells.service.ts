import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetSpellsService {

  baseURL = 'http://dnd5eapi.co/api/';

  constructor(private http: HttpClient) { }

  getClassSpells(className: string) {
    return this.http.get(this.baseURL + 'spells/' + className + '/');
  }

  getSingleSpell(url: string) {
    return this.http.get(url);
  }

}
