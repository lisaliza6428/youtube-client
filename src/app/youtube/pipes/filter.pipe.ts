/* eslint-disable import/named */
import { Pipe, PipeTransform } from '@angular/core';
import { VideoDataModel  } from '../models/response';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(data: any, input: string): VideoDataModel[] {
    if (!input || !data) return data;
    return  [...data].filter(x => x.snippet.title.toLowerCase().includes(input));
  }
}
