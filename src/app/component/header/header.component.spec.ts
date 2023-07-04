import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should toggle the nav bar', () => {
    expect(component.isNavbarOpen).toBeFalse();
    component.toggleNavbar();
    expect(component.isNavbarOpen).toBeTrue();
    component.toggleNavbar();
  });
  it('should emit searchKey', () => {
    let searchText: string = 'book 1';
    component.searchForm.get('searchText')!.setValue(searchText);
    spyOn(component.searchKey, 'emit');
    component.handelSearch();
    expect(component.searchKey.emit).toHaveBeenCalledWith(searchText);
  });
  it('should navigate to home page', () => {
    spyOn(router, 'navigate');
    component.navigateToHome();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });
});
