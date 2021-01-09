import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoNavComponent } from './co-nav.component';

describe('CoNavComponent', () => {
  let component: CoNavComponent;
  let fixture: ComponentFixture<CoNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
