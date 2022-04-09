/* eslint-disable import/named */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsBlockComponent } from './components/results-block/results-block.component';

const routes: Routes = [
  {
    path: '',
    component: ResultsBlockComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule { }
