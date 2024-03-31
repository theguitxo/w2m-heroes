import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "./app.state";
import { HeroState } from "../models/state.model";
import { clearHeroEdit, clearSearch, deleteHeroSucess, getHeroData, getHeroDataSuccess, setHeroEdit } from "./app.actions";
import { Hero } from "../models/hero.model";

const _storeReducer = createReducer (
  initialState,
  on(getHeroData, (state: HeroState) => ({ ..._getHeroData({...state})})),
  on(getHeroDataSuccess, (state: HeroState, { data }) => ({ ..._getHeroDataSuccess({...state}, data)})),
  on(setHeroEdit, (state: HeroState, { hero }) => ({..._setHeroEdit({...state}, hero)})),
  on(clearHeroEdit, (state: HeroState) => ({..._clearHeroEdit({...state})})),
  on(deleteHeroSucess, (state: HeroState, { id }) => ({..._deleteHeroSuccess({...state}, id)})),
  on(clearSearch, (state: HeroState) => ({..._clearSearch({...state})}))
);

export function storeReducer(state: HeroState | undefined, action: Action): HeroState {
  return _storeReducer(state, action);
}

/**
 * Gets the super hero data filtered: Init
 * @param state State before the operation
 * @returns State modified after the operation
 */
export function _getHeroData(state: HeroState): HeroState {
  return {
    ...state,
    heroList: [],
    noData: false,
    heroEdit: undefined
  }
}

/**
 * Gets the super hero data filtered: Success
 * @param state State before the operation
 * @returns State modified after the operation
 */
export function _getHeroDataSuccess(state: HeroState, data: Hero[]): HeroState {
  return {
    ...state,
    heroList: data,
    noData: !data.length
  }
}

/**
 * Sets the information about a super hero to edit
 * @param state State before the operation
 * @param hero Information about the super hero
 * @returns State modified after the operation
 */
export function _setHeroEdit(state: HeroState, hero: Hero): HeroState {
  return {
    ...state,
    heroEdit: hero
  }
}

/**
 * Clear the information about a super hero to edit
 * @param state State before the operation
 * @returns State modified after the operation 
 */
export function _clearHeroEdit(state: HeroState): HeroState {
  return {
    ...state,
    heroEdit: undefined
  }
}

/**
 * Delete a super hero: Success
 * @param state State before the operation
 * @param id Is of the super hero to delete
 * @returns State modified after the operation
 */
export function _deleteHeroSuccess(state: HeroState, id: number): HeroState {
  const updatedList = state.heroList.filter(h => h.id !== id)
  return {
    ...state,
    heroList: updatedList,
    noData: !updatedList.length
  }
}

/**
 * Clears the result of filter super hero data
 * @param state State before the operation
 * @returns State modified after the operation 
 */
export function _clearSearch(state: HeroState): HeroState {
  return {
    ...state,
    heroList: [],
    noData: false
  }
}
