import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textRating'
})
export class TextRatingPipe implements PipeTransform {

  transform(value: number): string {
    return '★'.repeat(value);
  }

}
