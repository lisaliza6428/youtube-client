import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchInputComponent } from './header/search-input/search-input.component';
import { SettingsButtonComponent } from './header/settings-button/settings-button.component';
import { AuthenticationComponent } from './header/authentication/authentication.component';
import { FilteringBlockComponent } from './filtering-block/filtering-block.component';
import { FilteringButtonsComponent } from './filtering-block/filtering-buttons/filtering-buttons.component';
import { FilteringInputComponent } from './filtering-block/filtering-input/filtering-input.component';
import { ResultsBlockComponent } from './results-block/results-block.component';
import { ResultItemComponent } from './results-block/result-item/result-item.component';
import { CardBorderStyleDirective } from './directives/card-border-style.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortDatesPipe } from './pipes/sort-dates.pipe';
import { SortViewsPipe } from './pipes/sort-views.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsButtonComponent,
    AuthenticationComponent,
    FilteringBlockComponent,
    FilteringButtonsComponent,
    FilteringInputComponent,
    ResultsBlockComponent,
    ResultItemComponent,
    CardBorderStyleDirective,
    FilterPipe,
    SortDatesPipe,
    SortViewsPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
