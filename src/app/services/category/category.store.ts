import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, tap, mergeMap } from 'rxjs/operators';

import { CategoryService } from './category.service';

import { Category } from '../../model/category';
import { OnlineStorageDetails, OnlineStorageApps } from '../../model/online-storage-details';

@Injectable({
  providedIn: 'root'
})
export class CategoryStore {
  
  private subjectStorageDetails$  = new BehaviorSubject<OnlineStorageDetails[]>([]);

  public getSubjectStorageDetails$: Observable<OnlineStorageDetails[]>  = this.subjectStorageDetails$.asObservable();

  public constructor(private categoryService: CategoryService){}
  /*public getACategoryDetail(category: string){
    this.categoryService.getACategoryDetail(category).pipe(
      tap(results => this.subjectStorageDetails$.next(results))
    ).subscribe(); 
  }*/
  async getACategoryDetail(category: string, online_storage_apps: string){
    await this.categoryService.getOnlineStorageApps(online_storage_apps).pipe(
      map(apps => { 
        return apps.map(app => { 
          return app.app 
        })}
      ),
      mergeMap(result => {
        return this.categoryService.getACategoryDetail2(category, result[0]).pipe(
          tap(result => {return result})
        )
      }),
      tap(result => this.subjectStorageDetails$.next(result))
    ).subscribe();
  }
}
