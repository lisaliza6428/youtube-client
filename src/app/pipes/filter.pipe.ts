/* eslint-disable import/named */
import { Pipe, PipeTransform } from '@angular/core';
import { IVideoData  } from '../../app/models/response';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(data: IVideoData[], input: string): IVideoData[] {
    return  [...data].filter(x => x.snippet.title.toLowerCase().includes(input));
  }
}
