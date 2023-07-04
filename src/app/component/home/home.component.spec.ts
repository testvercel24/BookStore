import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BookService } from 'src/app/service/book.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from '../header/header.component';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BookDetails } from 'src/app/helpers/book';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  beforeEach(() => {
    let search = 'title';
    TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, SearchPipe],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [BookService],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the heandelSearch method and search key should be updated', () => {
    const search = 'test search';
    component.handelSearch(search);
    expect(component.searchKey).toEqual(search);
  });
  it('should navigate to the book details page', () => {
    const book: BookDetails = {
      title: 'book 1',
      author: 'author 1',
      description: 'description',
      image: '',
    };
    spyOn(router, 'navigate');
    component.gotToBookPage(book);
    expect(router.navigate).toHaveBeenCalledWith(
      ['api/book', encodeURIComponent(book.title)],
      { state: { book } }
    );
  });
});
