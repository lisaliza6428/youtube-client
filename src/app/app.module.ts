import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SortService } from './core/services/sort.service';
import { VideoDataService } from './core/services/video-data.service';
import { LoginService } from './auth/services/login.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [SortService, LoginService, VideoDataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
