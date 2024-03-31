import { Component, inject } from '@angular/core';
import { LoadingService } from '../../services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent {
  private loadingService = inject(LoadingService);
  private router = inject(Router);

  isLoading = this.loadingService.isLoading();

  /**
   * navigates to the page to list super heros
   */
  goToList(): void {
    this.router.navigate(['list']);
  }
}
