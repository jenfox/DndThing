import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterSheetComponent } from './character/character-sheet/character-sheet.component';
import { SpellSheetComponent } from './character/spell-sheet/spell-sheet.component';

const routes: Routes = [
  {
    path: 'character',
    component: CharacterSheetComponent
  },
  {
    path: 'spell',
    component: SpellSheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
