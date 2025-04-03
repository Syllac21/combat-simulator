import { Component, OnDestroy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CharacterClass } from '../../enums/classe-type.enum';
import { Character } from '../../model/personnage';
import { CreatePersoComponent } from '../../modal/create-perso/create-perso.component';
import { DialogService, DynamicDialogRef, DynamicDialogModule } from 'primeng/dynamicdialog';

import { TableModule } from 'primeng/table';
import { CharacterService } from '../../services/character/character.service';


@Component({
  standalone: true,
  selector: 'app-personnage',
  imports: [
    TableModule,
    ButtonModule,
    DynamicDialogModule,
  ],
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.scss'],
  providers:[DialogService]
})
export class PersonnageComponent {
  characters: Character[] = [];
  ref: DynamicDialogRef | undefined;
  constructor(
    public dialogService: DialogService,
    private characterService: CharacterService
  ){
    this.characterService.getCharacters().subscribe((data)=>{
      this.characters = data;
    })
  };

  openEditPersonnage(){
    this.ref = this.dialogService.open(CreatePersoComponent,{
      header: 'creation d\'un perso',
      width:'250px',
    });
    this.ref.onClose.subscribe((character: Character) => {
      if (character) {
         this.characters.push(character);
         this.characterService.addCharacter(character);
      }
  });
}
rmCharacter(id:string){
  this.characterService.removeCharacter(id);
}



}
