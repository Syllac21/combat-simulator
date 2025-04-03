import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { Bet } from '../../model/Bet';
import { BetService } from '../../services/bet/bet.service';

@Component({
  standalone: true,
  selector: 'app-bets',
  imports: [
    TableModule,
    ButtonModule,
    DynamicDialogModule
  ],
  templateUrl: './bets.component.html',
  styleUrl: './bets.component.scss',
  providers:[DialogService]
})
export class BetsComponent {
bets: Bet[] = [];
ref: DynamicDialogRef | undefined;
constructor(
  public dialogService: DialogService,
  private betService: BetService,
){
  this.betService.getBet().subscribe((data)=>{
    this.bets = data;
  })
}
}
