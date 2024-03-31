import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { InputFilterComponent } from './input-filter.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HeroState } from '../../../../models/state.model';
import { BrowserModule, By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { initialState } from '../../../../store/app.state';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { getHeroData } from '../../../../store/app.actions';

describe('InputFilterComponent', () => {
  let component: InputFilterComponent;
  let fixture: ComponentFixture<InputFilterComponent>;
  let store: MockStore<HeroState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFilterComponent],
      imports: [
        BrowserModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([]),
        MatInputModule,
        ReactiveFormsModule
      ],
      providers: [
        provideMockStore({
          initialState: initialState,
        }),
      ]
    });

    store = TestBed.inject(MockStore);
    store.refreshState();
    fixture = TestBed.createComponent(InputFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call action on enter data in input field', fakeAsync(() => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    const input = fixture.nativeElement.querySelector('input');
    input.value = 'filter';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    tick(550);

    expect(dispatchSpy).toHaveBeenCalledWith(getHeroData({ filter: 'filter' }));
  }));
});
