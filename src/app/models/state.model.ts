import { Hero } from "./hero.model";

export interface HeroState {
  heroList: Hero[];
  heroEdit?: Hero;
  noData: boolean;
}
