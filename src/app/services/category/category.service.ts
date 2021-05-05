import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Category } from '../../model/category';
import { OnlineStorageDetails, OnlineStorageApps } from '../../model/online-storage-details';

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
  public getACategoryDetail(category: string): Observable<OnlineStorageDetails[]> {
    return this.db.collection(category).snapshotChanges().pipe(
      map(snaps => {
        return snaps.map(snap => {
          return <OnlineStorageDetails> { ...snap.payload.doc.data() as OnlineStorageDetails }
        })
      })
    )
  }
  public getOnlineStorageApps(online_storage_apps: string): Observable<OnlineStorageApps[]> {
    return this.db.collection(online_storage_apps).snapshotChanges().pipe(
      map(snaps => {
        return snaps.map(snap => {
          return <OnlineStorageApps> {...snap.payload.doc.data() as OnlineStorageApps};
        })
      })
    );
  }
  public getACategoryDetail2(category: string, app: string): Observable<OnlineStorageDetails[]> {
    return this.db.collection(category).doc(app).collection(app).snapshotChanges().pipe(
      map(snaps => {
        return snaps.map(snap => {
          return <OnlineStorageDetails> { ...snap.payload.doc.data() as OnlineStorageDetails };
        })
      })
    )
  }
}
