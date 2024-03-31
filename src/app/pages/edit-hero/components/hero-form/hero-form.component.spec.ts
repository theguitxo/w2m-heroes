import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { HeroFormComponent } from './hero-form.component';
import { HeroState } from '../../../../models/state.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../../../store/app.state';
import { BrowserModule, By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

describe('HeroFormComponent', () => {
  let component: HeroFormComponent;
  let fixture: ComponentFixture<HeroFormComponent>;
  let store: MockStore<HeroState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroFormComponent],
      imports: [
        BrowserModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatChipsModule,
        MatIconModule,
        MatButtonModule
      ],
      providers: [
        provideMockStore({
          initialState: initialState
        }),
      ]
    });

    store = TestBed.inject(MockStore);
    store.refreshState();
    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable the save button when form is valid', () => {
    component.heroForm.setValue({
      id: 1,
      alias: 'alias',
      group: 'group',
      planet_of_origin: 'planet',
      real_name: 'real_name',
      powers: [],
      weapons: []
    });

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');

    expect(button.disabled).toBeFalsy();
  });

  it('should alias must be required', () => {
    component.heroForm.controls.real_name.setValue('real name');
    component.heroForm.controls.planet_of_origin.setValue('planet of origin');

    expect(component.heroForm.valid).toBeFalsy();
  });

  it('should show error when required field has not value', () => {
    component.heroForm.controls.real_name.setValue('real name');
    component.heroForm.controls.planet_of_origin.setValue('planet of origin');

    const input = fixture.nativeElement.querySelectorAll('input')[0];
    
    input.dispatchEvent(new Event('input'));

    component.heroForm.markAllAsTouched();

    fixture.detectChanges();
    
    const error = fixture.debugElement.query(By.directive(MatError))?.nativeElement;
    expect(error?.textContent).toContain('El campo alias es requerido');
  });
});
