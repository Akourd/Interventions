import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ProblemeComponent } from './probleme.component';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('champ prenom du probleme ne doit pas comporter 2 caracteres', () => {
    let errors = {};
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(2));
    errors = zone.errors || {};
    expect(errors['minlength']).toBeTruthy();
  })

  it('champ prenom du probleme est valide avec 3 caracteres', () => {
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(3))
    expect(zone.valid).toBeTruthy();
  })

  it('champ prenom du probleme est valide avec 200 caracteres', () => {
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(200))
    expect(zone.valid).toBeTruthy();
  })

  it('champ prenom du probleme est invalide si il est vide', () => {
    let errors = {};
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue('');
    errors = zone.errors || {};
    expect(errors['required']).toBeTruthy();
  })

  it('champ prenom du probleme est valide avec 10 espaces', () => {
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue(' '.repeat(10));
    expect(zone.valid).toBeTruthy();
  })

  //  it('champ prenom du probleme est valide avec 2 espaces et 1 caractere', () => {
  //    let zone = component.problemeForm.controls['prenomProbleme'];
  //    zone.setValue(' '.repeat(2) + 'a');
  //    expect(zone.valid).toBeTruthy();
  //  })
});
