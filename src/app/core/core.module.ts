import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { AuthenticationComponent } from './components/header/authentication/authentication.component';
import { FilteringBlockComponent } from './components/filtering-block/filtering-block.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AdminPageComponent } from '../youtube/pages/admin-page/admin-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SettingsButtonComponent,
    AuthenticationComponent,
    FilteringBlockComponent,
    ErrorPageComponent,
    AdminPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    SettingsButtonComponent,
    AuthenticationComponent,
    FilteringBlockComponent,
  ],
})
export class CoreModule { }
