import { Pipe, PipeTransform } from '@angular/core';
import { IVideoData  } from '../../app/models/response';

@Pipe({
  name: 'sortViews',
})
export class SortViewsPipe implements PipeTransform {

  transform(data: IVideoData[], value: boolean): IVideoData[] {
    if (value){
      return  [...data].sort((a: IVideoData, b: IVideoData) => +a.statistics.viewCount - +b.statistics.viewCount);
    } else {
      return [...data].sort((a: IVideoData, b: IVideoData) => +b.statistics.viewCount - +a.statistics.viewCount);
    }
  }

}
