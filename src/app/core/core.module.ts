import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { AuthenticationComponent } from './components/header/authentication/authentication.component';
import { FilteringBlockComponent } from './components/filtering-block/filtering-block.component';
import { YoutubeModule } from '../youtube/youtube.module';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsButtonComponent,
    AuthenticationComponent,
    FilteringBlockComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    YoutubeModule,
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsButtonComponent,
    AuthenticationComponent,
    FilteringBlockComponent,
  ],
})
export class CoreModule { }
