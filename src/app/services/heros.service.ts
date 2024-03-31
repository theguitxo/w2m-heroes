import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Hero } from "../models/hero.model";
import { APIResponse } from "../models/api.model";


@Injectable()
export class HeroService {
  private http = inject(HttpClient);
  private url = '/api/';

  /**
   * Filters the data of heros according a string
   * @param filter string for filter the alias of the hero
   * @returns Observable with an array of heros
   */
  getHeroData(filter: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.url}${filter}`);
  }

  /**
   * Removes a super hero
   * @param id identificator of the hero to delete
   * @returns Observable with information about the result of the operation
   */
  deleteHero(id: number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${this.url}${id}`);
  }

  /**
   * Creates or updates a super hero
   * @param hero information about the hero to save
   * @returns Observable with information about the result of the operation
   */
  saveHero(hero: Hero): Observable<APIResponse> {
    if (hero.id) {
      return this.http.put<APIResponse>(`${this.url}${hero.id}`, hero);
    } else {
      return this.http.post<APIResponse>(this.url, hero);
    }
  }
}
