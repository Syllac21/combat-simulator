import { Injectable } from '@angular/core';
import{
  Firestore,
  collection,
  collectionData
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Bet } from '../../model/Bet';


@Injectable({
  providedIn: 'root'
})
export class BetService {
  private betsCollection;

  constructor(private firestore: Firestore) {
    this.betsCollection = collection(this.firestore,'bet');
   }

  getBet(): Observable<Bet[]>{
    return collectionData(this.betsCollection, { idField: 'id' }) as Observable<Bet[]>;
  }
}
