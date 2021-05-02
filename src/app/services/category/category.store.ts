import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';

import { CategoryService } from './category.service';

import { Category } from '../../model/category';
import { OnlineStorage } from '../../model/online-storage';

@Injectable({
  providedIn: 'root'
})
export class CategoryStore {
  
  private subject$ = new BehaviorSubject<OnlineStorage[]>([]);
  
  public getSubject$: Observable<OnlineStorage[]> = this.subject$.asObservable();

  public constructor(private categoryService: CategoryService){}
  public getACategory(category: string){
    this.categoryService.getACategory(category).pipe(
      tap(category => this.subject$.next(category)),
    ).subscribe();
  }
}
