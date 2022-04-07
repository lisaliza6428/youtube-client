import { Component, Input } from '@angular/core';
import { VideoDataModel  } from '../../../models/response';
import  json  from '../../../models/data.json';
const videoData = json.items;

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent {
  @Input() sortedViews: string;

  @Input() sortedDates: string;

  @Input() searchInput: string;

  videos: VideoDataModel[] = [...videoData];


}



