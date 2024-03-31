import { FormControl } from "@angular/forms";

export interface Hero {
  id?: number;
  real_name: string;
  alias: string;
  group: string;
  planet_of_origin: string;
  powers: string[];
  weapons: string[];
}

export interface FormHero {
  id: FormControl<number | undefined>;
  real_name: FormControl<string>;
  alias: FormControl<string>;
  group: FormControl<string>;
  planet_of_origin: FormControl<string>;
  powers: FormControl<string[]>;
  weapons: FormControl<string[]>;
}
