import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLivreComponent } from './view-livre.component';

describe('ViewLivreComponent', () => {
  let component: ViewLivreComponent;
  let fixture: ComponentFixture<ViewLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
