import { Injectable } from '@angular/core';
import{
  Firestore,
  collection,
  collectionData,
  addDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Bet } from '../../model/Bet';


@Injectable({
  providedIn: 'root'
})
export class BetService {
  private betCollection;

  constructor(private firestore: Firestore) {
    this.betCollection = collection(this.firestore,'bet');
   }

  getBet(): Observable<Bet[]>{
    return collectionData(this.betCollection, {
      idField: 'id',
    }) as Observable<Bet[]>;
  }
}
