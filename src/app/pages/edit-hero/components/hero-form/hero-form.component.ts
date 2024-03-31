import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeroState } from '../../../../models/state.model';
import { filter, take } from 'rxjs';
import { FormHero, Hero } from '../../../../models/hero.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getHeroEditData } from '../../../../store/app.selectors';
import { MatChipInputEvent } from '@angular/material/chips';
import { clearHeroEdit, saveHero, setHeroEdit } from '../../../../store/app.actions';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  private store = inject(Store<HeroState>);
  private destroyRef = inject(DestroyRef);

  heroForm: FormGroup<FormHero> = new FormGroup<FormHero>({
    id: new FormControl(undefined, { nonNullable: true, }),
    real_name: new FormControl('', { validators: Validators.required, nonNullable: true }),
    alias: new FormControl('', { validators: Validators.required, nonNullable: true }),
    group: new FormControl('', { nonNullable: true }),
    planet_of_origin: new FormControl('', { validators: Validators.required, nonNullable: true }),
    powers: new FormControl([], { nonNullable: true }),
    weapons: new FormControl([], { nonNullable: true })
  });

  powers: string[] = [];
  weapons: string[] = [];

  ngOnInit(): void {
    this.store.select(getHeroEditData)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(value => !!value)
      ).subscribe((value) => {
        this.initSetFormValue({...value!});
        setTimeout(() => this.store.dispatch(clearHeroEdit()), 0);
      });
  }

  private initSetFormValue(values: Hero): void {
    this.heroForm.setValue({
      id: values.id,
      alias: values.alias,
      group: values.group,
      planet_of_origin: values.planet_of_origin,
      real_name: values.real_name,
      powers: [...values.powers],
      weapons: [...values.weapons]
    });

    this.heroForm.markAsTouched();

    this.powers = [...values.powers];
    this.weapons = [...values.weapons];
  }

  removeItem(item: string, array: string[]): void {
    const idx = array.findIndex(value => value === item);
    if (idx) {
      array.splice(idx, 1);
    }
  }

  addItem(event: MatChipInputEvent, array: string[]): void {
    const value = (event.value || '').trim();
    if (value) {
      array.push(value);
    }
    event.chipInput!.clear();
  }

  save(): void {
    this.store.dispatch(saveHero({ hero: {
      ...this.heroForm.getRawValue(),
      id: this.heroForm.controls.id.value ?? undefined,
      alias: this.heroForm.controls.alias.value.toLocaleLowerCase()
    }}))
  }

  reset(): void {
    this.heroForm.reset();
    this.weapons = [];
    this.powers = [];
  }
}

