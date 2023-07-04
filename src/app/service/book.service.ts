import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { BookDetails } from '../helpers/book';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  subcription!: Subscription;
  private apiUrl = 'https://serverlessnext-1-testvercel24.vercel.app/api/hello';
  private bookSubject: BehaviorSubject<BookDetails[]> = new BehaviorSubject<
    BookDetails[]
  >([]);
  public books$: Observable<BookDetails[]> = this.bookSubject.asObservable();
  constructor(private http: HttpClient) {}

  getBookDetails() {
    console.log('api call');
    this.http.get(this.apiUrl).subscribe({
      next: (data: any) => {
        this.bookSubject.next(data);
      },
    });
  }
}
