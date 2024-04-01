import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { HeroState } from '../../models/state.model';
import { Store } from '@ngrx/store';
import { clearSearch } from '../../store/app.actions';
import { Router } from '@angular/router';
import { LoadingService } from '../../services/loader.service';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListHeroComponent implements OnDestroy {
  private loadingService = inject(LoadingService);
  private store = inject(Store<HeroState>);
  private router = inject(Router);

  isLoading = this.loadingService.isLoading();

  /**
   * Angular lifecycle: Clears the result of filter data on destroy the component
   */
  ngOnDestroy(): void {
    this.store.dispatch(clearSearch());
  }

  /**
   * Navigate to the page for edit / new hero
   */
  newHero(): void {
    this.router.navigate(['hero']);
  }
}
