import { ReviewDetails } from '../helpers/book';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;
  beforeEach(() => {
    pipe = new FilterPipe();
  });
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return the reviews for particular book', () => {
    const review: ReviewDetails[] = [
      { bookName: 'book 1', name: 'name 1', review: '', rating: 2 },
      { bookName: 'book 2', name: 'name 1', review: '', rating: 2 },
      { bookName: 'book 3', name: 'name 1', review: '', rating: 2 },
    ];
    const result: ReviewDetails[] = [
      { bookName: 'book 1', name: 'name 1', review: '', rating: 2 },
    ];
    let title = 'Book 1';
    let filterPipe = pipe.transform(review, title);
    expect(filterPipe).toEqual(result);
  });
});
