import { HeroState } from '../models/state.model';
import { clearSearch, deleteHeroSucess, getHeroDataSuccess } from './app.actions';
import * as heroReducer from './app.reducers';
import { initialState } from './app.state';

const herosList = [
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

describe('Hero Reducer', () => {
  it('unknow action: should return the default state', () => {
    const action = {
      type: 'Unknown',
    };

    const state = heroReducer.storeReducer(initialState, action);

    expect(state).toBe(initialState);
  });

  it('getHeroDataSuccess: should set the list into the store', () => {
    const expected: HeroState = {
      heroList: herosList,
      noData: false
    };

    const action = getHeroDataSuccess({ data: herosList });

    const state = heroReducer.storeReducer(initialState, action);

    expect(state).toEqual(expected);
  });

  it('deleteHeroSucess: should remove the hero from the list', () => {
    const expected: HeroState = {
      heroList: herosList.filter(i => i.id !== 2),
      noData: false
    };

    const action = deleteHeroSucess({ id: 2 });

    const state = heroReducer.storeReducer({
      ...initialState,
      heroList: herosList
    }, action);

    expect(state).toEqual(expected);
  });
  
  it('clearSeach: should clear the hero list', () => {
    const action = clearSearch();
    
    const  state = heroReducer.storeReducer({
      ...initialState,
      heroList: herosList
    }, action);

    expect(state.heroList.length).toBe(0);
  });
});
