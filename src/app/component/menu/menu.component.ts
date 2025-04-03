import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  items: MenuItem[] = [
    {
      label: 'Accueil',
      icon: 'pi pi-home',
      routerLink: ['/accueil']
    },
    {
      label:'combat',
      icon: 'pi pi-bell',
      routerLink: ['/fight']
    },
    {
      label: 'Personnage',
      icon: 'pi pi-user',
      routerLink: ['/personnage']
    },
    {
      label: 'Paris',
      icon: 'pi pi-euro',
      routerLink: ['/bets']
    },
    {
      label: 'historique',
      icon : 'pi pi-euro',
      routerLink: ['fights']
    },
    {
      label: 'Classement',
      icon: 'pi pi-trophy',
      routerLink: ['/classement']
    },
  ];
}
