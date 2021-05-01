import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';

import { CategoryService } from './category.service';

import { Category } from '../../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryStore {
  
  private subject = new BehaviorSubject<Category[]>([]);
  
  public category$: Observable<Category[]> | undefined;
  public getSubject$: Observable<Category[]> = this.subject.asObservable();

  public constructor(private categoryService: CategoryService){}
  public getACategory(category: string){
    this.categoryService.getACategory(category).pipe(
      map(category => {
        //this.subject.next(category)
        const arr = Object.entries(category);
        for(let i = 0; i < arr.length; i++){
          const arr2: any = Object.entries(arr[i])[1][1];

          console.log(arr2[0]);

        }
      })
    ).subscribe();
  }
}
