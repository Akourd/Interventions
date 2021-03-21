import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenomComponent } from './prenom.component';

describe('PrenomComponent', () => {
  let component: PrenomComponent;
  let fixture: ComponentFixture<PrenomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrenomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
