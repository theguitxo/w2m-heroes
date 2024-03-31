import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListComponent } from './hero-list.component';
import { HeroState } from '../../../../models/state.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { initialState } from '../../../../store/app.state';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonComponentsModule } from '../../../../components/common-components.module';
import { InputFilterModule } from '../input-filter/input-filter.module';
import { HeroListModule } from './hero-list.module';
import { getHeroList, hasHeroList } from '../../../../store/app.selectors';
import { Hero } from '../../../../models/hero.model';

const heros: Hero[] = [
  {
    "id": 1,
    "real_name": "Bruce Wayne",
    "alias": "batman",
    "group": "Liga de la Justicia",
    "planet_of_origin": "Tierra",
    "powers": ["Inteligencia superior", "Gran habilidad en combate cuerpo a cuerpo", "Tecnología avanzada"],
    "weapons": ["Batarangs", "Traje de Bat", "Batimóvil"]
  },
  {
    "id": 2,
    "real_name": "Clark Kent",
    "alias": "superman",
    "group": "Liga de la Justicia",
    "planet_of_origin": "Krypton",
    "powers": ["Super fuerza", "Vuelo", "Visión calorífica", "Súper velocidad", "Invulnerabilidad"],
    "weapons": []
  }
];

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;
  let store: MockStore<HeroState>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroListComponent
      ],
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
      providers: [
        provideMockStore({
          initialState: initialState,
          selectors: [
            {
              selector: hasHeroList,
              value: false
            },
            {
              selector: getHeroList,
              value: []
            }
          ]
        }),
      ]
    });

    store = TestBed.inject(MockStore);
    store.refreshState();
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the table with the hero list', () => {
    store.overrideSelector(hasHeroList, true);
    store.refreshState();

    fixture.detectChanges();

    const table = fixture.debugElement.nativeElement.querySelector('table');
    expect(table).not.toBeNull();
  });

  it('should show two lines in the heros list', () => {
    store.overrideSelector(hasHeroList, true);
    store.overrideSelector(getHeroList, heros);

    store.refreshState();

    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('.mat-mdc-row'));
    expect(rows.length).toBe(2);
  });
});
