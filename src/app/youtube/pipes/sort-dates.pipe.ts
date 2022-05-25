/* eslint-disable import/named */
import { Pipe, PipeTransform } from '@angular/core';
import { VideoDataModel  } from '../models/response';

@Pipe({
  name: 'sortDates',
})
export class SortDatesPipe implements PipeTransform {

  transform(data: VideoDataModel[], value: string): VideoDataModel[] {
    if (value === 'asc'){
      return  [...data].sort((a: VideoDataModel, b: VideoDataModel) => +new Date(a.snippet.publishedAt).getTime() - +new Date(b.snippet.publishedAt).getTime()).sort();
    } else if (value === 'desc') {
      return [...data].sort((a: VideoDataModel, b: VideoDataModel) => +new Date(b.snippet.publishedAt).getTime() - +new Date(a.snippet.publishedAt).getTime()).sort();
    } else {
      return data;
    }
  }
}
