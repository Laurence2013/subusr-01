import { Component, OnInit } from '@angular/core';

import { CategoryStore } from '../services/category/category.store';

import { Category } from '../model/category';

import { Observable } from 'rxjs';

import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public results$: Observable<[]> | undefined;

  public constructor(private categoryStore: CategoryStore){}
  public ngOnInit(){
    this.categoryStore.getSubject$;
  }
}
