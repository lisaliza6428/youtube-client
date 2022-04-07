/* eslint-disable import/named */
import { Pipe, PipeTransform } from '@angular/core';
import { VideoDataModel  } from '../models/response';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(data: VideoDataModel[], input: string): VideoDataModel[] {
    return  [...data].filter(x => x.snippet.title.toLowerCase().includes(input));
  }
}
