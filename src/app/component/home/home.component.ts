import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookDetails } from 'src/app/helpers/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  subcription!: Subscription;
  books!: BookDetails[];
  searchKey: string = '';
  constructor(private bookService: BookService, private router: Router) {}
  ngOnInit(): void {
    this.subcription = this.bookService.books$.subscribe(
      (books: BookDetails[]) => {
        this.books = books;
      }
    );
    this.bookService.getBookDetails();
  }
  handelSearch(search: string) {
    this.searchKey = search;
  }
  gotToBookPage(book: BookDetails) {
    this.router.navigate(['api/book', encodeURIComponent(book.title)], {
      state: { book },
    });
  }
}
