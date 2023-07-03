import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchForm!: FormGroup;
  isNavbarOpen = false;
  @Output() searchKey = new EventEmitter<string>();
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchText: [''],
    });
  }
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  handelSearch() {
    const searchText = this.searchForm.get('searchText')!.value;
    this.searchKey.emit(searchText);
  }
}
