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
      routerLink: ['/accueil'],
    },
    {
      label: 'Personnage',
      icon: 'pi pi-user',
      routerLink: ['/personnage'],
    },
    {
      label: 'Classement',
      icon: 'pi pi-trophy',
      routerLink: ['/classement'],
    },
  ];
}
