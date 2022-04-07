import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsBlockComponent } from './components/results-block/results-block.component';
import { ResultItemComponent } from './components/results-block/result-item/result-item.component';
import { CardBorderStyleDirective } from './directives/card-border-style.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortDatesPipe } from './pipes/sort-dates.pipe';
import { SortViewsPipe } from './pipes/sort-views.pipe';

@NgModule({
  declarations: [
    ResultsBlockComponent,
    ResultItemComponent,
    CardBorderStyleDirective,
    FilterPipe,
    SortDatesPipe,
    SortViewsPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ResultsBlockComponent,
    ResultItemComponent,
  ],
})
export class YoutubeModule { }
