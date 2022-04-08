/* eslint-disable import/named */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { ErrorPageComponent } from './core/pages/error-page/error-page.component';
import { DetailesPageComponent } from './youtube/pages/detailes-page/detailes-page.component';
import { ResultsBlockComponent } from './youtube/components/results-block/results-block.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: ResultsBlockComponent,
    // loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
  },
  {
    path: ':id',
    pathMatch: 'full',
   // component: DetailesPageComponent,
   component: DetailesPageComponent,
  },
  {
    path: 'auth',
    component: LoginPageComponent,
  },
/*    { path: '**',
    pathMatch: 'full',
    component: ErrorPageComponent }, */
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
