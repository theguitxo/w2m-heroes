import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorDialogComponent {
  /**
   * Constructor of the class
   * @param data object with the data to show in the modal
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}
}
