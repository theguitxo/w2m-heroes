import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HeroState } from "../models/state.model";
import { Hero } from "../models/hero.model";

export const selectState = createFeatureSelector<HeroState>('store');

/**
 * Get the list of filtered super hero
 */
export const getHeroList = createSelector (
  selectState,
  (state: HeroState): Hero[] => state?.heroList
);

/**
 * Return if has filtered data
 */
export const hasHeroList = createSelector (
  selectState,
  (state: HeroState): boolean => !!state?.heroList?.length
);

/**
 * Return if filter has not found data
 */
export const noHeroData = createSelector (
  selectState,
  (state: HeroState): boolean => state?.noData
);

/**
 * Return the data of a super hero to edit
 */
export const getHeroEditData = createSelector (
  selectState,
  (state: HeroState): Hero | undefined => state?.heroEdit
);
