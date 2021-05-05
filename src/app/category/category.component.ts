import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from '../services/category/category.service';

import { CategoryStore } from '../services/category/category.store';

import { Category } from '../model/category';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
  public is_categories: boolean = false;

  public category$: Observable<Category[]> | undefined;

  public constructor(private categoryService: CategoryService, private categoryStore: CategoryStore, private router: Router){}
  public ngOnInit(){
    this.categories();
  }
  public get_category(category: string){
    const online_storage_apps: string = 'online-storage-apps';
    const categoryEdit: string = category.replace(' ', '-').toLowerCase();

    this.categoryStore.getACategoryDetail(categoryEdit, online_storage_apps);
    this.router.navigate(['/results']);
  }
  private categories(){
    this.category$ = this.categoryService.loadAllCategory()
      .pipe(
        tap(_ => this.is_categories = true)
      )
  }
}
