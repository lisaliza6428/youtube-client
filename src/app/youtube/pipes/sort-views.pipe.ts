/* eslint-disable import/named */
import { Pipe, PipeTransform } from '@angular/core';
import { VideoDataModel  } from '../models/response';

@Pipe({
  name: 'sortViews',
})
export class SortViewsPipe implements PipeTransform {

  transform(data: VideoDataModel[], value: string): VideoDataModel[] {
    if (value === 'asc'){
      return  [...data].sort((a: VideoDataModel, b: VideoDataModel) => +a.statistics.viewCount - +b.statistics.viewCount);
    } else if (value === 'desc') {
      return [...data].sort((a: VideoDataModel, b: VideoDataModel) => +b.statistics.viewCount - +a.statistics.viewCount);
    } else {
      return data;
    }
  }

}
