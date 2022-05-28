import { Component } from '@angular/core';
import { SortService } from '../../services/sort.service';
import { VideoDataService } from '../../services/video-data.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LoginService } from '../../../auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  mainSearchInputUpdate = new Subject<string>();

  public mainSearchInput: string;

  constructor(
    public sortService: SortService,
    public dataService: VideoDataService,
    public loginService: LoginService) { 
    this.mainSearchInputUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        if (value.length >= 3){
          this.dataService.searchInputChange.next(value);
          this.dataService.getVideoData(value);
        }
      });
  }

  filtersIsVisible = false;

  toggleFilters(isVisible: boolean) {
    this.filtersIsVisible = isVisible;
  }

  sortedDates = '';

  changeDatesOrder(value: string) {
    this.sortedDates = value;
  }

  sortedViews = '';

  changeViewsOrder(value: string) {
    this.sortedViews = value;
  }

  searchInput = '';

  showSearchInput(searchInput: string) {
    this.searchInput = searchInput;
  }

}
