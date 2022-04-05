import { Pipe, PipeTransform } from '@angular/core';
import { IVideoData  } from '../../app/models/response';

@Pipe({
  name: 'sortDates',
})
export class SortDatesPipe implements PipeTransform {

  transform(data: IVideoData[], value: boolean): IVideoData[] {
    if (value){
      return  [...data].sort((a: IVideoData, b: IVideoData) => +new Date(a.snippet.publishedAt).getTime() - +new Date(b.snippet.publishedAt).getTime()).sort();
    } else {
      return [...data].sort((a: IVideoData, b: IVideoData) => +new Date(b.snippet.publishedAt).getTime() - +new Date(a.snippet.publishedAt).getTime()).sort();
    }
  }
}
