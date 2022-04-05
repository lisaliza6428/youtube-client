import { Component, Input } from '@angular/core';
import { IVideoData  } from '../../../app/models/response';
import  json  from '../../../app/models/data.json';
const videoData = json.items;

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent {
  @Input() sortedViews: boolean;

  @Input() sortedDates: boolean;

  @Input() searchInput: string;

  videos: IVideoData[] = videoData;


  constructor() {
  }

  ngOnChanges(changes: any){
    console.log(changes);
    for (let prop in changes) {
      //console.log(prop);
      if (prop === 'sortedViews' ){
        this.sortViewsCount();
      }
      if (prop === 'sortedDates' ){
        this.sortDate();
      }
      if (prop === 'searchInput' ){
        this.searchFilter();
      }
    } 
  }

  ngOnInit(): void {
  }

  sortViewsCount() {
    if (this.sortedViews) {
      this.videos = this.videos.sort((a: IVideoData, b: IVideoData) => +a.statistics.viewCount - +b.statistics.viewCount);
    } else {
      this.videos = this.videos.sort((a: IVideoData, b: IVideoData) => +b.statistics.viewCount - +a.statistics.viewCount);
    }
  }

  sortDate() {
    if (this.sortedDates){
      this.videos = this.videos.sort((a: IVideoData, b: IVideoData) => +new Date(a.snippet.publishedAt).getTime() - +new Date(b.snippet.publishedAt).getTime()).sort();
    } else {
      this.videos = this.videos.sort((a: IVideoData, b: IVideoData) => +new Date(b.snippet.publishedAt).getTime() - +new Date(a.snippet.publishedAt).getTime()).sort();
    }
  }

  searchFilter(){
    this.videos = [...videoData].filter(x => x.snippet.title.toLowerCase().includes(this.searchInput));
  }
}



