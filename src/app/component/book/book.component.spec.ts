import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from './book.component';
import { HeaderComponent } from '../header/header.component';
import { FilterPipe } from 'src/app/pipe/filter.pipe';
import { BookDetails, ReviewDetails } from 'src/app/helpers/book';
import { ReactiveFormsModule } from '@angular/forms';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  const book: BookDetails = {
    title: 'title',
    description: 'descrption',
    author: 'author',
    image: 'image',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent, HeaderComponent, FilterPipe],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    const mockHistory = { state: { book: book } };
    spyOnProperty(history, 'state').and.returnValue(mockHistory.state);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the rating when productRating is called', () => {
    const rate = 4;
    component.productRating(rate);
    expect(component.rating).toEqual(rate);
  });
  it('should add a new review to the reviewDetails and save it in localStorage when onSubmit is called', () => {
    const name = 'name 1';
    const review = 'review';
    component.book = book;
    component.reviewForm.get('name')?.setValue(name);
    component.reviewForm.get('review')?.setValue(review);
    component.rating = 4;
    spyOn(localStorage, 'setItem');
    component.onSubmit(book);
    expect(component.reviewDetails).toEqual([
      {
        bookName: book.title,
        name: name,
        review: review,
        rating: component.rating,
      },
    ]);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'review',
      JSON.stringify(component.reviewDetails)
    );
  });
});
