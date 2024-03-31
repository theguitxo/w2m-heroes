import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeroComponent } from './list-hero.component';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroListModule } from './components/hero-list/hero-list.module';
import { MatIconModule } from '@angular/material/icon';
import { CommonComponentsModule } from '../../components/common-components.module';
import { InputFilterModule } from './components/input-filter/input-filter.module';
import { MatButtonModule } from '@angular/material/button';
import { HeroState } from '../../models/state.model';
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { initialState } from '../../store/app.state';
import { LoadingService } from '../../services/loader.service';
import { Router } from '@angular/router';

describe('ListHeroComponent', () => {
  let component: ListHeroComponent;
  let fixture: ComponentFixture<ListHeroComponent>;
  let store: MockStore<HeroState>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([]),
        InputFilterModule,
        HeroListModule,
        MatButtonModule,
        MatIconModule,
        CommonComponentsModule
      ],
      declarations: [ListHeroComponent],
      providers: [
        provideMockStore({
          initialState: initialState
        }),
        {
          provide: LoadingService,
          useValue: jasmine.createSpyObj(['isLoading', 'showLoading', 'hideLoading'])
        }
      ]
    });

    store = TestBed.inject(MockStore);
    store.refreshState();
    fixture = TestBed.createComponent(ListHeroComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when clicks on button "Nuevo Super Heroe"', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    
    expect(navigateSpy).toHaveBeenCalledWith(['hero']);
  });
});
