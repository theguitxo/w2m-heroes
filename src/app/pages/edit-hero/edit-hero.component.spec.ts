import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeroComponent } from './edit-hero.component';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HeroState } from '../../models/state.model';
import { Router } from 'express';
import { initialState } from '../../store/app.state';
import { LoadingService } from '../../services/loader.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonComponentsModule } from '../../components/common-components.module';
import { HeroFormModule } from './components/hero-form/hero-form.module';
import { MatButtonModule } from '@angular/material/button';

describe('EditHeroComponent', () => {
  let component: EditHeroComponent;
  let fixture: ComponentFixture<EditHeroComponent>;
  let store: MockStore<HeroState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHeroComponent],
      imports: [
        BrowserModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([]),
        MatIconModule,
        CommonComponentsModule,
        HeroFormModule,
        MatButtonModule
      ],
      providers: [
        provideMockStore({
          initialState: initialState
        }),
        LoadingService
      ]
    });

    store = TestBed.inject(MockStore);
    store.refreshState();
    fixture = TestBed.createComponent(EditHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable navigation button when is loading', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    const loading = TestBed.get(LoadingService);

    loading.showLoading();
    fixture.detectChanges();

    expect(button.disabled).toBeTruthy();
  });

  it('should show the form when is not loading', () => {
    const loading = TestBed.get(LoadingService);

    loading.hideLoading();
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('app-hero-form');

    expect(form).not.toBeNull();
  });
});
