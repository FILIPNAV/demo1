import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrehledComponent } from './prehled.component';

describe('PrehledComponent', () => {
  let component: PrehledComponent;
  let fixture: ComponentFixture<PrehledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrehledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrehledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
