import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesPageContentComponent } from './categories-page-content.component';

describe('CategoriesPageContentComponent', () => {
  let component: CategoriesPageContentComponent;
  let fixture: ComponentFixture<CategoriesPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
