import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from '../../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public constructor(private db: AngularFirestore){}
  public loadAllCategory(): Observable<Category[]> {
    return this.db.collection('categories')
      .snapshotChanges().pipe(
        map(snaps => {
          return snaps.map(snap => {
            return <Category> { id: snap.payload.doc.id, ...snap.payload.doc.data() as Category };
          })
        })
      );
  }
  public getACategory(category: string): Observable<Category[]> {
    return this.db.collection(category)
      .snapshotChanges().pipe(
        map(snaps => {
          return snaps.map(snap => {
            return <Category> { ...snap.payload.doc.data() as Category };
          })
        })
      );
  }
}
