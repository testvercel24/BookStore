import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDetails, ReviewDetails } from 'src/app/helpers/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  book!: BookDetails;
  rating: number = 0;
  reviewDetails: ReviewDetails[] = [];
  reviewForm!: FormGroup;
  initialUrl: string = '../../../assets/star.png';
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group({
      name: ['', Validators.required],
      review: [''],
    });
    this.book = history.state.book;
    console.log(this.book);
    const storedReview = localStorage.getItem('review');
    if (storedReview) {
      this.reviewDetails = JSON.parse(storedReview);
    }
    console.log(this.reviewDetails);
  }
  productRating(rate: number) {
    this.rating = rate;
  }
  onSubmit(book: BookDetails) {
    const name = this.reviewForm.get('name')?.value;
    const review = this.reviewForm.get('review')?.value;
    console.log('submitted', name, review);
    this.reviewDetails.push({
      bookName: book.title,
      name: this.reviewForm.get('name')?.value,
      review: this.reviewForm.get('review')?.value,
      rating: this.rating,
    });
    localStorage.setItem('review', JSON.stringify(this.reviewDetails));
  }
}
