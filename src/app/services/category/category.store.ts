import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, from, of } from 'rxjs';
import { map, tap, mergeMap, concatMap } from 'rxjs/operators';

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
  async getACategoryDetail(category: string, online_storage_apps: string){
    await this.categoryService.getOnlineStorageApps(online_storage_apps).pipe(
      map(apps => {
        return apps.map(app => {
          return app.app
        })}
      ),
      mergeMap(result => {
        return from(result).pipe(
          concatMap(val => {return of(val).pipe(
            tap(val => {return val})
          )})
        )
      }),
      mergeMap(result => {
        return this.categoryService.getACategoryDetail2(category, result).pipe(
          tap(result => {return result})
        )
      }),
      tap(result => {
        this.subjectStorageDetails$.next(result);
      })
    ).subscribe();
  }
}
