import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, filter, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { HeroState } from '../../../../models/state.model';
import { getHeroData } from '../../../../store/app.actions';


@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss']
})
export class InputFilterComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private store = inject(Store<HeroState>);

  inputFilter: FormControl<string> = new FormControl('', { nonNullable: true });

  /**
   * Angular lifecycle: Inits the observable to call the filter of data
   */
  ngOnInit(): void {
    this.inputFilter.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        debounceTime(500),
        filter(value => !!value),
        tap(value => this.store.dispatch(getHeroData({ filter: value })))
      ).subscribe();
  }
}
