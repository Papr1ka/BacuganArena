import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoNewsComponent } from './co-news.component';

describe('CoNewsComponent', () => {
  let component: CoNewsComponent;
  let fixture: ComponentFixture<CoNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
