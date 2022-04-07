import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { ErrorPageComponent } from './core/pages/error-page/error-page.component';
import { DetailesPageComponent } from './youtube/pages/detailes-page/detailes-page.component';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'detailes',
    pathMatch: 'full',
    component: DetailesPageComponent,
  },
  {
    path: 'auth',
    component: LoginPageComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  { path: '**',
    pathMatch: 'full',
    component: ErrorPageComponent },
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
