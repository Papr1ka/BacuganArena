import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoNotfoundComponent } from './co-notfound.component';

describe('CoNotfoundComponent', () => {
  let component: CoNotfoundComponent;
  let fixture: ComponentFixture<CoNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoNotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
