import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CharacterClass } from '../../enums/classe-type.enum';
import { Character } from '../../model/personnage';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  standalone:true,
  selector: 'app-create-perso',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    SelectModule,
    DialogModule,
  ],
  templateUrl: './create-perso.component.html',
  styleUrls: ['./create-perso.component.scss'],
})
export class CreatePersoComponent {
  visible: boolean = false;
  name: string = '';
  classes = Object.values(CharacterClass);
  health: number = 0;
  attack: number = 0;
  defense: number = 0;
  speed: number = 0;
  imageUrl: string = '';
  selectedClasse: CharacterClass = this.classes[0];

  constructor(public ref:DynamicDialogRef){}


  addCharacter() {

    const newCharacter: Character = {
      name: this.name,
      class: this.selectedClasse,
      health: this.health,
      attack: this.attack,
      defense: this.defense,
      speed: this.speed,
      imageUrl: this.imageUrl,
    };
    this.ref.close(newCharacter);


    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.selectedClasse = this.classes[0];
    this.health = 0;
    this.attack = 0;
    this.defense = 0;
    this.speed = 0;
    this.imageUrl = '';
  }

  closeDialog(){
    this.ref.close();
  }
}
