import { Component, inject } from '@angular/core';
import { LoadingService } from '../../services/loader.service';

@Component({
  selector: 'app-loader-wrapper',
  templateUrl: './loader-wrapper.component.html',
  styleUrls: ['./loader-wrapper.component.scss']
})
export class LoaderWrapperComponent {
  loadingService = inject(LoadingService);

  isLoading = this.loadingService.isLoading();
}
