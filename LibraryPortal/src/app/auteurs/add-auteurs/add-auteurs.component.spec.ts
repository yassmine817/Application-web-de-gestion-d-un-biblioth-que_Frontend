import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuteursComponent } from './add-auteurs.component';

describe('AddAuteursComponent', () => {
  let component: AddAuteursComponent;
  let fixture: ComponentFixture<AddAuteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAuteursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
