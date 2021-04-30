import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrResultComponent } from './search-or-result.component';

describe('SearchOrResultComponent', () => {
  let component: SearchOrResultComponent;
  let fixture: ComponentFixture<SearchOrResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOrResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
