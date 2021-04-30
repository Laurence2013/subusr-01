import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultsComponent } from './results/results.component';
import { SearchOrResultComponent } from './search-or-result/search-or-result.component';

const routes: Routes = [
  { path: '', component: SearchOrResultComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
