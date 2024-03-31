import { inject, Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackBarService {
  private snackBar = inject(MatSnackBar);

  /**
   * Shows the snack bar at the top of the screen
   * @param message Message to show into the snack bar
   */
  show(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 5000
    });
  }
}