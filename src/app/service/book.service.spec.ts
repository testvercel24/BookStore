import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BookDetails } from '../helpers/book';
describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService],
    });
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should update bookSubject with data from the API', () => {
    const mockData: BookDetails[] = [
      {
        title: 'Book 1',
        author: 'Author 1',
        description: 'Description 1',
        image: 'image1.jpg',
      },
      {
        title: 'Book 2',
        author: 'Author 2',
        description: 'Description 2',
        image: 'image2.jpg',
      },
    ];
    service.getBookDetails();
    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
    service.books$.subscribe((books) => {
      expect(books).toEqual(mockData);
    });
  });
});
