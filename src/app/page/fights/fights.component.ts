import { Component } from '@angular/core';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { Fight } from '../../model/Fight';
import { FightsService } from '../../services/fights/fights.service';

@Component({
  standalone: true,
  selector: 'app-fights',
  imports: [
    TableModule,
    DynamicDialogModule
  ],
  templateUrl: './fights.component.html',
  styleUrl: './fights.component.scss',
  providers:[DialogService]
})
export class FightsComponent {
  fights: Fight[] = [];
  ref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService,
    private fightsService: FightsService
  ){
    this.fightsService.getFights().subscribe((data)=>{
      this.fights = data;
      console.log(data)
    })
  }
}
