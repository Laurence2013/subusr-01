import { Component, OnInit } from '@angular/core';

import { CategoryStore } from '../services/category/category.store';

import { OnlineStorage } from '../model/online-storage';

import { Observable } from 'rxjs';
import { tap, map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public results$: Observable<OnlineStorage[]> | undefined;

  public constructor(private categoryStore: CategoryStore){}
  public ngOnInit(){
    this.results$ = this.categoryStore.getSubject$;
  }
}
