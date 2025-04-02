import { Routes } from '@angular/router';
import { AccueilComponent } from './page/accueil/accueil.component';
import { PersonnageComponent } from './page/personnage/personnage.component';
import { ClassementComponent } from './page/classement/classement.component';

export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'personnage', component:PersonnageComponent},
  { path: 'classement', component:ClassementComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];
