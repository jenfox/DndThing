import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetSpellsService {

  baseURL = 'http://dnd5eapi.co/api/';

  constructor(private http: HttpClient) {}

  getWizardSpells() {
    return this.http.get('http://dnd5eapi.co/api/spells/wizard/').subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log('Can\'t get spells');
      }
    );
  }

}
