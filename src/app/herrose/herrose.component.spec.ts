import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerroseComponent } from './herrose.component';

describe('HerroseComponent', () => {
  let component: HerroseComponent;
  let fixture: ComponentFixture<HerroseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerroseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerroseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
