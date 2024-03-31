import { createAction, props } from "@ngrx/store";
import { Hero } from "../models/hero.model";

export enum HERO_ACTIONS {
  GET_HERO_DATA = '[HERO] GET HERO DATA',
  GET_HERO_DATA_SUCCESS = '[HERO] GET HERO DATA SUCCESS',
  SET_HERO_EDIT = '[HERO] SET HERO EDIT',
  CLEAR_HERO_EDIT = '[HERO] CLEAR HERO EDIT',
  DELETE_HERO = '[HERO] DELETE HERO',
  DELETE_HERO_SUCCESS = '[HERO] DELETE HERO SUCCESS',
  CLEAR_SEARCH = '[HERO] CLEAR SEARCH',
  SAVE_HERO = '[HERO] SAVE HERO'
};

/**
 * Get the list of heros filtered: Init
 */
export const getHeroData = createAction (
  HERO_ACTIONS.GET_HERO_DATA,
  props<{
    filter: string
  }>()
);

/**
 * Get the list of heros filtered: Success
 */
export const getHeroDataSuccess = createAction (
  HERO_ACTIONS.GET_HERO_DATA_SUCCESS,
  props<{
    data: Hero[]
  }>()
);

/**
 * Sets the information about a super hero to edit
 */
export const setHeroEdit = createAction (
  HERO_ACTIONS.SET_HERO_EDIT,
  props<{
    hero: Hero
  }>()
);

/**
 * Clears the information about a super hero to edit
 */
export const clearHeroEdit = createAction (
  HERO_ACTIONS.CLEAR_HERO_EDIT
);

/**
 * Delete a super hero: Init
 */
export const deleteHero = createAction (
  HERO_ACTIONS.DELETE_HERO,
  props<{
    id: number
  }>()
);

/**
 * Delete a super hero: Success
 */
export const deleteHeroSucess = createAction (
  HERO_ACTIONS.DELETE_HERO_SUCCESS,
  props<{
    id: number
  }>()
);

/**
 * Clears the list of heros from a data filtering
 */
export const clearSearch = createAction (
  HERO_ACTIONS.CLEAR_SEARCH
);

/**
 * Saves the data of a new / edit super hero
 */
export const saveHero = createAction (
  HERO_ACTIONS.SAVE_HERO,
  props<{
    hero: Hero
  }>()
);
