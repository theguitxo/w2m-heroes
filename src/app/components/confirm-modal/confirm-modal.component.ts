import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {
  /**
   * Constructor of the class
   * @param data object with the data to show in the modal
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string, body: string }
  ) {}
}
