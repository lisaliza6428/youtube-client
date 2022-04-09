/* eslint-disable import/named */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './core/pages/error-page/error-page.component';
import { DetailesPageComponent } from './youtube/pages/detailes-page/detailes-page.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: 'main',
    pathMatch: 'full',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'main/video/:id',
    pathMatch: 'full',
    component: DetailesPageComponent,
    canActivate: [AuthGuard],
  }, 
  {
    path: 'auth',
    pathMatch: 'full',
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
