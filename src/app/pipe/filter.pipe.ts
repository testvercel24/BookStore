import { Pipe, PipeTransform } from '@angular/core';
import { ReviewDetails } from '../helpers/book';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(reviews: ReviewDetails[], title: string): any {
    return reviews.filter(
      (review) => review.bookName.toLowerCase() === title.toLowerCase()
    );
  }
}
