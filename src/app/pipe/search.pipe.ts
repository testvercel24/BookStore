import { Pipe, PipeTransform } from '@angular/core';
import { BookDetails } from '../helpers/book';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(books: BookDetails[], search: string): any[] {
    if (search === '' || search.length < 3) {
      return books;
    } else {
      return books.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
      );
    }
  }
}
