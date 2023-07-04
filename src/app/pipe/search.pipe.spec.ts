import { BookDetails } from '../helpers/book';
import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  let pipe: SearchPipe;
  beforeEach(() => {
    pipe = new SearchPipe();
  });
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return the books with author or title name', () => {
    const books: BookDetails[] = [
      { title: 'Book 1', author: 'Author 1', description: '', image: '' },
      { title: 'Book 2', author: 'Author 2', description: '', image: '' },
    ];
    let search = 'book';
    let filteredBooks = pipe.transform(books, search);
    expect(filteredBooks).toEqual(books);
  });
});
