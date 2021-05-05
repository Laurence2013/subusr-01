import { Component, OnInit } from '@angular/core';

import { CategoryStore } from '../services/category/category.store';

import { OnlineStorageDetails } from '../model/online-storage-details';

import { Observable } from 'rxjs';
import { tap, map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public resultsStorageDetails$: Observable<OnlineStorageDetails[]> | undefined;

  public constructor(private categoryStore: CategoryStore){}
  public ngOnInit(){
    this.resultsStorageDetails$ = this.categoryStore.getSubjectStorageDetails$;
    this.resultsStorageDetails$.pipe(
      tap(result => console.log(result))
    ).subscribe()
  }
}
