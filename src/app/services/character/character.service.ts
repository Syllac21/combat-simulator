import { Injectable } from '@angular/core';
import{
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Character } from '../../model/personnage';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { deleteDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private charactersCollection;

  constructor(private firestore: Firestore) {
    this.charactersCollection = collection(this.firestore, 'characters');
   }

   getCharacters(): Observable<Character[]>{
    return collectionData(this.charactersCollection, {
      idField: 'id',
    }) as Observable<Character[]>;
   }

   addCharacter(character: Character) {
    return addDoc(this.charactersCollection, character);
   }

   removeCharacter(id: string){
    return deleteDoc(doc(this.firestore, `characters/${id}`));
   }
}
