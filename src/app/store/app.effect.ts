import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { deleteHero, getHeroData, HERO_ACTIONS, saveHero } from "./app.actions";
import { catchError, EMPTY, map, switchMap, tap } from "rxjs";
import { HeroService } from "../services/heros.service";
import { Hero } from "../models/hero.model";
import { SnackBarService } from "../services/snackbar.service";
import { APIResponse } from "../models/api.model";

@Injectable()
export class HeroEffects {
  private action$ = inject(Actions);
  private heroService = inject(HeroService);
  private snackBarService = inject(SnackBarService);

  /**
   * Effect for get data of super hero filtered
   */
  getHeroData$ = createEffect(() =>
    this.action$.pipe(
      ofType(getHeroData),
      switchMap(action => 
        this.heroService.getHeroData(action.filter).pipe(
          map((data: Hero[]) => ({
            type: HERO_ACTIONS.GET_HERO_DATA_SUCCESS,
            data
          })),
          catchError(() => EMPTY)
        )
      )
    )
  )

  /**
   * Effect for delete a super hero
   */
  deteleHero$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteHero),
      switchMap(action =>
        this.heroService.deleteHero(action.id).pipe(
          map(() => {
            this.snackBarService.show('El super heroe se ha borrado correctamente');
            return {
              type: HERO_ACTIONS.DELETE_HERO_SUCCESS,
              id: action.id
            }
          }),
          catchError(() => EMPTY)
        )
      )
    )
  )

  /**
   * Effect for save the information about a super hero
   */
  saveHero$ = createEffect(() =>
    this.action$.pipe(
      ofType(saveHero),
      switchMap(action =>
        this.heroService.saveHero(action.hero).pipe(
          map((response: APIResponse) => {
            this.snackBarService.show('Se han guardado los datos');
            return {
              type: HERO_ACTIONS.SET_HERO_EDIT,
              hero: response.data
            }
          }),
          catchError(() => EMPTY)
        )
      )
    )
  )
}