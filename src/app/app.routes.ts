import { Routes } from '@angular/router';
import { AccueilComponent } from './page/accueil/accueil.component';
import { PersonnageComponent } from './page/personnage/personnage.component';
import { ClassementComponent } from './page/classement/classement.component';
import {SelectCharacterComponent} from './page/select-character/select-character.component'
import { FightComponent } from './page/fight/fight.component';
import { FightsComponent } from './page/fights/fights.component';
import { BetsComponent } from './page/bets/bets.component';
import { LeaderBoardComponent } from './page/leader-board/leader-board.component';
import { ProfileComponent } from './page/profile/profile.component';

export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'personnage', component:PersonnageComponent},
  { path: 'select-character', component:SelectCharacterComponent},
  { path: 'fight', component:FightComponent},
  { path: 'fights', component:FightsComponent},
  { path: 'bets', component:BetsComponent},
  { path: 'leaderBoard', component:LeaderBoardComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'classement', component:ClassementComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];
