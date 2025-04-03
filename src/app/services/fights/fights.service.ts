import { Injectable } from '@angular/core';
import{
  Firestore,
  collection,
  collectionData,
  addDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Fight } from '../../model/Fight';

@Injectable({
  providedIn: 'root'
})
export class FightsService {
  private fightsCollection;

  constructor(private firestore: Firestore) {
    this.fightsCollection = collection(this.firestore, 'fight');
   }

   getFights(): Observable<Fight[]>{
    return collectionData(this.fightsCollection,{
      idField: 'id',
    }) as Observable<Fight[]>;
   }
}
