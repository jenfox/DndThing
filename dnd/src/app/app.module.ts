import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {StatsComponent} from './character/character-sheet/stats/stats.component';
import {SavingThrowsComponent} from './character/character-sheet/saving-throws/saving-throws.component';
import {SkillsComponent} from './character/character-sheet/skills/skills.component';
import {LanguagesComponent} from './character/character-sheet/languages/languages.component';
import {EquipmentComponent} from './character/character-sheet/equipment/equipment.component';
import {FeaturesComponent} from './character/character-sheet/features/features.component';
import {AttacksComponent} from './character/character-sheet/attacks/attacks.component';
import {StatusComponent} from './character/character-sheet/status/status.component';
import {PersonalityComponent} from './character/character-sheet/personality/personality.component';
import {CharacterSheetComponent} from './character/character-sheet/character-sheet.component';
import {InfoComponent} from './character/character-sheet/info/info.component';
import {GetCharacterService} from './character/services/get-character.service';
import {GetSpellsService} from './character/services/get-spells.service';
import {SpellSheetComponent} from './character/spell-sheet/spell-sheet.component';
import {SpellHeaderComponent} from './character/spell-sheet/spell-header/spell-header.component';
import {CantripsComponent} from './character/spell-sheet/cantrips/cantrips.component';


@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    CharacterSheetComponent,
    SavingThrowsComponent,
    SkillsComponent,
    LanguagesComponent,
    EquipmentComponent,
    FeaturesComponent,
    AttacksComponent,
    StatusComponent,
    PersonalityComponent,
    InfoComponent,
    SpellSheetComponent,
    SpellHeaderComponent,
    CantripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GetCharacterService,
    GetSpellsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
