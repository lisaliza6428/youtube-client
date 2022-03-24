import { NgModule } from '@angular/core';
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
import { VideoThumbnailComponent } from './results-block/result-item/video-thumbnail/video-thumbnail.component';
import { ViewsCountComponent } from './results-block/result-item/views-count/views-count.component';
import { LikesCountComponent } from './results-block/result-item/likes-count/likes-count.component';
import { DislikesCountComponent } from './results-block/result-item/dislikes-count/dislikes-count.component';
import { CommentsCountComponent } from './results-block/result-item/comments-count/comments-count.component';
import { VideoTitleComponent } from './results-block/result-item/video-title/video-title.component';
import { MoreButtonComponent } from './results-block/result-item/more-button/more-button.component';

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
    VideoThumbnailComponent,
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    VideoTitleComponent,
    MoreButtonComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
