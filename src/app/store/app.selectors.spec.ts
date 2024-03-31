import { HeroState } from "../models/state.model"
import { getHeroList, hasHeroList } from "./app.selectors"

describe('Hero Selectors', () => {
  const initialState: HeroState = {
    heroList: [],
    noData: false
  }

  const withHeros: HeroState = {
    ...initialState,
    heroList: [
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
    ]
  }

  it('should return true for has data if heroList has items', () => {
    const result = hasHeroList.projector(withHeros);
    expect(result).toBeTruthy();
  });

  it('should return the items list', () => {
    const result = getHeroList.projector(withHeros);
    expect(result.length).toBe(2);
  });
})