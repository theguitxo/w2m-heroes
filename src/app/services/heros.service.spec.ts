import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { HeroService } from "./heros.service";
import { Hero } from '../models/hero.model';
import { APIResponse } from '../models/api.model';

const resultMock = [
  {
    "id": 1,
    "real_name": "Bruce Wayne",
    "alias": "batman",
    "group": "Liga de la Justicia",
    "planet_of_origin": "Tierra",
    "powers": ["Inteligencia superior", "Gran habilidad en combate cuerpo a cuerpo", "Tecnología avanzada"],
    "weapons": ["Batarangs", "Traje de Bat", "Batimóvil"]
  }
];

const resultDelete = {
  result: 'OK'
}

const resultSave = {
  result: 'OK',
  data: {
    "id": 1,
    "real_name": "Bruce Wayne",
    "alias": "batman",
    "group": "Liga de la Justicia",
    "planet_of_origin": "Tierra",
    "powers": ["Inteligencia superior", "Gran habilidad en combate cuerpo a cuerpo", "Tecnología avanzada"],
    "weapons": ["Batarangs", "Traje de Bat", "Batimóvil"]
  }
}

describe('HeroService', () => {
  let service: HeroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HeroService
      ],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(HeroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get hero list must get data and use GET', () => {
    const url = `/api/batman`;

    service.getHeroData('batman').subscribe((res: Hero[]) => {
      expect(res).toEqual(resultMock);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');

    req.flush(resultMock);
  });

  it('delete hero must use DELETE', () => {
    const url = `/api/1`;

    service.deleteHero(1).subscribe((res: APIResponse) => {
      expect(res).toEqual(resultDelete);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('DELETE');

    req.flush(resultDelete);
  });

  it('update hero must use PUT', () => {
    const url = `/api/1`;

    service.saveHero(resultMock[0]).subscribe((res: APIResponse) => {
      expect(res).toEqual(resultSave);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('PUT');
    req.flush(resultSave);
  });

  it('new hero must use POST', () => {
    const url = `/api/`;

    service.saveHero({
      ...resultMock[0],
      id: undefined
    }).subscribe((res: APIResponse) => {
      expect(res).toEqual(resultSave);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    req.flush(resultSave);
  });
})
